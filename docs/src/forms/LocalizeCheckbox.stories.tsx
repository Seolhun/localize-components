import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeCheckbox, LocalizeCheckboxProps } from '../../../packages/forms/dist';

import { storiesColorOptions } from '../controls';

export default {
  title: 'Forms | LocalizeCheckbox',
  component: LocalizeCheckbox,
  argTypes: {
    fontColor: {
      defaultValue: 'conversion10',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    bgColor: {
      defaultValue: 'conversion1',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
  },
};

const Checkbox: Story<LocalizeCheckboxProps> = (args) => <LocalizeCheckbox {...args} />;

export const Default = Checkbox.bind({});
Default.args = {
  label: 'Label',
  help: 'Help',
  value: 'LocalizeCheckbox',
  error: false,
  disabled: false,
};
