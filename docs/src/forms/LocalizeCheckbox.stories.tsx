import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeCheckbox, LocalizeCheckboxProps } from '../../../packages/forms/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions } from '../controls';

export default {
  title: 'Forms/LocalizeCheckbox',
  component: LocalizeCheckbox,
  argTypes: {
    primaryColor: {
      defaultValue: 'default',
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

const Checkbox: Story<LocalizeCheckboxProps> = (args) => {
  const children = args.children;
  return <LocalizeCheckbox {...args}>{children}</LocalizeCheckbox>;
};

export const Default = Checkbox.bind({});
Default.args = {
  children: 'LocalizeCheckbox',
  value: 'LocalizeCheckbox',
  checked: true,
  rounded: true,
  disabled: false,
};

const SizeCheckboxs: Story<LocalizeCheckboxProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    color: args.color,
  };
  return (
    <LocalizeRow>
      <LocalizeCol md={8}>
        <h2>xl</h2>
        <LocalizeCheckbox {...args} localize={localize} size="xl">
          {children}
        </LocalizeCheckbox>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeCheckbox {...args} localize={localize} size="lg">
          {children}
        </LocalizeCheckbox>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeCheckbox {...args} localize={localize} size="md">
          {children}
        </LocalizeCheckbox>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeCheckbox {...args} localize={localize} size="sm">
          {children}
        </LocalizeCheckbox>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeCheckbox {...args} localize={localize} size="xs">
          {children}
        </LocalizeCheckbox>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const SizeCheckboxsStories = SizeCheckboxs.bind({});
SizeCheckboxsStories.args = {
  children: 'LocalizeCheckbox',
  value: 'LocalizeCheckbox',
  checked: true,
  rounded: true,
  disabled: false,
};

const IntentCheckboxes: Story<LocalizeCheckboxProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    color: args.color,
  };
  return (
    <LocalizeRow>
      {storiesIntentOptions.map((intent) => (
        <LocalizeCol md={8} key={intent}>
          <h2>{intent}</h2>
          <LocalizeCheckbox {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeCheckbox>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentCheckboxesStories = IntentCheckboxes.bind({});
IntentCheckboxesStories.args = {
  children: 'LocalizeCheckbox',
  value: 'LocalizeCheckbox',
  checked: true,
  rounded: true,
  disabled: false,
};
