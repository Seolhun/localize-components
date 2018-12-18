import React, { Component } from 'react';

import { Jumbotron } from '@seolhun/localize-components';

export interface HermesViewState {
  isShow: boolean;
}

class HermesView extends Component<null, HermesViewState> {
  render() {
    return (
      <section>
        <Jumbotron
          title='Hello, Hermes'
          description='Hermes is made for getting my data rights'
          theme='royalblue'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, AB180'
          description='Hermes is made for getting my data rights'
          theme='success'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Data rights'
          description='Hermes is made for getting my data rights'
          theme='warning'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Designers'
          description='Hermes is made for getting my data rights'
          theme='basic'
        >

        </Jumbotron>
      </section>
    );
  }
}

export default HermesView;
