import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
      return (
            <Container className='mt-5'>
                  <div className='border rounded p-3 blog-card mb-3'>
                        <h4>What is <strong>cors</strong>?</h4>
                        <hr />
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                  </div>
                  <div className='border rounded p-3 blog-card mb-3'>
                        <h4>Why we use firebase? What other options do we have to implement authentication?</h4>
                        <p></p>
                  </div>
                  <div className='border rounded p-3 blog-card mb-3'>
                        <h4>How does the private route work?</h4>
                        <p></p>
                  </div>
                  <div className='border rounded p-3 blog-card mb-3'>
                        <h4>What is Node? How does Node work?</h4>
                        <p></p>
                  </div>
            </Container>
      );
};

export default Blog;