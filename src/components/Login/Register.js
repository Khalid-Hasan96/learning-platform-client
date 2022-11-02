import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './FormStyle.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
      const [error, setError] = useState('');
      const { googleSignIn, githubSignIn, createUser, updateUserProfile } = useContext(AuthContext);
      const handleGoogleSignIn = () => {
            const provider = new GoogleAuthProvider();

            googleSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        setError('')
                        console.log(user)
                  })
                  .catch(error => {
                        setError(error.message);
                        console.error(error)
                  })
      }

      const handleGitHubSignIn = () => {
            const provider = new GithubAuthProvider()
            githubSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        setError('')
                        console.log(user)
                  })
                  .catch(error => {
                        setError(error.message);
                        console.error(error)
                  })
      }

      const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const name = form.name.value;
            const photo = form.photo.value;
            createUser(email, password)
                  .then(result => {
                        const user = result.user;
                        handleUpdateUserProfile(name, photo);
                        setError('');
                        form.reset();
                        console.log(user)
                  })
                  .catch(error => {
                        console.error(error)
                        setError(error.message)
                  })
            console.log(email, password, name, photo)
            form.reset();

      }

      const handleUpdateUserProfile = (name, photo) => {
            const profile = { displayName: name, photoURL: photo }
            updateUserProfile(profile)
                  .then(() => { })
                  .catch(error => console.error(error))

      }
      return (
            <Container className='mt-3'>
                  <h1 className='text-center mb-4'>Register</h1>
                  <Form className='form-style p-3' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" name='name' placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Photo URL</Form.Label>
                              <Form.Control type="text" name='photo' placeholder="Enter PhotoURL" />
                        </Form.Group>
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
                              Register
                        </Button>
                        <Form.Text className="text-muted ms-2">
                              <small>Already have an account? Please <Link to='/login'><span className='fs-6 fw-semibold'>Login</span></Link></small>
                        </Form.Text>
                        <hr />
                        <div className='text-center mt-2'>
                              <h5>Or</h5>
                              <div className='mt-4'>
                                    <Button onClick={handleGoogleSignIn} title='Google Sign Up' className='me-3 fs-5' variant='danger'><FaGoogle></FaGoogle></Button>
                                    <Button onClick={handleGitHubSignIn} title='GitHub Sign Up' className='fs-5' variant='dark'><FaGithub></FaGithub></Button>
                              </div>
                        </div>

                  </Form>
            </Container>
      );
};

export default Register;