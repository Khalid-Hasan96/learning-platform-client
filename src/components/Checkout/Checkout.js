import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
      const { user } = useContext(AuthContext);
      console.log('checkout', user)
      return (
            <Container className='mt-4'>
                  <Card className="text-center">
                        <Card.Header>Order Details</Card.Header>
                        <Card.Body>

                              <Card.Title>Thank you <span className='fs-2 text-success'>{user.displayName}</span> for get premium access.</Card.Title>
                              <Card.Text>
                                    We'll contact with you really soon via email.
                              </Card.Text>
                              <Link to='/courses'><Button variant="primary">Explore more courses</Button></Link>
                        </Card.Body>

                  </Card>
            </Container>
      );
};

export default Checkout;