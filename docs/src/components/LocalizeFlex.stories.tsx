import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeFlex, LocalizeFlexProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesAlignItemsOptions, storiesJustifyContentOptions, storiesFlexDirectionOptions } from '../controls';

export default {
  title: 'Atmoic | LocalizeFlex',
  component: LocalizeFlex,
  argTypes: {
    alignItems: {
      defaultValue: '',
      control: {
        type: 'select',
        options: storiesAlignItemsOptions,
      },
    },
    justifyContent: {
      defaultValue: '',
      control: {
        type: 'select',
        options: storiesJustifyContentOptions,
      },
    },
    flexDirection: {
      defaultValue: '',
      control: {
        type: 'select',
        options: storiesFlexDirectionOptions,
      },
    },
  },
};

const Flex: Story<LocalizeFlexProps> = (args) => <LocalizeFlex {...args} />;

export const FlexStories = Flex.bind({});
FlexStories.args = {
  children: 'LocalizeFlex',
  disabled: false,
};

const FlexSizes: Story<LocalizeFlexProps> = (args) => {
  const children = args.children;
  return (
    <>
      <LocalizeRow>
        <LocalizeCol md={8}>
          <LocalizeFlex {...args} alignItems='flex-start'>
            {children}
          </LocalizeFlex>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <LocalizeFlex {...args} alignItems='center'>
            {children}
          </LocalizeFlex>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <LocalizeFlex {...args} alignItems='flex-end'>
            {children}
          </LocalizeFlex>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <LocalizeFlex {...args} justifyContent='flex-start'>
            {children}
          </LocalizeFlex>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <LocalizeFlex {...args} justifyContent='center'>
            {children}
          </LocalizeFlex>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <LocalizeFlex {...args} justifyContent='flex-end'>
            {children}
          </LocalizeFlex>
        </LocalizeCol>
      </LocalizeRow>
    </>
  );
};
export const FlexsStorieSizes = FlexSizes.bind({});
FlexsStorieSizes.args = {
  children: 'LocalizeFlex',
  disabled: false,
};
