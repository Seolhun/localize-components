import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeBox, LocalizeBoxProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions } from '../controls';

export default {
  title: 'Atmoic | LocalizeBox',
  component: LocalizeBox,
  argTypes: {
    bgColor: {
      defaultValue: 'default',
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
          <h4>xl</h4>
          <LocalizeBox {...args} size="xl">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h4>lg</h4>
          <LocalizeBox {...args} size="lg">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h4>md</h4>
          <LocalizeBox {...args} size="md">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h4>sm</h4>
          <LocalizeBox {...args} size="sm">
            {children}
          </LocalizeBox>
        </LocalizeCol>
        <LocalizeCol>
          <h4>xs</h4>
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
    bgColor: args.bgColor,
    bdColor: args.bdColor,
    color: args.color,
  };
  return (
    <LocalizeRow>
      {storiesIntentOptions.map((intent) => (
        <LocalizeCol md={8} key={intent}>
          <h3>{intent}</h3>
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
