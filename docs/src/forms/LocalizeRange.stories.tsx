import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeRange, LocalizeRangeProps } from '../../../packages/forms/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions, storiesScaleOptions } from '../controls';

export default {
  title: 'Forms/LocalizeRange',
  component: LocalizeRange,
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

const Switch: Story<LocalizeRangeProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };
  return (
    <LocalizeRange {...args} localize={localize}>
      {children}
    </LocalizeRange>
  );
};
export const Default = Switch.bind({});
Default.args = {
  defaultValue: 5,
  min: 0,
  max: 100,
  rounded: false,
  disabled: false,
};

const ScaleSwitchs: Story<LocalizeRangeProps> = (args) => {
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
        <LocalizeRange {...args} localize={localize} scale="xl" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeRange {...args} localize={localize} scale="lg" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeRange {...args} localize={localize} scale="md" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeRange {...args} localize={localize} scale="sm" />
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeRange {...args} localize={localize} scale="xs" />
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const ScaleSwitchsStories = ScaleSwitchs.bind({});
ScaleSwitchsStories.args = {
  defaultValue: 5,
  min: 0,
  max: 100,
  rounded: false,
  disabled: false,
};

const IntentSwitches: Story<LocalizeRangeProps> = (args) => {
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
          <LocalizeRange {...args} intent={intent} localize={localize} />
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentSwitchesStories = IntentSwitches.bind({});
IntentSwitchesStories.args = {
  defaultValue: 5,
  min: 0,
  max: 100,
  rounded: false,
  disabled: false,
};
