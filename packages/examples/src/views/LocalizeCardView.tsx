import React from 'react';

import { LocalizeCard } from '@seolhun/localize-components';
import {
  LocalizeContainer,
  LocalizeRow,
  LocalizeCol,
} from '@seolhun/localize-components-grid';

const LocalizeCardView = () => {
  return (
    <LocalizeContainer>
      <LocalizeRow>
        <LocalizeCol xs={24}>
          <LocalizeCard>Hello</LocalizeCard>
        </LocalizeCol>
        <LocalizeCol xs={12}>
          <LocalizeCard>Hello</LocalizeCard>
        </LocalizeCol>
        <LocalizeCol xs={12}>
          <LocalizeCard>Hello</LocalizeCard>
        </LocalizeCol>
        <LocalizeCol xs={24}>
          <LocalizeCard>Hello</LocalizeCard>
        </LocalizeCol>
      </LocalizeRow>
    </LocalizeContainer>
  );
};

export default LocalizeCardView;
