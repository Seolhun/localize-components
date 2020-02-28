# Localize React Components

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
