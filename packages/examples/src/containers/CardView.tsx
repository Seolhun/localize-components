import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { Card } from '@seolhun/localize-components';
import { Container, Row, Col } from '@seolhun/localize-components';
import { LocalizeTheme } from '@seolhun/localize-components-styled-types';

const CardView = () => {
  return (
    <ThemeProvider theme={LocalizeTheme}>

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
    </ThemeProvider>
  );
};

export default CardView;
