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
                        <p>The Firebase Realtime Database let us build rich, collaborative applications by allowing secure access to the database directly from client-side code. We have many ways to implement authenticaion. They are, Cookie-Based authentication, Token-Based authentication, Third party access(OAuth, API-token), OpenId, SAML.</p>
                  </div>
                  <div className='border rounded p-3 blog-card mb-3'>
                        <h4>How does the private route work?</h4>
                        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                  </div>
                  <div className='border rounded p-3 blog-card mb-3'>
                        <h4>What is Node? How does Node work?</h4>
                        <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                              <br />
                              Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        </p>
                  </div>
            </Container>
      );
};

export default Blog;