import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';
import { LocalizeChip } from '../../../packages/atomic/dist';
import { storiesSizeOption, storiesColorOption } from '../_stories';
import { LocalizeSize, LocalizeThemeColors } from '../system';

export default {
  title: 'UI | LocalizeChip',
  decorators: [withKnobs],
  component: LocalizeChip,
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
        <LocalizeChip {...events}>{children}</LocalizeChip>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const Size = () => {
  const children = knobs.children();
  return (
    <LocalizeRow>
      <LocalizeCol md={8}>
        <h4>xl</h4>
        <LocalizeChip size="xl" {...events}>
          {children}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>lg</h4>
        <LocalizeChip size="lg" {...events}>
          {children}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>md</h4>
        <LocalizeChip size="md" {...events}>
          {children}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>sm</h4>
        <LocalizeChip size="sm" {...events}>
          {children}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>xs</h4>
        <LocalizeChip size="xs" {...events}>
          {children}
        </LocalizeChip>
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
        <LocalizeChip {...events} {...props}>
          {children}
        </LocalizeChip>
      </LocalizeCol>
    </LocalizeRow>
  );
};
