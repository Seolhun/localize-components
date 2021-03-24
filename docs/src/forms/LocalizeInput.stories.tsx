import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeInput, LocalizeInputProps } from '../../../packages/forms/dist';

import { storiesColorOptions, storiesIntentOptions, storiesScaleOptions } from '../controls';

export default {
  title: 'Forms/LocalizeInput',
  component: LocalizeInput,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
    intent: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    primaryColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    neutralColor: {
      defaultValue: 'inversed3',
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
    inversedFontColor: {
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
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <LocalizeInput {...args} onChange={onChange} value={value} localize={localize} />;
};

export const Default = Input.bind({});
Default.args = {
  value: 'LocalizeInput',
  rounded: true,
  disabled: false,
};
