# Airbloc hermes project

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Status
- master
[![CircleCI](https://circleci.com/gh/airbloc/airbloc-hermes/tree/master.svg?style=svg)](https://circleci.com/gh/airbloc/airbloc-hermes/tree/master)

## Modules
- hermes
- hermes-utils
- hermes-types
- hermes-examples
- hermes-docs

## Used stacks
- TypeScript
- SCSS
- React

## Getting start

#### Install Package
- NPM
```bash
$ npm install @airbloc/hermes@latest
```

- Yarn
```bash
$ yarn add @airbloc/hermes@latest
```

- JavaScript - CDN
```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Hermex Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="http://airbloc-hermes.surge.sh/index.js"></script>
</head>
<body>
  <section id='airbloc-hermes' />
</body>
<script type="text/javascript">
  window.Airbloc.render('#airbloc-hermes', {
    locale: 'ko',
    position: 'bottom-right',
    theme: {
      mainColor: '#28a745',
      subColor: '#0069d9',
      useGradient: true,
    },
    subTheme: {
      mainColor: '#28a745',
    },
  });
</script>
</html>
```

## Docs
[airbloc-hermes docs](http://airbloc-hermes-docs.surge.sh/)

## Examples
[airbloc-hermes examples](http://airbloc-hermes-examples.surge.sh/#/)
