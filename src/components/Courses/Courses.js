import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from '../LeftSide/LeftSide';

const Courses = () => {
      return (
            <div>
                  <Container className='mt-4'>
                        <Row>
                              <Col lg="3">
                                    <LeftSide></LeftSide>
                              </Col>
                              <Col>

                              </Col>
                        </Row>
                  </Container>
            </div>
      );
};

export default Courses;