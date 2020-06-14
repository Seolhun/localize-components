import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { LocalizeButton } from '@seolhun/localize-components-atomic';

import { storiesColorOption, storiesSizeOption } from '../../src/_stories';

// import { BDSize } from '../system';
// import { storiesSizeOption } from '../_stories';

export default {
  title: 'Atomic | LocalizeButton',
  decorators: [withKnobs],
  component: LocalizeButton,
};

const eventsFromNames = actions('onClick', 'onMouseOver', 'onMouseOut');

export const Default = () => {
  const content = text('Children', 'Hello');
  return <LocalizeButton {...eventsFromNames}>{content}</LocalizeButton>;
};

export const DynamicProps = () => {
  const content = text('Children', 'Hello');
  const disabled = boolean('Disabled', false);
  const size = select('Size', storiesSizeOption, 'md');
  const primaryColor = select('Color', storiesColorOption, '');

  return (
    <LocalizeButton {...eventsFromNames} primaryColor={primaryColor}>
      {content}
    </LocalizeButton>
  );
};
