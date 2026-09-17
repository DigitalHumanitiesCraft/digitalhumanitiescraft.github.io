# Fehlerjournal

Rote Zeilen nach `rules/wiederholte-fehler.md`: Fehler, deren Fehlermodus schon
eine dokumentierte Lehre hat. Format: Datum, was passiert ist, welche Lehre
nicht gegriffen hat, Rückverweis auf die letzte Zeile zu derselben Lehre.

1. **2026-09-17** – Mehrere Bash-Aufrufe mit `cd <scratchpad> && ...` abgesetzt,
   zuletzt `cd <memory> && printf ... >> MEMORY.md`. Der letzte hat das
   Arbeitsverzeichnis der Session vom Projekt weg in den Memory-Ordner
   verschoben. Nicht gegriffen: `rules/shell-konventionen.md`, „Kein `cd`. Die
   Session steht im Projektverzeichnis." Keine frühere Zeile zu dieser Lehre in
   diesem Projekt.
2. **2026-09-17** – Im selben Befehl eine Zeile per `>>` an `MEMORY.md`
   angehängt. Nicht gegriffen: `rules/shell-konventionen.md`, „Dateien immer
   über das Write-Tool anlegen, nie per echo, Redirect oder `Set-Content`."
   Keine frühere Zeile zu dieser Lehre in diesem Projekt.
