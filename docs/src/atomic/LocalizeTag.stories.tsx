import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeTag, LocalizeTagProps } from '../../../packages/atomic/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesSizeOptions, storiesColorOptions, storiesIntentOptions } from '../controls';

export default {
  title: 'Atmoic | LocalizeTag',
  component: LocalizeTag,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesSizeOptions,
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

const Tag: Story<LocalizeTagProps> = (args) => <LocalizeTag {...args} />;

export const Default = Tag.bind({});
Default.args = {
  children: 'LocalizeTag',
  rounded: true,
};

const TagSizes: Story<LocalizeTagProps> = (args) => {
  const children = args.children;
  return (
    <>
      <LocalizeRow>
        <LocalizeCol md={8}>
          <h4>xl</h4>
          <LocalizeTag {...args} size="xl">
            {children}
          </LocalizeTag>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>lg</h4>
          <LocalizeTag {...args} size="lg">
            {children}
          </LocalizeTag>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>md</h4>
          <LocalizeTag {...args} size="md">
            {children}
          </LocalizeTag>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>sm</h4>
          <LocalizeTag {...args} size="sm">
            {children}
          </LocalizeTag>
        </LocalizeCol>
        <LocalizeCol md={8}>
          <h4>xs</h4>
          <LocalizeTag {...args} size="xs">
            {children}
          </LocalizeTag>
        </LocalizeCol>
      </LocalizeRow>
    </>
  );
};
export const TagsStorieSizes = TagSizes.bind({});
TagsStorieSizes.args = {
  children: 'LocalizeTag',
  rounded: true,
};

const IntentTags: Story<LocalizeTagProps> = (args) => {
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
          <h3>{intent}</h3>
          <LocalizeTag {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeTag>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentTagsStories = IntentTags.bind({});
IntentTagsStories.args = {
  children: 'LocalizeTag',
};
