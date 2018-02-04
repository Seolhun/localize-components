import * as React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

class MarkdownView extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1>Markdown View</h1>
            <Button bsStyle='info'>Info</Button>
          </div>

          <div className='col-sm-12'>
            <Grid>
              <Row className='show-grid'>
                <Col xs={12} md={8}>
                  <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
              </Row>
              <Row className='show-grid'>
                <Col xs={6} md={4}>
                  <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
                <Col xsHidden md={4}>
                  <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                </Col>
              </Row>
              <Row className='show-grid'>
                <Col xs={6} xsOffset={6}>
                  <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
                </Col>
              </Row>
              <Row className='show-grid'>
                <Col md={6} mdPush={6}>
                  <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
                </Col>
                <Col md={6} mdPull={6}>
                  <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownView;
