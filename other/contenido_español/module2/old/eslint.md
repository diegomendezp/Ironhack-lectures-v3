---
title: "ESLint"
date: 2018-11-12T16:06:07+01:00
weight: 20
---

## instalation

```bash
$ npm install -g eslint
```

in folder project

```bash
$ eslint --init
```
you will see differents questions select the following answers
- To check syntax, find problems, and enforce code style
- CommonJS (require/exports)
- None of these
- Node (Observe that these are checkboxes. Check with space bar.)
- use popular style guide
- standard
- json

if you use standard replace `.eslintrc.json` with

```json
{
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "standard",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "indent": [
      2,
      2
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}
```

- [https://eslint.org/](https://eslint.org/)
