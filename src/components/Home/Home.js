import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import cover from '../../assets/cover.png';
import './Home.css'

const Home = () => {
      return (
            <Container className='mt-5 rounded home-bg'>
                  <Row className='align-items-center'>
                        <Col lg='6'>
                              <h1>Hello Programmer.</h1>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum obcaecati adipisci sequi ab placeat quidem assumenda dolorum expedita eius velit architecto minima autem laudantium eum enim, dolor vel a. Dolores, laudantium? Ipsam rerum praesentium nam obcaecati laborum ad at exercitationem aliquid rem dolorem modi nesciunt, necessitatibus sed molestias fuga itaque reprehenderit reiciendis quisquam eum aspernatur eveniet cupiditate! Dolorem voluptatum vel repudiandae amet consectetur, pariatur sapiente enim suscipit saepe impedit sed voluptates a architecto ullam ipsum eum ut, quaerat vitae ex iusto velit? Placeat aperiam maxime quam repellat, est ducimus! Rem neque dolore eos tempora cupiditate repellat distinctio aut quam numquam!</p>
                        </Col>
                        <Col lg='6'>
                              <Image
                                    src={cover}
                              ></Image>
                        </Col>
                  </Row>
            </Container>
      );
};

export default Home;