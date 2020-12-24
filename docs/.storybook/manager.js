import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import logo from './logo.png';

/**
 * @see https://storybook.js.org/docs/react/configure/features-and-behavior
 */
addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Localize-Components',
    brandUrl: 'http://localize-components-docs.surge.sh/#/',
    brandImage: logo,
  },
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: true,
});
