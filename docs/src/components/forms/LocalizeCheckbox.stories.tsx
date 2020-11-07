import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeCheckbox, LocalizeCheckboxProps } from '../../../../packages/atomic/dist';

import { storiesColorOptions } from '../../controls';

export default {
  title: 'Atmoic | Forms | LocalizeCheckbox',
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

export const CheckboxStories = Checkbox.bind({});
CheckboxStories.args = {
  label: 'Label',
  help: 'Help',
  value: 'LocalizeCheckbox',
  error: false,
  disabled: false,
};
