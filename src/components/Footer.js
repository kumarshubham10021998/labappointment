import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        color: "#333",
        borderRadius: "15px",
      }}
      className="pt-5 pb-3 px-3 mb-5"
    >
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="mb-3" style={titleStyle}>
              About LabCare
            </h5>
            <p>
              LabCare is a trusted diagnostics platform offering fast, reliable,
              and affordable lab testing solutions. We believe in health powered
              by data.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="mb-3" style={titleStyle}>
              Quick Links
            </h5>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>
                <a href="/" style={linkStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="/services" style={linkStyle}>
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" style={linkStyle}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" style={linkStyle}>
                  FAQ
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="mb-3" style={titleStyle}>
              Contact Us
            </h5>
            <p>Email: support@labcare.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Health Blvd, Wellness City</p>
          </Col>
        </Row>
        <hr style={{ borderTop: "1px solid #ddd" }} />
        <p
          className="text-center mt-3"
          style={{ fontSize: "14px", color: "#666" }}
        >
          &copy; {new Date().getFullYear()} LabCare. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

const linkStyle = {
  color: "#005b7f",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
  transition: "color 0.3s ease",
};

const titleStyle = {
  color: "#003b53",
};

export default Footer;
