import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

import logo from './logo.png';

const theme = create({
  brandTitle: 'Localize-Components UI',
  brandUrl: 'https://localize-component.sh',
  brandImage: logo,
});

addons.setConfig({
  theme,
  panelPosition: 'bottom',
});
