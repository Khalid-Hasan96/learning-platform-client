import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './FormStyle.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
      const [error, setError] = useState('');
      const { googleSignIn, githubSignIn, signIn } = useContext(AuthContext);

      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';

      const handleGoogleSignIn = () => {
            const provider = new GoogleAuthProvider();

            googleSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        setError('');
                        navigate(from, { replace: true });
                        console.log(user)
                  })
                  .catch(error => {
                        console.error(error)
                        setError(error.message)
                  })
      }

      const handleGitHubSignIn = () => {
            const provider = new GithubAuthProvider()
            githubSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        setError('');
                        navigate(from, { replace: true });
                        console.log(user)
                  })
                  .catch(error => {
                        console.error(error)
                        setError(error.message)
                  })

      }
      const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        form.reset();
                        setError('');
                        navigate(from, { replace: true });
                  })
                  .catch(error => {
                        console.error(error)
                        setError(error.message)
                  })

      }

      return (
            <Container className='mt-3'>
                  <h1 className='text-center mb-4'>Login</h1>
                  <Form className='form-style p-3' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Text className="text-danger ms-2">
                              <small>{error}</small>
                        </Form.Text> <br />
                        <Button variant="info" type="submit">
                              Submit
                        </Button>
                        <Form.Text className="ms-2 text-muted">
                              <small>Didn't have account? Please <Link to='/register'><span className='fs-6 fw-semibold'>Register</span></Link></small>
                        </Form.Text>
                        <hr />
                        <div className='text-center mt-2'>
                              <h5>Or</h5>
                              <div className='mt-4'>
                                    <Button onClick={handleGoogleSignIn} title='Google Sign In' className='me-3 fs-5' variant='danger'><FaGoogle></FaGoogle></Button>
                                    <Button onClick={handleGitHubSignIn} title='GitHub Sign In' className='fs-5' variant='dark'><FaGithub></FaGithub></Button>
                              </div>
                        </div>

                  </Form>
            </Container>
      );
};

export default Login;