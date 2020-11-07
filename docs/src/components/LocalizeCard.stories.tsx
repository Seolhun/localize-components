import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';
import { LocalizeHr } from '../../../packages/atomic/dist';
import { storiesSizeOption, storiesColorOption } from '../_stories';
import { LocalizeSize, LocalizeThemeColors } from '../system';

export default {
  title: 'UI | LocalizeHr',
  decorators: [withKnobs],
  component: LocalizeHr,
};

const events = actions('onChange', 'onClick', 'onMouseOver', 'onMouseOut');
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
        <LocalizeHr {...events}>{children}</LocalizeHr>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const DynamicProps = () => {
  const children = knobs.children();
  const bgColor = knobs.bgColor();
  const borderRadius = knobs.borderRadius();
  const disabled = knobs.disabled();
  const size = knobs.size();
  const props = {
    children,
    bgColor,
    borderRadius,
    size,
    disabled,
  };

  return (
    <LocalizeRow>
      <LocalizeCol>
        <LocalizeHr {...events} {...props}>
          {children}
        </LocalizeHr>
      </LocalizeCol>
    </LocalizeRow>
  );
};
