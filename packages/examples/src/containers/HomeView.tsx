import React, { Component } from 'react';

import { Jumbotron } from '@seolhun/localize-components';

export interface HomeViewState {
  isShow: boolean;
}

class HomeView extends Component<null, HomeViewState> {
  render() {
    return (
      <section>
        <Jumbotron
          title='Hello, Localize-Components'
          description='Localize-Components is made for preventing local styles'
          theme='primary'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Hi-Cord'
          description='Localize-Components is made for preventing local styles'
          theme='yellow'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Data rights'
          description='Localize-Components is made for preventing local styles'
          theme='danger'
        >

        </Jumbotron>
        <Jumbotron
          title='Hello, Developers'
          description='Localize-Components is made for preventing local styles'
          theme='purple'
        >

        </Jumbotron>
      </section>
    );
  }
}

export default HomeView;
