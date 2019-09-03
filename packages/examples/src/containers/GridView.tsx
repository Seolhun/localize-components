import React from 'react';

import { range } from 'lodash';

import { ThemeProvider } from 'emotion-theming';
import { ThemeConfig } from '@seolhun/localize-components-styled-types';
import { Container, Col, Row, Jumbotron } from '@seolhun/localize-components';

const STYLES = {
  margin: '5px'
}

const GridView = () => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <Container>
        <h2>Default</h2>
        <Row css={STYLES}>
          <Col xs={24}>
            <Jumbotron>
              <h3>xs-24</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row css={STYLES}>
          <Col sm={12}>
            <Jumbotron mainColor='red'>
              <h3>sm-12</h3>
            </Jumbotron>
          </Col>
          <Col sm={12}>
            <Jumbotron mainColor='red'>
              <h3>sm-12</h3>
            </Jumbotron>
          </Col>
        </Row>

        <Row css={STYLES}>
          <Col md={8}>
            <Jumbotron>
              <h3>md-8</h3>
            </Jumbotron>
          </Col>
          <Col md={8}>
            <Jumbotron>
              <h3>md-8</h3>
            </Jumbotron>
          </Col>
          <Col md={8}>
            <Jumbotron>
              <h3>md-8</h3>
            </Jumbotron>
          </Col>
        </Row>

        <Row css={STYLES}>
          {range(4).map((key, idx) => (
            <Col xs={6} md={12} key={idx}>
              <Jumbotron mainColor='green'>
                <h3>xs-6 md-12</h3>
              </Jumbotron>
            </Col>
          ))}
        </Row>

        <Row css={STYLES}>
          {range(4).map((key, idx) => (
            <Col xs={6} key={idx}>
              <Jumbotron>
                <h3>4</h3>
              </Jumbotron>
            </Col>
          ))}
        </Row>

        <Row css={STYLES}>
          {range(12).map((key, idx) => (
            <Col xs={2} key={idx}>
              <Jumbotron>
                <h3>2</h3>
              </Jumbotron>
            </Col>
          ))}
        </Row>

        <Row css={STYLES}>
          {range(24).map((key, idx) => (
            <Col xs={1} key={idx}>
              <Jumbotron>
                <h3>1</h3>
              </Jumbotron>
            </Col>
          ))}
        </Row>
      </Container>

      <Container isFullWidth>
        <h2>isFullWidth</h2>
        <Row css={STYLES}>
          <Col xs={2} sm={3} md={4} lg={6} xl={8} >
            <Jumbotron >
              <h2>XL-8 LG-6 MD-4 SM-3 XS-2</h2>
            </Jumbotron>
          </Col>
          <Col xs={16} sm={14} md={12} lg={8} xl={4} >
            <Jumbotron >
              <h2>XL-4 LG-8 MD-12 SM-14 XS-16</h2>
            </Jumbotron>
          </Col>
          <Col xs={2} sm={3} md={4} lg={6} xl={8} >
            <Jumbotron >
              <h2>XL-8 LG-6 MD-4 SM-3 XS-2</h2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row css={STYLES}>
          <Col sm={24} lg={8}>
            <Jumbotron >
              <h2>SM-24 LG-8</h2>
            </Jumbotron>
          </Col>
          <Col sm={24} lg={8}>
            <Jumbotron >
              <h2>SM-24 LG-8</h2>
            </Jumbotron>
          </Col>
          <Col sm={24} lg={4}>
            <Jumbotron >
              <h2>SM-24 LG-4</h2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row css={STYLES}>
          <Col
            xs={{
              span: 3,
              offset: 3,
            }}
            sm={{
              span: 3,
              offset: 3,
            }}
            md={{
              span: 6,
              offset: 3,
            }}
            lg={{
              span: 3,
              offset: 3,
            }}
          >
            <Jumbotron >
              <h2>span-3, offset-3, after offset</h2>
            </Jumbotron>
          </Col>
          <Col
            xs={{
              span: 4,
              offset: 4,
            }}

          >
            <Jumbotron >
              <h2>span-4, offset-4</h2>
            </Jumbotron>
          </Col>
          <Col
            xs={{
              offset: 3,
              span: 3,
            }}
            sm={{
              offset: 3,
              span: 3,
            }}
            md={{
              offset: 3,
              span: 3,
            }}
            lg={{
              offset: 3,
              span: 3,
            }}

          >
            <Jumbotron >
              <h2>span-3, offset-3, before offset</h2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row css={STYLES}>
          <Col xs={0} sm={12} md={12} lg={12} xl={0} >
            <Jumbotron >
              <h2>XS-0, XL-0</h2>
            </Jumbotron>
          </Col>
          <Col xs={12} sm={0} md={12} lg={0} xl={12} >
            <Jumbotron >
              <h2>SM-0, LG-0</h2>
            </Jumbotron>
          </Col>
          <Col xs={12} sm={12} md={0} lg={12} xl={12} >
            <Jumbotron >
              <h2>MD-0</h2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

export default GridView
