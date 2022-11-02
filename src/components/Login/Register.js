import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
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
                        <Form.Text className="text-muted ms-2">
                              <small>Already have an account? Please <Link to='/login'><span className='fs-6 fw-semibold'>Login</span></Link></small>
                        </Form.Text>
                        <hr />
                        <div className='text-center mt-2'>
                              <h5>Or</h5>
                              <div className='mt-4'>
                                    <Button title='Google Sign Up' className='me-3 fs-5' variant='danger'><FaGoogle></FaGoogle></Button>
                                    <Button title='GitHub Sign Up' className='fs-5' variant='dark'><FaGithub></FaGithub></Button>
                              </div>
                        </div>
                  </Form>
            </Container>
      );
};

export default Register;