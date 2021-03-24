import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeSwitch, LocalizeSwitchProps } from '../../../packages/forms/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions, storiesScaleOptions } from '../controls';

export default {
  title: 'Forms/LocalizeSwitch',
  component: LocalizeSwitch,
  argTypes: {
    scale: {
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
      defaultValue: 'inversed4',
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
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };
  return (
    <LocalizeSwitch {...args} localize={localize}>
      {children}
    </LocalizeSwitch>
  );
};
export const Default = Switch.bind({});
Default.args = {
  value: 'LocalizeSwitch',
  checked: true,
  disabled: false,
};

const ScaleSwitchs: Story<LocalizeSwitchProps> = (args) => {
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };
  return (
    <LocalizeRow>
      <LocalizeCol md={8}>
        <h2>xl</h2>
        <LocalizeSwitch {...args} localize={localize} scale="xl" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeSwitch {...args} localize={localize} scale="lg" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeSwitch {...args} localize={localize} scale="md" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeSwitch {...args} localize={localize} scale="sm" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeSwitch {...args} localize={localize} scale="xs" />
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const ScaleSwitchsStories = ScaleSwitchs.bind({});
ScaleSwitchsStories.args = {
  value: 'LocalizeSwitch',
  checked: true,
  disabled: false,
};

const IntentSwitches: Story<LocalizeSwitchProps> = (args) => {
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };
  return (
    <LocalizeRow>
      {storiesIntentOptions.map((intent) => (
        <LocalizeCol md={8} key={intent}>
          <h2>{intent}</h2>
          <LocalizeSwitch {...args} intent={intent} localize={localize} />
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentSwitchesStories = IntentSwitches.bind({});
IntentSwitchesStories.args = {
  value: 'LocalizeSwitch',
  checked: true,
  disabled: false,
};
