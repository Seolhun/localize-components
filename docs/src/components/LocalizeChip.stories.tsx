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
  content: () => text('Children', 'LocalizeChip'),
  disabled: () => boolean('Disabled', false),
  borderRadius: () => text('BorderRadius', '10px'),
  size: () => select<LocalizeSize>('Size', storiesSizeOption, 'md') as LocalizeSize,
  bgColor: () => select<LocalizeThemeColors>('BgColor', storiesColorOption, 'primary'),
};

export const Default = () => {
  const content = knobs.content();
  return (
    <LocalizeRow>
      <LocalizeCol>
        <LocalizeChip {...events}>{content}</LocalizeChip>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const Size = () => {
  const content = knobs.content();
  return (
    <LocalizeRow>
      <LocalizeCol md={8}>
        <h4>xl</h4>
        <LocalizeChip size="xl" {...events}>
          {content}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>lg</h4>
        <LocalizeChip size="lg" {...events}>
          {content}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>md</h4>
        <LocalizeChip size="md" {...events}>
          {content}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>sm</h4>
        <LocalizeChip size="sm" {...events}>
          {content}
        </LocalizeChip>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>xs</h4>
        <LocalizeChip size="xs" {...events}>
          {content}
        </LocalizeChip>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const DynamicProps = () => {
  const content = knobs.content();
  const bgColor = knobs.bgColor();
  const borderRadius = knobs.borderRadius();
  const disabled = knobs.disabled();
  const size = knobs.size();
  const props = {
    content,
    bgColor,
    borderRadius,
    size,
    disabled,
  };

  return (
    <LocalizeRow>
      <LocalizeCol>
        <LocalizeChip {...events} {...props}>
          {content}
        </LocalizeChip>
      </LocalizeCol>
    </LocalizeRow>
  );
};
