import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png';
import './Header.css'

const Header = () => {
      return (
            <Navbar bg="light" expand="lg">
                  <Container>
                        <Navbar.Brand href="#home" className='d-flex align-items-center'>
                              <Image
                                    className='me-2'
                                    src={logo}
                                    width="45"
                                    height="45"
                              ></Image>
                              <span className='fw-bold fs-2'>Learn to Code</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="justify-content-end align-items-center flex-grow-1">
                                    <Nav.Link className='btn btn-outline-info me-3 fw-semibold' href="#home">Courses</Nav.Link>
                                    <Nav.Link className='btn btn-outline-info me-3 fw-semibold' href="#link">FAQ</Nav.Link>
                                    <Nav.Link className='btn btn-outline-info me-3 fw-semibold' href="#link">Blog</Nav.Link>
                                    <Nav.Link className='btn btn-outline-info me-3 fw-semibold' href="#link">Login</Nav.Link>
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