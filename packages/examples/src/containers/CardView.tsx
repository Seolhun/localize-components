import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { Card } from '@seolhun/localize-components';
import { Container, Row, Col } from '@seolhun/localize-components';
import { ThemeConfig } from '@seolhun/localize-components-styled-types';

const CardView = () => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <Container>
        <Row>
          <Col xs={24}>
            <Card>
              Hello
            </Card>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default CardView;
