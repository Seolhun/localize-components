# Localize Components Atomic

## Used stacks

- TypeScript
- Babel 7
- Lerna
- RollupJS
- React
- EmotionJS
- Storybook

## How to getting started
#### Install Package

```bash
$ npm install @seolhun/localize-components-atomic
```

## How to use
#### import
```js
import { LocalizeButton } from '@seolhun/localize-components-atomic';
```

## Localize-Component styling Priority

1. Components props
  - eg) Button.variant: solid
2. Component `intent` props
  - eg) Button.intent: primary
3. Localize style variable `localize` props
