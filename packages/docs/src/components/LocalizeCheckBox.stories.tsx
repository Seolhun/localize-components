import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { LocalizeCheckBox } from '@seolhun/localize-components-atomic';

import { storiesColorOption } from '../_stories';

export default {
  title: 'Atomic | LocalizeCheckBox',
  decorators: [withKnobs],
  component: LocalizeCheckBox,
};

const eventsFromNames = actions('onClick', 'onMouseOver', 'onMouseOut');

export const Default = () => {
  const content = text('Children', 'Hello');
  return <LocalizeCheckBox {...eventsFromNames}>{content}</LocalizeCheckBox>;
};

export const DynamicProps = () => {
  const content = text('Children', 'Hello');
  const disabled = boolean('Disabled', false);
  const checked = boolean('Checked', false);
  const primaryColor = select('PrimaryColor', storiesColorOption, 'primary01');

  return (
    <LocalizeCheckBox
      {...eventsFromNames}
      primaryColor={primaryColor}
      disabled={disabled}
      checked={checked}
    >
      {content}
    </LocalizeCheckBox>
  );
};
