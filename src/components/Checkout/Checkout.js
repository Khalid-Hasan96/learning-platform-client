import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
      const courseDetail = useLoaderData();
      const { title, price } = courseDetail;
      const { user } = useContext(AuthContext);

      return (
            <Container className='mt-4'>
                  <Card className="text-center">
                        <Card.Header>Order Details</Card.Header>
                        <Card.Body>

                              <Card.Title>Thank you <span className='fs-2 text-success'>{user.displayName}</span> for get premium access. </Card.Title>
                              <Card.Text>
                                    <p>Course Name: <span className='fw-bold'>{title}</span></p>
                                    <p>Price: <span className='fw-bold'>${price}</span></p>
                                    We'll contact with you really soon via email.
                              </Card.Text>
                              <Link to='/courses'><Button variant="primary">Explore more courses</Button></Link>
                        </Card.Body>

                  </Card>
            </Container>
      );
};

export default Checkout;