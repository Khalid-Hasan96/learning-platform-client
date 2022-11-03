import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.png';
import './Home.css'

const Home = () => {
      return (
            <Container className='mt-5 rounded home-bg'>
                  <Row className='align-items-center'>
                        <Col lg='6'>
                              <h1>Hello Programmers</h1>
                              <p>Welcome to <span className='fw-bold'>Learn to Code</span>! Are you a programmer or do you want to be a programmer? But didn't know where to start? Well, here we are, one of the greatest learning site on the internet. We have some best courses for you to start your journey. We design our courses for all kinds of people. If you are a beginner or a veteran it doesn't matter who you are. As long as you are interested to learn we are here to give you all the support you need.</p>
                              <Link to='/courses'><Button variant='primary'>Get Started</Button></Link>
                        </Col>
                        <Col lg='6'>
                              <Image
                                    className='head-img'
                                    src={cover}
                              ></Image>
                        </Col>
                  </Row>
            </Container>
      );
};

export default Home;