import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeRadio, LocalizeRadioProps } from '../../../../packages/atomic/dist';

import { storiesColorOptions } from '../../controls';

export default {
  title: 'Atmoic | Forms | LocalizeRadio',
  component: LocalizeRadio,
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

const Radio: Story<LocalizeRadioProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }

  return <LocalizeRadio {...args} onChange={onChange} checked={checked} />
};

export const Default = Radio.bind({});
Default.args = {
  label: 'Label',
  help: 'Help',
  value: 'LocalizeRadio',
  error: false,
  disabled: false,
};
