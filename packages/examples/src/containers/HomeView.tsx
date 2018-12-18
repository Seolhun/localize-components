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
          title='Hello, Localize'
          description='Hermes is made for getting my data rights'
          theme='primary'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Hi-Cord'
          description='Hermes is made for getting my data rights'
          theme='yellow'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Data rights'
          description='Hermes is made for getting my data rights'
          theme='danger'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Developers'
          description='Hermes is made for getting my data rights'
          theme='purple'
        >

        </Jumbotron>
      </section>
    );
  }
}

export default HermesView;
