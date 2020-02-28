import React from 'react';

import { LocalizeJumbotron } from '@seolhun/localize-components';

const JumbotronView = () => {
  return (
    <section>
      <LocalizeJumbotron
        title="Hello, Jumbotron"
        description="Localize-Components is made for localized style without side-effect"
      />
      <LocalizeJumbotron
        title="Hello, Localize-Components"
        description="Localize-Components is made for localized style without side-effect"
      />
      <LocalizeJumbotron
        title="Hello, Styled Components"
        description="Localize-Components is made for localized style without side-effect"
      />
    </section>
  );
};

export default JumbotronView;
