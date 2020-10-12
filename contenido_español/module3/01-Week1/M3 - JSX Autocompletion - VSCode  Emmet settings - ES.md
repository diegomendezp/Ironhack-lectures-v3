### M3 - JSX Autocompletion - VSCode / Emmet settings - ES



Para activar la autocompleción de JSX o HTML en VS Code, también hay que editar los settings:
\- Abrir Settings (Cmd o Ctrl + shift + P).
\- Escribir “settings” y seleccionar “Preferences: Open Settings (JSON)”
\- Añadir el snippet emmet.includeLanguages al final del archivo (antes de la última llave):

```
"emmet.includeLanguages": { "javascript": "javascriptreact" }, 
"emmet.triggerExpansionOnTab": true,
"emmet.syntaxProfiles": {
        "javascript": "jsx"
 }
```

\- y para poder usar los shortcuts de emmet en JSX, añadir también emmet.syntaxProfiles

```
"emmet.syntaxProfiles": {
        "javascript": "jsx"
 }
```