# NEXUS Gaming Community

Gemeinsame Website für die Haupt-Community, den CS2-Bereich und den SCUM-Server.

## Seiten

- `/` – Hauptseite
- `/cs2/` – Counter-Strike-2-Community
- `/scum/` – SCUM-Server

## Inhalte anpassen

Die sichtbaren Inhalte liegen in `app/page.tsx`, `app/cs2/page.tsx` und
`app/scum/page.tsx`. Discord-Link, Servername und Server-IP sind derzeit klar
gekennzeichnete Platzhalter.

## GitHub Pages

Der Workflow `.github/workflows/deploy-pages.yml` veröffentlicht die Website
automatisch, sobald Änderungen auf den Branch `main` übertragen werden. Im
GitHub-Repository muss unter **Settings → Pages → Source** einmalig
**GitHub Actions** ausgewählt werden.

## Lokal starten

```powershell
npm.cmd install
npm.cmd run dev
```

Der geprüfte statische GitHub-Pages-Export wird mit `npm.cmd test` erstellt.
