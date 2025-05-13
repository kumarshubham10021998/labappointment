import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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
        className="mb-3"
        style={{
          transition: "0.3s ease-in-out",
          backgroundColor: scrolled ? "rgb(83, 136, 204, 0.7)" : "#5388cc",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Container>
          <Navbar.Collapse id="navBar-collapse" className="d-none d-md-block">
            <Nav className="me-auto text-light ">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link custom-active" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link custom-active" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/service-list"
                className={({ isActive }) =>
                  isActive ? "nav-link custom-active" : "nav-link"
                }
              >
                Service
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ position: "relative", left: "90px" }}
          >
            <img
              src={scrolled ? logoScrolled : logoDefault}
              alt="logo"
              className="main-logo"
              style={{
                transition: "0.3s ease-in-out",
                maxWidth: scrolled ? "100px" : "150px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center justify-content-md-end"
          >
            <Nav className="me-auto text-light d-md-none ">
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

          <div className="side-btn pulse">
            <NavLink
              to="/lab-register"
              style={{
                padding: "12px 22px",
                display: "inline-block",
                textDecoration: "none",
                fontWeight: "500",
                color: "#000",
              }}
            >
              Business Inquiry
            </NavLink>
          </div>
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
