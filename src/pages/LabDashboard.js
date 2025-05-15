import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LabRegistrationSection = () => {
  const [formData, setFormData] = useState({
    labName: "",
    labLocation: "",
    labType: "",
    contact: "",
    email: "",
    type: "partner",
  });
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col xs={12}>
            <div
              style={{
                textAlign: "center",
                paddingTop: "2rem",
                paddingBottom: "1rem",
                background: "rgb(108, 117, 125)",
                marginBottom: "2rem",
                borderRadius: "15px",
                color: "#fff",
                marginTop: "0.5rem",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                {isLogin ? "Welcome! Back" : "Partner with Us"}{" "}
              </h2>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <div
              style={{
                textAlign: "center",
                paddingTop: "2rem",
                paddingBottom: "1rem",
                background: "rgb(108, 117, 125)",
                marginBottom: "2rem",
                borderRadius: "15px",
                color: "#fff",
              }}
            >
              <p style={{ color: "#fff" }}> Together, We Grow Stronger </p>
              <p style={{ color: "#fff" }}>
                At the heart of everything we do is collaboration. Our partners
                play a key role in helping us deliver quality, innovation, and
                value every step of the way. We proudly work with trusted
                organizations who share our passion and commitment to
                excellence. Whether it's technology, services, or community
                impact, our partnerships help us reach new heights and create
                better experiences for everyone we serve. Interested in
                partnering with us? Let’s build something great together. Reach
                out to explore how we can collaborate.
              </p>
            </div>
          </Col>

          <Col xs={12} md={8} style={{ margin: "2rem 0" }}>
            <Form
              onSubmit={handleSubmit}
              style={{
                padding: "2rem",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <Form.Group controlId="labName">
                <Form.Label>Lab Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab name"
                  name="labName"
                  value={formData.labName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="labLocation">
                <Form.Label>Lab Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab location"
                  name="labLocation"
                  value={formData.labLocation}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="labType">
                <Form.Label>Lab Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab type"
                  name="labType"
                  value={formData.labType}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LabRegistrationSection;
