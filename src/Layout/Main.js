import React from 'react';
import Header from '../components/Shared/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from '../components/LeftSide/LeftSide';
import { Outlet } from 'react-router-dom';

const Main = () => {
      return (
            <div>
                  <Header></Header>
                  <Container className='mt-4'>
                        <Row>
                              <Col lg="3">
                                    <LeftSide></LeftSide>
                              </Col>
                              <Col>
                                    <Outlet></Outlet>
                              </Col>
                        </Row>
                  </Container>
            </div>
      );
};

export default Main;