import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaVials,
  FaMicroscope,
  FaHeartbeat,
  FaTemperatureHigh,
} from "react-icons/fa";

const LabBlocks = () => {
  const blocks = [
    {
      icon: <FaVials size={40} />,
      title: "Lab Testing",
      text: "Get accurate and fast test results for all standard panels.",
    },
    {
      icon: <FaMicroscope size={40} />,
      title: "Pathology",
      text: "Comprehensive diagnostic support for all lab requirements.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Health Monitoring",
      text: "Track vital health metrics with real-time reports.",
    },
    {
      icon: <FaTemperatureHigh size={40} />,
      title: "Temperature Checks",
      text: "Ensure safety with routine thermal screenings.",
    },
  ];

  return (
    <Container className="pt-5 pb-4 px-0">
      <Row>
        {blocks.map((block, index) => (
          <Col md={6} className="mb-4" key={index}>
            <div
              style={{
                background: "#f5f7fa",
                padding: "30px",
                borderRadius: "15px",
                height: "100%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div>{block.icon}</div>
              <h4>{block.title}</h4>
              <p>{block.text}</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LabBlocks;
