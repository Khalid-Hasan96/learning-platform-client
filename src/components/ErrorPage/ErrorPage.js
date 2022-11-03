import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
      return (
            <Container className='text-center mt-5'>
                  <h1>404 Not Found</h1>
                  <p>The element you are searchin we didn't found</p>
            </Container>
      );
};

export default ErrorPage;