import React from 'react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { LocalizeRow, LocalizeCol } from '../../../packages/grid';
import { LocalizeButton } from '../../../packages/atomic';
import { storiesSizeOption, storiesColorOption } from '../_stories';
import { LocalizeSize, LocalizeThemeColors } from '../system';

export default {
  title: 'UI | LocalizeButton',
  decorators: [withKnobs],
  component: LocalizeButton,
};

const events = actions('onClick', 'onMouseOver', 'onMouseOut');
const knobs = {
  content: () => text('Children', 'LocalizeButton'),
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
        <LocalizeButton {...events}>{content}</LocalizeButton>
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
        <LocalizeButton size="xl" {...events}>
          {content}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>lg</h4>
        <LocalizeButton size="lg" {...events}>
          {content}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>md</h4>
        <LocalizeButton size="md" {...events}>
          {content}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>sm</h4>
        <LocalizeButton size="sm" {...events}>
          {content}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h4>xs</h4>
        <LocalizeButton size="xs" {...events}>
          {content}
        </LocalizeButton>
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
        <LocalizeButton {...events} {...props}>
          {content}
        </LocalizeButton>
      </LocalizeCol>
    </LocalizeRow>
  );
};
