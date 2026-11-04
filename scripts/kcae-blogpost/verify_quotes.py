"""Check that every supporting quote in the research files occurs in the text behind its access URLs.

Usage: python scripts/kcae-blogpost/verify_quotes.py knowledge/kcae-blogpost/research/*.md > verify.tsv
A quote counts as found when its normalised form is a substring of the normalised page text, as near
when at least 80 per cent of its word 5-grams occur. Pages that render only in a browser yield no text.
"""

import html
import io
import json
import os
import re
import sys
import tempfile
import unicodedata
import urllib.request
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
# Fetched pages are cached outside the repository, they are third-party text.
CACHE = Path(
    os.environ.get("QUOTE_CACHE", Path(tempfile.gettempdir()) / "kcae-quote-cache")
)
CACHE.mkdir(parents=True, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (research quote check)"}
opener = urllib.request.build_opener()


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKC", s).lower()
    s = re.sub(r"[‘’“”„«»'\"`]", "", s)
    s = re.sub(r"[‐-―\-]", " ", s)
    s = re.sub(r"[^\w\s]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def fetch(url: str) -> str:
    key = CACHE / (re.sub(r"[^\w]+", "_", url)[:150] + ".txt")
    if key.exists():
        return key.read_text(encoding="utf-8")
    try:
        req = urllib.request.Request(url, headers=UA)
        with opener.open(req, timeout=40) as r:
            data = r.read()
            ctype = r.headers.get("Content-Type", "")
        if "pdf" in ctype or data[:4] == b"%PDF":
            import pypdf

            text = "\n".join(
                p.extract_text() or "" for p in pypdf.PdfReader(io.BytesIO(data)).pages
            )
        else:
            raw = data.decode("utf-8", "replace")
            raw = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", raw)
            text = html.unescape(re.sub(r"<[^>]+>", " ", raw))
    # Any failure, network or PDF parsing, is reported per URL and never read as absence of the quote.
    except Exception as e:  # noqa: BLE001
        text = f"__FETCH_ERROR__ {e}"
    key.write_text(text, encoding="utf-8")
    return text


def grams(words, n=5):
    return {" ".join(words[i : i + n]) for i in range(max(1, len(words) - n + 1))}


QUOTE = re.compile(r"[\"“]([^\"”]{12,400})[\"”]")
URL = re.compile(r"https?://[^\s)>\]`,;]+")

for path in sys.argv[1:]:
    blocks = re.split(r"\n(?=#{2,3} )", Path(path).read_text(encoding="utf-8"))
    for block in blocks:
        if not block.startswith("#"):
            continue
        term = block.splitlines()[0].lstrip("# ").strip()
        urls = [u.rstrip(".") for line in block.splitlines() for u in URL.findall(line)]
        quotes = [
            q
            for line in block.splitlines()
            if re.search(r"[Pp]assage", line)
            for q in QUOTE.findall(line)
        ]
        texts = {u: fetch(u) for u in dict.fromkeys(urls)}
        for q in quotes:
            nq = norm(q)
            status, where, best = "missing", "", 0.0
            ok = {
                u: t
                for u, t in texts.items()
                if not t.startswith("__FETCH_ERROR__") and len(t) > 500
            }
            for u, t in ok.items():
                nt = norm(t)
                if nq in nt:
                    status, where = "found", u
                    break
                g = grams(nq.split())
                share = len([x for x in g if x in nt]) / len(g)
                if share > best and status == "missing":
                    best, where = share, u
                if share >= 0.8 and status != "found":
                    status, where = f"near {share:.2f}", u
            if not ok:
                status = "no-text " + json.dumps(
                    {u: t[:80] for u, t in texts.items()}, ensure_ascii=False
                )
            if status == "missing":
                status = f"missing best {best:.2f}"
            print(f"{Path(path).name}\t{term}\t{status}\t{where}\t{q[:90]}")
