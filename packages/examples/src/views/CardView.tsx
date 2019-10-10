import React from 'react';

import { Card } from '@seolhun/localize-components';
import { Container, Row, Col } from '@seolhun/localize-components';

const CardView = () => {
  return (
    <Container>
      <Row>
        <Col xs={24}>
          <Card>
            Hello
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            Hello
          </Card>
        </Col>
        <Col xs={12}>
        <Card>
            Hello
          </Card>
        </Col>
        <Col xs={24}>
          <Card>
            Hello
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardView;
