import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';
import { LocalizeInput } from '../../../packages/atomic/dist';
import { storiesSizeOption, storiesColorOption } from '../_stories';
import { LocalizeSize, LocalizeThemeColors } from '../system';

export default {
  title: 'UI | LocalizeInput',
  decorators: [withKnobs],
  component: LocalizeInput,
};

const events = actions('onClick', 'onMouseOver', 'onMouseOut');
const knobs = {
  children: () => text('children', 'LocalizeButton'),
  fontColor: () => select<LocalizeThemeColors>('fontColor', storiesColorOption, 'neutral1'),
  bgColor: () => select<LocalizeThemeColors>('bgColor', storiesColorOption, 'primary'),
  bdColor: () => select<LocalizeThemeColors>('bdColor', storiesColorOption, 'primary'),
  size: () => select<LocalizeSize>('size', storiesSizeOption, 'md') as LocalizeSize,
  borderRadius: () => text('borderRadius', ''),
  disabled: () => boolean('disabled', false),
};

export const Default = () => {
  const children = knobs.children();
  return (
    <LocalizeRow>
      <LocalizeCol>
        <LocalizeInput {...events}>{children}</LocalizeInput>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const DynamicProps = () => {
  const children = knobs.children();
  const bgColor = knobs.bgColor();
  const borderRadius = knobs.borderRadius();
  const disabled = knobs.disabled();
  const props = {
    children,
    bgColor,
    borderRadius,
    disabled,
  };

  return (
    <LocalizeRow>
      <LocalizeCol>
        <LocalizeInput {...events} {...props}>
          {children}
        </LocalizeInput>
      </LocalizeCol>
    </LocalizeRow>
  );
};
