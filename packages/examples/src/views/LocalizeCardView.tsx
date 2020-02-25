import React from 'react';

import { LocalizeCard } from '@seolhun/localize-components';
import { Container, Row, Col } from '@seolhun/localize-components';

const LocalizeCardView = () => {
  return (
    <Container>
      <Row>
        <Col xs={24}>
          <LocalizeCard>Hello</LocalizeCard>
        </Col>
        <Col xs={12}>
          <LocalizeCard>Hello</LocalizeCard>
        </Col>
        <Col xs={12}>
          <LocalizeCard>Hello</LocalizeCard>
        </Col>
        <Col xs={24}>
          <LocalizeCard>Hello</LocalizeCard>
        </Col>
      </Row>
    </Container>
  );
};

export default LocalizeCardView;
