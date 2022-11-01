import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './FormStyle.css';

const Register = () => {
      return (
            <Container className='mt-3'>
                  <h1 className='text-center mb-4'>Register</h1>
                  <Form className='form-style p-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Photo URL</Form.Label>
                              <Form.Control type="text" placeholder="Enter PhotoURL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="info" type="submit">
                              Submit
                        </Button>
                        <Form.Text className="text-muted">
                              <small>Already have an account? Please <Link to='/login'>Login</Link></small>
                        </Form.Text>
                  </Form>
            </Container>
      );
};

export default Register;