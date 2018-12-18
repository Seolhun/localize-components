import React, { Component } from 'react';

import { Jumbotron } from '@seolhun/localize-components';

export interface LocalizeViewState {
  isShow: boolean;
}

class LocalizeView extends Component<null, LocalizeViewState> {
  render() {
    return (
      <section>
        <Jumbotron
          title='Hello, Localize-Components'
          description='Localize-Components is made for preventing local styles'
          theme='royalblue'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, AB180'
          description='Localize-Components is made for preventing local styles'
          theme='success'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Data rights'
          description='Localize-Components is made for preventing local styles'
          theme='warning'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Designers'
          description='Localize-Components is made for preventing local styles'
          theme='basic'
        >

        </Jumbotron>
      </section>
    );
  }
}

export default LocalizeView;
