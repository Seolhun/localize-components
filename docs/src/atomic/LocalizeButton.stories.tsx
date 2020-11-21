import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeButton, LocalizeButtonProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesSizeOptions, storiesColorOptions, storiesIntentOptions } from '../controls';

export default {
  title: 'Atmoic | LocalizeButton',
  component: LocalizeButton,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesSizeOptions,
      },
    },
    intent: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    bgColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    bdColor: {
      defaultValue: 'transparent',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    fontColor: {
      defaultValue: 'conversion1',
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
    bgColor: args.bgColor,
    bdColor: args.bdColor,
    color: args.color,
  }
  return (
    <LocalizeButton {...args} localize={localize} >
      {children}
    </LocalizeButton>
  )
};

export const Default = Button.bind({});
Default.args = {
  children: 'LocalizeButton',
  disabled: false,
};

const IntentButtons: Story<LocalizeButtonProps> = (args) => {
  const children = args.children;
  const localize = {
    bgColor: args.bgColor,
    bdColor: args.bdColor,
    color: args.color,
  }
  return (
    <>
      <LocalizeRow>
        {storiesIntentOptions.map((intent) => (
          <LocalizeCol md={8} key={intent}>
            <h4>xl</h4>
            <LocalizeButton {...args} intent={intent} localize={localize}>
              {children}
            </LocalizeButton>
          </LocalizeCol>
        ))}
      </LocalizeRow>
    </>
  );
};

export const IntentButtonsStories = IntentButtons.bind({});
IntentButtonsStories.args = {
  children: 'LocalizeButton',
  disabled: false,
};

const SizeButtons: Story<LocalizeButtonProps> = (args) => {
  const children = args.children;
  const localize = {
    bgColor: args.bgColor,
    bdColor: args.bdColor,
    color: args.color,
  }
  return (
    <>
      <LocalizeRow>
        <LocalizeCol md={8}>
          <h4>xl</h4>
          <LocalizeButton {...args} localize={localize} size="xl">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>lg</h4>
          <LocalizeButton {...args} localize={localize} size="lg">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>md</h4>
          <LocalizeButton {...args} localize={localize} size="md">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>sm</h4>
          <LocalizeButton {...args} localize={localize} size="sm">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>xs</h4>
          <LocalizeButton {...args} localize={localize} size="xs">
            {children}
          </LocalizeButton>
        </LocalizeCol>
      </LocalizeRow>
    </>
  );
};

export const SizeButtonsStories = SizeButtons.bind({});
SizeButtonsStories.args = {
  children: 'LocalizeButton',
  disabled: false,
};
