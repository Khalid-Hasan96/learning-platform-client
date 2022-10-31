import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
      return (
            <div>
                  <h1 className='text-center mb-4'>Login</h1>
                  <Form>
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

                        </Form.Text>
                  </Form>
            </div>
      );
};

export default Login;