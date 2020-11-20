import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeChip, LocalizeChipProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesSizeOptions, storiesColorOptions } from '../controls';

export default {
  title: 'Atmoic | LocalizeChip',
  component: LocalizeChip,
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

const Chip: Story<LocalizeChipProps> = (args) => <LocalizeChip {...args} />;

export const Default = Chip.bind({});
Default.args = {
  children: 'LocalizeChip',
  disabled: false,
};

const ChipSizes: Story<LocalizeChipProps> = (args) => {
  const children = args.children;
  return (
    <>
      <LocalizeRow>
        <LocalizeCol md={8}>
          <h4>xl</h4>
          <LocalizeChip {...args} size="xl">
            {children}
          </LocalizeChip>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>lg</h4>
          <LocalizeChip {...args} size="lg">
            {children}
          </LocalizeChip>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>md</h4>
          <LocalizeChip {...args} size="md">
            {children}
          </LocalizeChip>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>sm</h4>
          <LocalizeChip {...args} size="sm">
            {children}
          </LocalizeChip>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>xs</h4>
          <LocalizeChip {...args} size="xs">
            {children}
          </LocalizeChip>
        </LocalizeCol>
      </LocalizeRow>
    </>
  );
};
export const ChipsStorieSizes = ChipSizes.bind({});
ChipsStorieSizes.args = {
  children: 'LocalizeChip',
  disabled: false,
};
