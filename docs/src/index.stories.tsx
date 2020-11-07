import React from 'react';

export default {
  title: 'Intro',
};

const Welcome = () => (
  <div>
    <h1>Localize-Components Ui</h1>
    <p>How to displayed localize-components</p>
  </div>
);

export const WelcomeStories = Welcome.bind({});
WelcomeStories.args = {
  primary: true,
};
