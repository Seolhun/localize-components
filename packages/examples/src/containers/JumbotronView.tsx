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
          title='Hello, Jumbotron'
          description='Localize-Components is made for localized style without side-effect'
          theme='success'
        />
        <Jumbotron
          title='Hello, Localize-Components'
          description='Localize-Components is made for localized style without side-effect'
          theme='royalblue'
        />
        <Jumbotron
          title='Hello, Styled Components'
          description='Localize-Components is made for localized style without side-effect'
          theme='warning'
        />
      </section>
    );
  }
}

export default LocalizeView;
