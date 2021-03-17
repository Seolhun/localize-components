import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeInput, LocalizeInputProps } from '../../../packages/forms/dist';

import { storiesColorOptions } from '../controls';

export default {
  title: 'Forms/LocalizeInput',
  component: LocalizeInput,
  argTypes: {
    primaryColor: {
      defaultValue: 'inversed1',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    neutralColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    fontColor: {
      defaultValue: 'inversed1',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    inversedColor: {
      defaultValue: 'inversed10',
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
