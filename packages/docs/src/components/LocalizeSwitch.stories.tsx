import React from 'react';
import { actions } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  // select
} from '@storybook/addon-knobs';
import { LocalizeSwitch } from '@seolhun/localize-components-atomic';

// import { BDSize } from '../system';
// import { storiesSizeOption } from '../_stories';

export default {
  title: 'UI | LocalizeSwitch',
  decorators: [withKnobs],
  component: LocalizeSwitch,
};

const eventsFromNames = actions('onClick', 'onMouseOver', 'onMouseOut');

export const Default = () => {
  const content = text('Children', 'Hello');
  return <LocalizeSwitch {...eventsFromNames}>{content}</LocalizeSwitch>;
};

export const DynamicProps = () => {
  const content = text('Children', 'Hello');
  // const disabled = boolean('Disabled', false);
  // const square = boolean('Square', false);
  // const size = select('Size', storiesSizeOption, 'md');
  // const fontSize = select('FontSize', storiesSizeOption, 'sm');
  // const color = select('Color', storiesColorOption, '');

  return <LocalizeSwitch {...eventsFromNames}>{content}</LocalizeSwitch>;
};
