import React from 'react';

import { range } from 'ramda';
import { LocalizeJumbotron } from '@seolhun/localize-components';
import { Container, Col, Row } from '@seolhun/localize-components-grid';

const GridView = () => {
  return (
    <>
      <Container>
        <h2>Default</h2>
        <Row>
          <Col xs={24}>
            <LocalizeJumbotron>
              <h3>xs-24</h3>
            </LocalizeJumbotron>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <LocalizeJumbotron>
              <h3>sm-12</h3>
            </LocalizeJumbotron>
          </Col>
          <Col sm={12}>
            <LocalizeJumbotron>
              <h3>sm-12</h3>
            </LocalizeJumbotron>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <LocalizeJumbotron>
              <h3>md-8</h3>
            </LocalizeJumbotron>
          </Col>
          <Col md={8}>
            <LocalizeJumbotron>
              <h3>md-8</h3>
            </LocalizeJumbotron>
          </Col>
          <Col md={8}>
            <LocalizeJumbotron>
              <h3>md-8</h3>
            </LocalizeJumbotron>
          </Col>
        </Row>

        <Row>
          {range(4).map((key, idx) => (
            <Col xs={6} md={12} key={idx}>
              <LocalizeJumbotron>
                <h3>xs-6 md-12</h3>
              </LocalizeJumbotron>
            </Col>
          ))}
        </Row>

        <Row>
          {range(4).map((key, idx) => (
            <Col xs={6} key={idx}>
              <LocalizeJumbotron>
                <h3>4</h3>
              </LocalizeJumbotron>
            </Col>
          ))}
        </Row>

        <Row>
          {range(12).map((key, idx) => (
            <Col xs={2} key={idx}>
              <LocalizeJumbotron>
                <h3>2</h3>
              </LocalizeJumbotron>
            </Col>
          ))}
        </Row>

        <Row>
          {range(24).map((key, idx) => (
            <Col xs={1} key={idx}>
              <LocalizeJumbotron>
                <h3>1</h3>
              </LocalizeJumbotron>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={12} lg={8}>
            <LocalizeJumbotron>
              <h2>SM-12 LG-8</h2>
            </LocalizeJumbotron>
          </Col>
          <Col sm={12} lg={8}>
            <LocalizeJumbotron>
              <h2>SM-12 LG-8</h2>
            </LocalizeJumbotron>
          </Col>
          <Col sm={24} lg={8}>
            <LocalizeJumbotron>
              <h2>SM-24 LG-8</h2>
            </LocalizeJumbotron>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2>Offset</h2>
        <Row>
          <Col
            xs={{
              span: 4,
              offset: 4,
            }}
            sm={{
              span: 4,
              offset: 4,
            }}
            md={{
              span: 4,
              offset: 4,
            }}
            lg={{
              span: 4,
              offset: 4,
            }}
          >
            <LocalizeJumbotron>
              <h2>span-4, offset-4</h2>
            </LocalizeJumbotron>
          </Col>
          <Col
            xs={{
              span: 4,
              offset: 4,
            }}
          >
            <LocalizeJumbotron>
              <h2>span-4, offset-4</h2>
            </LocalizeJumbotron>
          </Col>
          <Col
            xs={{
              offset: 4,
              span: 4,
            }}
            sm={{
              offset: 4,
              span: 4,
            }}
            md={{
              offset: 4,
              span: 4,
            }}
            lg={{
              offset: 4,
              span: 4,
            }}
          >
            <LocalizeJumbotron>
              <h2>offset-4, span-4</h2>
            </LocalizeJumbotron>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={0} sm={12} md={12} lg={12} xl={0}>
            <LocalizeJumbotron>
              <h2>
                xs={0} sm={12} md={12} lg={12} xl={0}
              </h2>
            </LocalizeJumbotron>
          </Col>
          <Col xs={12} sm={0} md={12} lg={0} xl={12}>
            <LocalizeJumbotron>
              <h2>
                xs={12} sm={0} md={12} lg={0} xl={12}
              </h2>
            </LocalizeJumbotron>
          </Col>
          <Col xs={12} sm={12} md={0} lg={12} xl={12}>
            <LocalizeJumbotron>
              <h2>
                xs={12} sm={12} md={0} lg={12} xl={12}
              </h2>
            </LocalizeJumbotron>
          </Col>
        </Row>
      </Container>

      <Container isFullWidth>
        <h2>isFullWidth</h2>
        <Row>
          <Col xs={6} sm={3} md={6} lg={6} xl={8}>
            <LocalizeJumbotron>
              <h2>
                xs={6} sm={3} md={6} lg={6} xl={8}
              </h2>
            </LocalizeJumbotron>
          </Col>
          <Col xs={12} sm={18} md={12} lg={12} xl={8}>
            <LocalizeJumbotron>
              <h2>
                xs={12} sm={18} md={12} lg={12} xl={8}
              </h2>
            </LocalizeJumbotron>
          </Col>
          <Col xs={6} sm={3} md={6} lg={6} xl={8}>
            <LocalizeJumbotron>
              <h2>
                xs={6} sm={3} md={6} lg={6} xl={8}
              </h2>
            </LocalizeJumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GridView;
