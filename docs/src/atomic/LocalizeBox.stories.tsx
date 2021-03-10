import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeBox, LocalizeBoxProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions } from '../controls';

export default {
  title: 'Atomic/LocalizeBox',
  component: LocalizeBox,
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

const Box: Story<LocalizeBoxProps> = (args) => <LocalizeBox {...args} />;

export const Default = Box.bind({});
Default.args = {
  children: 'LocalizeBox',
  disabled: false,
};

const BoxSizes: Story<LocalizeBoxProps> = (args) => {
  const children = args.children;
  return (
    <>
      <LocalizeRow>
        <LocalizeCol>
          <h2>xl</h2>
          <LocalizeBox {...args} size="xl">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h2>lg</h2>
          <LocalizeBox {...args} size="lg">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h2>md</h2>
          <LocalizeBox {...args} size="md">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h2>sm</h2>
          <LocalizeBox {...args} size="sm">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h2>xs</h2>
          <LocalizeBox {...args} size="xs">
            {children}
          </LocalizeBox>
        </LocalizeCol>
      </LocalizeRow>
    </>
  );
};
export const BoxSizesStories = BoxSizes.bind({});
BoxSizesStories.args = {
  children: 'LocalizeBox',
  borderRadius: '12px',
  disabled: false,
};

const IntentBoxes: Story<LocalizeBoxProps> = (args) => {
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
          <LocalizeBox {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeBox>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentBoxesStories = IntentBoxes.bind({});
IntentBoxesStories.args = {
  children: 'LocalizeBox',
  borderRadius: '12px',
  disabled: false,
};
