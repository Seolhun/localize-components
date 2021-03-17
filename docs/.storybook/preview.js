import { decorators } from './decorators';
import { parameters } from './parameters';

/**
 * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals
 */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'LIGHT',
    toolbar: {
      items: ['LIGHT', 'DARK'],
    },
  },
};

export { decorators, parameters };
