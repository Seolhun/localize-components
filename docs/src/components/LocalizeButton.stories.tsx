import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { storiesSizeOptions, storiesColorOptions } from '../_stories';
import { LocalizeButton, LocalizeButtonProps } from '../../../packages/atomic';
import { LocalizeRow } from '../../../packages/atomic/node_modules/@seolhun/localize-components-grid/dist';
import { LocalizeCol } from '../../../packages/atomic/node_modules/@seolhun/localize-components-grid/dist';

export default {
  title: 'UI | LocalizeButton',
  component: LocalizeButton,
  argTypes: {
    fontColor: {
      defaultValue: 'neutral1',
      control: {
        type: 'select',
        options: storiesColorOptions,
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
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesSizeOptions,
      },
    },
  },
};

const Button: Story<LocalizeButtonProps> = (args) => <LocalizeButton {...args} />;

export const ButtonStories = Button.bind({});
ButtonStories.args = {
  children: 'LocalizeButton',
  borderRadius: '12px',
  disabled: false,
};

const SizeButtons: Story<LocalizeButtonProps> = (args) => {
  const children = args.children;
  return (
    <>
      <LocalizeRow>
        <LocalizeCol md={8}>
          <h4>xl</h4>
          <LocalizeButton {...args} size="xl">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>lg</h4>
          <LocalizeButton {...args} size="lg">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>md</h4>
          <LocalizeButton {...args} size="md">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>sm</h4>
          <LocalizeButton {...args} size="sm">
            {children}
          </LocalizeButton>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>xs</h4>
          <LocalizeButton {...args} size="xs">
            {children}
          </LocalizeButton>
        </LocalizeCol>
      </LocalizeRow>
    </>
  )
};
export const SizeButtonsStories = SizeButtons.bind({});
SizeButtonsStories.args = {
  children: 'LocalizeButton',
  borderRadius: '12px',
  disabled: false,
};
