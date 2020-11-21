import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeBox, LocalizeBoxProps } from '../../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../../packages/grid/dist';

import { storiesSizeOptions, storiesColorOptions } from '../../controls';

export default {
  title: 'Atmoic | LocalizeBox',
  component: LocalizeBox,
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
