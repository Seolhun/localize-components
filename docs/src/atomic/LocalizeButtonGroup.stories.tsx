import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import {
  LocalizeButton,
  LocalizeButtonGroup,
  LocalizeButtonGroupProps,
} from '../../../packages/atomic/dist';

import { storiesSizeOptions, storiesAlignItemsOptions, storiesJustifyContentOptions } from '../controls';

export default {
  title: 'Atmoic | LocalizeButtonGroup',
  component: LocalizeButton,
  argTypes: {
    direction: {
      defaultValue: 'row',
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesSizeOptions,
      },
    },
  },
};

const ButtonGroup: Story<LocalizeButtonGroupProps> = (args) => {
  const children = args.children;
  return (
    <LocalizeButtonGroup {...args} gutter={args.gutter}>
      <LocalizeButton {...args} intent="default" variant='outline'>
        {children}
      </LocalizeButton>
      <LocalizeButton {...args} intent="default">
        {children}
      </LocalizeButton>
      <LocalizeButton {...args} intent="primary">
        {children}
      </LocalizeButton>
    </LocalizeButtonGroup>
  );
};

export const Default = ButtonGroup.bind({});
Default.args = {
  children: 'LocalizeButton',
  gutter: 0,
  rounded: true,
  disabled: false,
};
