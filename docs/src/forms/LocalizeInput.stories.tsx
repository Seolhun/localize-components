import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeInput, LocalizeInputProps } from '../../../packages/forms/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions, storiesScaleOptions } from '../controls';

export default {
  title: 'Forms/LocalizeInput',
  component: LocalizeInput,
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
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };

  return <LocalizeInput {...args} localize={localize} />;
};

export const Default = Input.bind({});
Default.args = {
  defaultValue: 'LocalizeInput',
  rounded: true,
  disabled: false,
  placeholder: 'Placeholder',
};

const ScaleInputs: Story<LocalizeInputProps> = (args) => {
  const children = args.children;
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
        <LocalizeInput {...args} localize={localize} scale="xl">
          {children}
        </LocalizeInput>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeInput {...args} localize={localize} scale="lg">
          {children}
        </LocalizeInput>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeInput {...args} localize={localize} scale="md">
          {children}
        </LocalizeInput>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeInput {...args} localize={localize} scale="sm">
          {children}
        </LocalizeInput>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeInput {...args} localize={localize} scale="xs">
          {children}
        </LocalizeInput>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const ScaleInputsStories = ScaleInputs.bind({});
ScaleInputsStories.args = {
  defaultValue: 'LocalizeInput',
  rounded: true,
  disabled: false,
  placeholder: 'Placeholder',
};

const IntentInputes: Story<LocalizeInputProps> = (args) => {
  const children = args.children;
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
          <LocalizeInput {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeInput>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentInputesStories = IntentInputes.bind({});
IntentInputesStories.args = {
  defaultValue: 'LocalizeInput',
  rounded: true,
  disabled: false,
  placeholder: 'Placeholder',
};
