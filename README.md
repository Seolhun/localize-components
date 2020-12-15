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

As a front-end developer, I found that very difficult to create a UI that considers various variables, inconsistent styles. Sometimes, unexpectable component design made exhausts me.

With this experience in the background, I created `localize-component`.
The advantage of localize-component is that you can make new style UI by overriding `localize` props. But, All colors come from theme context. So localize UI is changed by key and value of theme. 

If you use this, can customize and experience UI extensively by chaning theme you want.

## Goal

- A theme based styling.
- Overriding localize props styling.

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
- @seolhun/localize-components-icon
- @seolhun/localize-components-grid
- @seolhun/localize-components-table

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
import { LocalizeAlert } from '@seolhun/localize-components';
import { LocalizeButton } from '@seolhun/localize-components-atomic';
import { LocalizeInput } from '@seolhun/localize-components-forms';
import { LocalizeIcon } from '@seolhun/localize-components-icon';
import { LocalizeTable } from '@seolhun/localize-components-table';
import { LocalizeRow, LocalizeCol } from '@seolhun/localize-components-grid';
```

## Docs

#### PROD

- Docs - Storybook : [localize-components-docs.surge.sh](http://localize-components-docs.surge.sh/#/)

#### DEV

- Docs - Storybook : [dev.localize-components-docs.surge.sh](http://dev.localize-components-docs.surge.sh/#/)
