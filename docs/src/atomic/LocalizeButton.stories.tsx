import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeButton, LocalizeButtonProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesSizeOptions, storiesColorOptions, storiesIntentOptions } from '../controls';

export default {
  title: 'Atomic/LocalizeButton',
  component: LocalizeButton,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesSizeOptions,
      },
    },
    variant: {
      defaultValue: 'solid',
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
    intent: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
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

const Button: Story<LocalizeButtonProps> = (args) => {
  const children = args.children;
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    color: args.color,
  };
  return (
    <LocalizeButton {...args} localize={localize}>
      {children}
    </LocalizeButton>
  );
};

export const Default = Button.bind({});
Default.args = {
  children: 'LocalizeButton',
  rounded: true,
  disabled: false,
};

const SizeButtons: Story<LocalizeButtonProps> = (args) => {
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
        <LocalizeButton {...args} localize={localize} size="xl">
          {children}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeButton {...args} localize={localize} size="lg">
          {children}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeButton {...args} localize={localize} size="md">
          {children}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeButton {...args} localize={localize} size="sm">
          {children}
        </LocalizeButton>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeButton {...args} localize={localize} size="xs">
          {children}
        </LocalizeButton>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const SizeButtonsStories = SizeButtons.bind({});
SizeButtonsStories.args = {
  children: 'LocalizeButton',
  rounded: true,
  disabled: false,
};

const IntentButtons: Story<LocalizeButtonProps> = (args) => {
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
          <LocalizeButton {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeButton>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentButtonsStories = IntentButtons.bind({});
IntentButtonsStories.args = {
  children: 'LocalizeButton',
  rounded: true,
  disabled: false,
};
