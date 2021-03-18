import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeRadio, LocalizeRadioProps } from '../../../packages/forms/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions, storiesSizeOptions } from '../controls';

export default {
  title: 'Forms/LocalizeRadio',
  component: LocalizeRadio,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesSizeOptions,
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
      defaultValue: 'kakao',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    neutralColor: {
      defaultValue: 'transparent',
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

const Radio: Story<LocalizeRadioProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedColor: args.inversedColor,
  };
  return <LocalizeRadio {...args} localize={localize}>{children}</LocalizeRadio>;
};
export const Default = Radio.bind({});
Default.args = {
  children: 'LocalizeRadio',
  value: 'LocalizeRadio',
  checked: true,
  rounded: true,
  disabled: false,
};

const SizeRadios: Story<LocalizeRadioProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedColor: args.inversedColor,
  };
  return (
    <LocalizeRow>
      <LocalizeCol md={8}>
        <h2>xl</h2>
        <LocalizeRadio {...args} localize={localize} size="xl">
          {children}
        </LocalizeRadio>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeRadio {...args} localize={localize} size="lg">
          {children}
        </LocalizeRadio>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeRadio {...args} localize={localize} size="md">
          {children}
        </LocalizeRadio>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeRadio {...args} localize={localize} size="sm">
          {children}
        </LocalizeRadio>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeRadio {...args} localize={localize} size="xs">
          {children}
        </LocalizeRadio>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const SizeRadiosStories = SizeRadios.bind({});
SizeRadiosStories.args = {
  children: 'LocalizeRadio',
  value: 'LocalizeRadio',
  checked: true,
  rounded: true,
  disabled: false,
};

const IntentRadioes: Story<LocalizeRadioProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedColor: args.inversedColor,
  };
  return (
    <LocalizeRow>
      {storiesIntentOptions.map((intent) => (
        <LocalizeCol md={8} key={intent}>
          <h2>{intent}</h2>
          <LocalizeRadio {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeRadio>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentRadioesStories = IntentRadioes.bind({});
IntentRadioesStories.args = {
  children: 'LocalizeRadio',
  value: 'LocalizeRadio',
  checked: true,
  rounded: true,
  disabled: false,
};
