import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import "./Header.css";

import logo from "../assets/img/logo.png";

const Headers = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (type) => {
    setIsLogin(type === "login");
    setShow(true);
  };

  const handleUserUpdate = (userData) => {
    if (!userData.registrationId) {
      console.warn("⚠ Registration ID missing!");
      return;
    }
    setUser(userData);
    setShow(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="my-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="main-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
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
