import React, { useState } from "react";
import { MainModal } from "./Modal";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import {
  FaVials,
  FaMicroscope,
  FaHeartbeat,
  FaTemperatureHigh,
} from "react-icons/fa";

const LabBlocks = () => {
  // data
  const data = [
    {
      title: "Lab Testing",
      text: "Get accurate and fast test results for all standard panels.",
    },
    {
      title: "Pathology",
      text: "Comprehensive diagnostic support for all lab requirements.",
    },
    {
      title: "Health Monitoring",
      text: "Track vital health metrics with real-time reports.",
    },
    {
      title: "Temperature Checks",
      text: "Ensure safety with routine thermal screenings.",
    },
  ];

  // icons array
  const iconsArr = [
    <FaVials size={40} />,
    <FaMicroscope size={40} />,
    <FaHeartbeat size={40} />,
    <FaTemperatureHigh size={40} />,
  ];

  // trigger modal
  const [show, setShow] = useState(false);

  // to handle opening or closing of modal
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <Container className="pt-5 pb-4 px-0">
      <Row>
        {data.map((data, index) => (
          <Col md={6} className="mb-4" key={index}>
            <div
              style={{
                background: "#fff",
                border: "15px solid rgb(208 240 248)",
                padding: "20px",
                borderRadius: "15px",
                height: "100%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: "15px",
              }}
            >
              <div>{iconsArr[index]}</div>
              <h4>{data.title}</h4>
              <p>{data.text}</p>
              <Button variant="secondary" onClick={showModal}>
                Book Appointment
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* form modal */}
      <MainModal show={show} hideModal={hideModal} centered footer={true}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </MainModal>
    </Container>
  );
};

export default LabBlocks;
