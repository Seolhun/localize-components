import { addons } from '@storybook/addons';

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
});
