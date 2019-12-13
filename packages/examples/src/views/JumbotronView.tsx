import React from 'react';

import { LocalizeJumbotron } from '@seolhun/localize-components';

const JumbotronView = () => {
  return (
    <section>
      <LocalizeJumbotron
        title='Hello, Jumbotron'
        description='Localize-Components is made for localized style without side-effect'
        mainColor='success'
      />
      <LocalizeJumbotron
        title='Hello, Localize-Components'
        description='Localize-Components is made for localized style without side-effect'
        mainColor='royalblue'
      />
      <LocalizeJumbotron
        title='Hello, Styled Components'
        description='Localize-Components is made for localized style without side-effect'
        mainColor='warning'
      />
    </section>
  );
};

export default JumbotronView;
