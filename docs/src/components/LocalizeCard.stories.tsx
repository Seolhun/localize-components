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
  content: () => text('Children', 'LocalizeHr'),
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
        <LocalizeHr {...events}>{content}</LocalizeHr>
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
        <LocalizeHr {...events} {...props}>
          {content}
        </LocalizeHr>
      </LocalizeCol>
    </LocalizeRow>
  );
};
