import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeTextArea, LocalizeTextAreaProps } from '../../../packages/forms/dist';
import { LocalizeRow, LocalizeCol } from '../../../packages/grid/dist';

import { storiesColorOptions, storiesIntentOptions, storiesScaleOptions } from '../controls';

export default {
  title: 'Forms/LocalizeTextArea',
  component: LocalizeTextArea,
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

const TextArea: Story<LocalizeTextAreaProps> = (args) => {
  const [value, setValue] = React.useState(args.value);
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return <LocalizeTextArea {...args} onChange={onChange} value={value} localize={localize} />;
};

export const Default = TextArea.bind({});
Default.args = {
  defaultValue: 'LocalizeTextArea',
  rounded: true,
  disabled: false,
  placeholder: 'Placeholder'
};



const ScaleTextAreas: Story<LocalizeTextAreaProps> = (args) => {
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
        <LocalizeTextArea {...args} localize={localize} scale="xl">
          {children}
        </LocalizeTextArea>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>lg</h2>
        <LocalizeTextArea {...args} localize={localize} scale="lg">
          {children}
        </LocalizeTextArea>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>md</h2>
        <LocalizeTextArea {...args} localize={localize} scale="md">
          {children}
        </LocalizeTextArea>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>sm</h2>
        <LocalizeTextArea {...args} localize={localize} scale="sm">
          {children}
        </LocalizeTextArea>
      </LocalizeCol>
      <LocalizeCol md={8}>
        <h2>xs</h2>
        <LocalizeTextArea {...args} localize={localize} scale="xs">
          {children}
        </LocalizeTextArea>
      </LocalizeCol>
    </LocalizeRow>
  );
};

export const ScaleTextAreasStories = ScaleTextAreas.bind({});
ScaleTextAreasStories.args = {
  defaultValue: 'LocalizeTextArea',
  rounded: true,
  disabled: false,
  placeholder: 'Placeholder'
};

const IntentTextAreaes: Story<LocalizeTextAreaProps> = (args) => {
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
          <LocalizeTextArea {...args} intent={intent} localize={localize}>
            {children}
          </LocalizeTextArea>
        </LocalizeCol>
      ))}
    </LocalizeRow>
  );
};

export const IntentTextAreaesStories = IntentTextAreaes.bind({});
IntentTextAreaesStories.args = {
  defaultValue: 'LocalizeTextArea',
  rounded: true,
  disabled: false,
  placeholder: 'Placeholder'
};
