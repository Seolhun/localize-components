import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeInput, LocalizeInputProps } from '../../../../packages/atomic/dist';

import { storiesColorOptions } from '../../controls';

export default {
  title: 'Atmoic | Forms | LocalizeInput',
  component: LocalizeInput,
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
    bdColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
  },
};

const Input: Story<LocalizeInputProps> = (args) => {
  const [value, setValue] = React.useState(args.value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <LocalizeInput {...args} onChange={onChange} value={value} />;
};

export const Default = Input.bind({});
Default.args = {
  label: 'Label',
  help: 'Help',
  value: 'LocalizeInput',
  error: false,
  disabled: false,
};
