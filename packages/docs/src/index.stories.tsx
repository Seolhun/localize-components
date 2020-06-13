import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Intro|Welcome', module).addParameters({
  info: {
    disable: true,
  },
});

stories.add('Intro', () => (
  <div>
    <h1>Localize-Components Ui</h1>
    <p>How to displayed localize-components</p>
  </div>
));
