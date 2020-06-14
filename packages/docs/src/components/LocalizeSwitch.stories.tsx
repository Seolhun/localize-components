import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { LocalizeSwitch } from '@seolhun/localize-components-atomic';

import { storiesColorOption } from '../../src/_stories';

export default {
  title: 'Atomic | LocalizeSwitch',
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
  const disabled = boolean('Disabled', false);
  const checked = boolean('Checked', false);
  const primaryColor = select('PrimaryColor', storiesColorOption, 'primary01');

  return (
    <LocalizeSwitch
      {...eventsFromNames}
      primaryColor={primaryColor}
      disabled={disabled}
      checked={checked}
    >
      {content}
    </LocalizeSwitch>
  );
};
