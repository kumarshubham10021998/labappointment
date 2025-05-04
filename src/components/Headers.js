import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import "./Header.css";

import logoDefault from "../assets/img/logo.png";
import logoScrolled from "../assets/img/logo1.png";
const Headers = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (type) => {
    setIsLogin(type === "login");
    setShow(true);
  };

  const handleUserUpdate = (userData) => {
    if (!userData.registrationId) {
      console.warn("Registration ID missing!");
      return;
    }
    setUser(userData);
    setShow(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Handle scroll logo change
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className="my-3 container"
        style={{
          backgroundColor: "#5388cc",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={scrolled ? logoScrolled : logoDefault}
              alt="logo"
              className="main-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/service-list">
                Service
              </Nav.Link>
            </Nav>

            {user ? (
              <>
                <span className="text-light me-3">
                  Registration ID: <strong>{user.registrationId}</strong>
                </span>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="secondary" onClick={() => handleShow("login")}>
                  Login
                </Button>
                <Button
                  className="ms-2"
                  size="lg"
                  onClick={() => handleShow("register")}
                >
                  Register
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <Login onLogin={handleUserUpdate} />
          ) : (
            <Register onRegister={handleUserUpdate} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Headers;
