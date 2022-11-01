import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

function NavigationBar(props: any) {

  const navLinks = [
    { path: "/", name: "All Posts" },
    { path: "add", name: "Add Post" }
  ]

  return (
    <Navbar bg="light" expand="lg" sticky='top' >
      <Container fluid>
        <Navbar.Brand href="#">
          JSON Posts</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {navLinks.map((item, index) => <NavLink autoCorrect={item.name}
              key={index}
              to={item.path}
              style={
               { color:"#000",
                textDecoration:"none",
                marginLeft:"20px"
              }

              }
            >
              {item.name}
            </NavLink>)}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;