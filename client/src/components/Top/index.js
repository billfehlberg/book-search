import React from "react";
import  { Navbar, Nav } from "react-bootstrap";

function Top() {
  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Saved</Nav.Link>
      <Nav.Link href="/books">Search</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      )
    }

export default Top;
