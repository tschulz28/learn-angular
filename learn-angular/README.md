## Wichtige Einträge in `angular.json`

- `assets`: Kopiert den `assets`-Ordner ins Build-Verzeichnis.
  ```json
  {
    "glob": "**/*",
    "input": "assets",
    "output": "/assets/"
  }
