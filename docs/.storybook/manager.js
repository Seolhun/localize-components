import { addons } from '@storybook/addons';

import { createThemeFormLocalizeTheme } from './theme';
import logo from './logo.png';

/**
 * @see https://storybook.js.org/docs/react/configure/features-and-behavior
 */
addons.setConfig({
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
  previewTabs: {
    canvas: {
      hidden: true
    },
  },
  theme: createThemeFormLocalizeTheme({
    options: {
      brandTitle: 'Localize-Components',
      brandUrl: 'http://localize-components-docs.surge.sh/#/',
      brandImage: logo,
    }
  })
});
