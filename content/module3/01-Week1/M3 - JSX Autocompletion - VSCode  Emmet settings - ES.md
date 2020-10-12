### M3 - JSX Autocompletion - VSCode / Emmet settings - ES



To activate the autocompletion of JSX/HTML in VS Code, we have to update the settings of VSCode:

- Open the VSCode settings `Cmd + Shift + P` (Mac) or  `Ctrl + Shift + P` (Linux/Win).
- Search for and open `Preferences: Open Settings (JSON)`.
- Add the following snippet of code to the end of the `settings.json` file:

```json
"emmet.includeLanguages": { "javascript": "javascriptreact" }, 
"emmet.triggerExpansionOnTab": true,
"emmet.syntaxProfiles": {
        "javascript": "jsx"
 }
```

