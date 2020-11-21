<div style='text-align: center; margin-top: 40px; width: 100%;'>
  <img src='./.github/logo.png' />
</div>

## Production

![Github Build](https://github.com/Seolhun/localize-components/workflows/Github%20Build/badge.svg?branch=master)
[![Build Status](https://travis-ci.com/Seolhun/localize-components.svg?branch=master)](https://travis-ci.com/Seolhun/localize-components)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/87c0d9f96fc74d94b60c0c397a6b30c6)](https://www.codacy.com/app/shun10114/localize-components?utm_source=github.com&utm_medium=referral&utm_content=Seolhun/localize-components&utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/2ab413e3-946a-4719-bb75-07e76851cbba)](https://codebeat.co/projects/github-com-seolhun-localize-components-master)

## Development

![Github Build](https://github.com/Seolhun/localize-components/workflows/Github%20Build/badge.svg?branch=develop)
[![Build Status](https://travis-ci.com/Seolhun/localize-components.svg?branch=develop)](https://travis-ci.com/Seolhun/localize-components)

## Why

- I just want to build react components without third party css side-effect.
  - All components have global stylesheet affecting origin product css.

## Goal

- Localized-style
- All components be changed for Theme by React Context.
  - All core variables is controlled by context
- Processing all most colors

## Used stacks

- TypeScript
- Babel 7
- Lerna
- RollupJS
- React
- EmotionJS
- Storybook

## Mono Repos

#### Documents

- @seolhun/localize-components-docs

#### Components

- @seolhun/localize-components
- @seolhun/localize-components-atomic
- @seolhun/localize-components-grid

#### Utils

- @seolhun/localize-components-hooks
- @seolhun/localize-components-utils

#### Types

- @seolhun/localize-components-styled-types

## How to getting started

#### Install Package

```bash
# NPM
$ npm install --save @seolhun/localize-components @seolhun/localize-components-atomic

# Yarn
$ yarn add @seolhun/localize-components @seolhun/localize-components-atomic
```

## How to use

#### import

```js
import { Alert } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';
```

## Examples

### PROD

- Docs - Storybook : [localize-components-docs.surge.sh](http://localize-components-docs.surge.sh/#/)

### DEV

- Docs - Storybook : [dev.localize-components-docs.surge.sh](http://dev.localize-components-docs.surge.sh/#/)
