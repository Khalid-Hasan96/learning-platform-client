import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
      const singleCourse = useLoaderData();

      const { img, title, details, duration, price } = singleCourse;
      console.log(singleCourse)
      return (
            <Container className='mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                        <h2>Course Details</h2>
                        <Button variant='info'>Download</Button>
                  </div>
                  <Card className='mt-4'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                              <Card.Title>{title}</Card.Title>
                              <Card.Text>
                                    <p><small>{details}</small></p>
                                    <p>Duration: {duration} week</p>
                                    <p>Price: <span className='fs-3 fw-bold'>${price}</span></p>
                              </Card.Text>
                              <Link to='/checkout'><Button variant="primary">Get Premium Access</Button></Link>
                        </Card.Body>
                  </Card>
            </Container>
      );
};

export default CourseDetails;