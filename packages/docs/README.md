# Localize React Components

[![CircleCI](https://circleci.com/gh/Seolhun/localize-components/tree/master.svg?style=svg)](https://circleci.com/gh/Seolhun/localize-components/tree/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/87c0d9f96fc74d94b60c0c397a6b30c6)](https://www.codacy.com/app/shun10114/localize-components?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Seolhun/localize-components&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/2ab413e3-946a-4719-bb75-07e76851cbba)](https://codebeat.co/projects/github-com-seolhun-localize-components-master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

- Author : [HunSeol](https://github.com/Seolhun/)

## Goal
- localized-style for custom.
- stylesheet variable(using props) on localize-components.
- One components must has a one stylesheet and design. but components be changed using theme props.

## Why
- I just want to build react components has no side effect. because some components has a global stylesheet affect original project style sheet.
- **I think that all components must be standalone anywhere, any environments.**

## Used stacks
- React
- TypeScript
- SCSS
- emotion
- Docz

## How to getting started
#### Install Package
```bash
$ yarn add @seolhun/localize-components
$ yarn add @seolhun/localize-components-atomic
```

## How to use
#### import
```js
import { Button } from '@seolhun/localize-components-atomic';
import { Alert } from '@seolhun/localize-components';
```

## Examples
### PROD
- Docs : [localize-components-examples.surge.sh](http://localize-components-docs.surge.sh/#/)
- Examples : [localize-components-examples.surge.sh](http://localize-components-examples.surge.sh/#/)

### DEV
- Docs : [dev.localize-components-examples.surge.sh](http://dev.localize-components-docs.surge.sh/#/)
- Examples : [dev.localize-components-examples.surge.sh](http://dev.localize-components-examples.surge.sh/#/)
