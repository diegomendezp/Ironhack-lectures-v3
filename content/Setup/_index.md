---
title: Setup
weight: 1
pre: ''
chapter: true

---
## Setting up the environment 

## Terminal environment

### ZSH

#### HowTo install zsh in many platforms

##### **macOS**

```bash
brew install zsh zsh-completions
```

Assuming you have Homebrew installed. If not, most versions of macOS ship zsh by default, but it's normally an older version.

Try `zsh --version` before installing it from Homebrew. If it's newer than 4.3.9 you might be OK. Preferably newer than or equal to 5.0.

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### iTerm2

Software that enhance the functionality of the terminal.

[Download Software](https://www.iterm2.com/)

Font inconsolata for powerline in order to see some git character.
[Link](https://github.com/powerline/fonts)

### Oh My ZSH

[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

instalation

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### Spaceship theme

This is a theme for zsh. You can use the link in order to install the theme. [Link](https://github.com/denysdovhan/spaceship-zsh-theme)

### NodeJS

[Link](https://nodejs.org/en/)

```bash
$ node -v
v8.6.0
$ npm -v
5.3.0
```

## VSCode

Configuration file:

```json
{
    "workbench.colorCustomizations": {
        "activityBarBadge.background": "#C6FF00",
        "list.activeSelectionForeground": "#C6FF00",
        "list.inactiveSelectionForeground": "#C6FF00",
        "list.highlightForeground": "#C6FF00",
        "scrollbarSlider.activeBackground": "#C6FF0050",
        "editorSuggestWidget.highlightForeground": "#C6FF00",
        "textLink.foreground": "#C6FF00",
        "progressBar.background": "#C6FF00",
        "pickerGroup.foreground": "#C6FF00",
        "tab.activeBorder": "#C6FF00"
    },
    "materialTheme.cache.workbench.settings": {
        "accent": "Acid Lime",
        "themeColours": "Default",
        "accentPrevious": "Orange"
    },
    "workbench.colorTheme": "Material Theme",
    "editor.fontFamily": "Operator Mono",
    "editor.fontSize": 16,
    "editor.wordWrap": "off",
    "pasteAndIndent.selectAfter": true,
    "editor.formatOnPaste": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.detectIndentation": true
}
```

Download the font Operator Mono. [Link]()

### plugins

List of plugins.

[ES7 React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
[Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)
[Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

another theme could be [citylights](http://citylights.xyz/);

#### JSHint

How to install JShint in code  [Link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)

This plugin needs the `jshint` package installed globally

```bash
npm install -g jshint
```

#### ESLint

[Link](https://eslint.org)

In order to use eslint we need to install eslint package.

```bash
npm install -g eslint
```

And we will need to create the configuration file `.eslintrc.json` in your project folder.
In this file we will set up all the options and rules that we will apply to our project.

Because we don't want to review all the rules available we will install some differents packages with differents rules applied.

[Airbnb](https://github.com/airbnb/javascript)

[Walmart](https://github.com/walmartlabs/eslint-config-defaults)

```bash
npm install -g eslint-plugin-import eslint-config-airbnb-base eslint-config-defaults
```

#### `eslintrc.json`

```json
{
  "extends": [
    "airbnb/base",
    "defaults/rules/eslint/es6/off"],
  "rules": {
    "no-console": "off"
  }
}
```

### Emmet

Check documentation [link](https://docs.emmet.io)

## Git

### `.gitconfig`

```batch
# This is Git's per-user configuration file.

[user]
  name = <your name here>
  email = <write her your email without <> >
[core]
  excludesfile = /Users/<your user name>/.gitignore_global
  editor = nano
  pager = cat
[alias]
  lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
  lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
  lg = !"git lg1"
```

### .gitignore_global

```txt
*~
.DS_Store
*.orig
settings.json

xcuserdata
xccheckout

/node_modules/
.idea/workspace.xml
.idea/tasks.xml
.idea_modules/
encodings.xml
.env
```

{{%attachments style="orange" /%}}