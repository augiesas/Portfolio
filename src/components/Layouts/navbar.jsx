import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

class NavbarLayout extends Component {
  render() {
    return (
      <>
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
            id="navbar"
          >
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link href="/" className="nav-button">Home</Nav.Link>
                    <Nav.Link href="/aboutMe" className="nav-button">About Me</Nav.Link>
                    <Nav.Link href="/expertise" className="nav-button">Expertise</Nav.Link>
                    <Nav.Link href="/myProjects" className="nav-button">My Projects</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
      // <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
      //   <Container>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse
      //       id="basic-navbar-nav"
      //       className="justify-content-center"
      //     >
      //       <Nav>
      //         <Nav.Link href="/" className="nav-button">
      //           Home
      //         </Nav.Link>
      //         <Nav.Link href="/aboutMe" className="nav-button">
      //           About Me
      //         </Nav.Link>
      //         <Nav.Link href="/expertise" className="nav-button">
      //           Expertise
      //         </Nav.Link>
      //         <Nav.Link href="/myProjects" className="nav-button">
      //           My Projects
      //         </Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
      // <>
      //   <Nav id="navbar" className="justify-content-center" activeKey="/home">
      //     <Nav.Item>
      //       <Nav.Link href="/" className="nav-button">Home</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link eventKey="link-1" href="/aboutMe" className="nav-button">About Me</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link eventKey="link-2" href="/expertise" className="nav-button">Expertise</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link eventKey="link-3" href="/myProjects" className="nav-button">My Projects</Nav.Link>
      //     </Nav.Item>
      //   </Nav>
      // </>
      // <div id="navbar">
      //   <div id="aboutMe" className="nav-button">
      //     <p>
      //       <a href="/">Home</a>
      //     </p>
      //   </div>
      //   <div id="aboutMe" className="nav-button">
      //     <p>
      //       <a href="/aboutMe">About Me</a>
      //     </p>
      //   </div>
      //   <div id="expertise" className="nav-button">
      //     <p>
      //       <a href="/expertise">Expertise</a>
      //     </p>
      //   </div>
      //   <div id="projects" className="nav-button">
      //     <p>
      //       <a href="/myProjects">My Projects</a>
      //     </p>
      //   </div>
      // </div>
    );
  }
}

export default NavbarLayout;
