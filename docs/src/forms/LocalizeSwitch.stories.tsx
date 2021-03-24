import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeSwitch, LocalizeSwitchProps } from '../../../packages/forms/dist';

import { storiesColorOptions, storiesIntentOptions, storiesScaleOptions } from '../controls';

export default {
  title: 'Forms/LocalizeSwitch',
  component: LocalizeSwitch,
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
      defaultValue: 'neutral6',
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

const Switch: Story<LocalizeSwitchProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return <LocalizeSwitch {...args} onChange={onChange} checked={checked} />;
};

export const Default = Switch.bind({});
Default.args = {
  label: 'Label',
  help: 'Help',
  checked: false,
  error: false,
  disabled: false,
};
