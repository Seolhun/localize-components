import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeSwitch, LocalizeSwitchProps } from '../../../packages/forms/dist';

import { storiesColorOptions } from '../controls';

export default {
  title: 'Forms | LocalizeSwitch',
  component: LocalizeSwitch,
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
