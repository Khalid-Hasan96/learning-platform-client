import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './Header.css'

const Header = () => {
      return (
            <Navbar bg="light" expand="lg">
                  <Container>
                        <Navbar.Brand>
                              <Link to='/' className='d-flex align-items-center'>
                                    <Image
                                          className='me-2'
                                          src={logo}
                                          width="45"
                                          height="45"
                                    ></Image>
                                    <span className='fw-bold fs-2 web-title'>Learn to Code</span>
                              </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="justify-content-end align-items-center flex-grow-1">
                                    <Nav.Link><Link className='btn btn-outline-info me-2 fw-semibold' to='/'>Home</Link></Nav.Link>
                                    <Nav.Link><Link className='btn btn-outline-info me-2 fw-semibold' to='/courses'>Courses</Link></Nav.Link>
                                    <Nav.Link><Link className='btn btn-outline-info me-2 fw-semibold' to='/faq'>FAQ</Link></Nav.Link>
                                    <Nav.Link><Link className='btn btn-outline-info me-2 fw-semibold' to='/blog'>Blog</Link></Nav.Link>
                                    <Nav.Link><Link className='btn btn-outline-info me-2 fw-semibold' to='/login'>Login</Link></Nav.Link>
                                    <label className="switch">
                                          <input type="checkbox" />
                                          <span className="slider"></span>
                                    </label>
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;