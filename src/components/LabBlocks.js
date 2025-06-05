import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaVials,
  FaMicroscope,
  FaHeartbeat,
  FaTemperatureHigh,
} from "react-icons/fa";
import UserBooking from "./UserBooking";

const LabBlocks = ({ userData }) => {
  // Data
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

  // Icons array
  const iconsArr = [
    <FaVials size={40} />,
    <FaMicroscope size={40} />,
    <FaHeartbeat size={40} />,
    <FaTemperatureHigh size={40} />,
  ];

  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  // Update user when userData prop changes
  useEffect(() => {
    setUser(userData);

    console.log("User data updated in LabBlocks:", userData);
  }, [userData]);

  // Modal handlers
  const showModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  return (
    <Container className="pt-5 pb-4 px-0">
      <Row>
        {data.map((item, index) => (
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
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <Button
                variant="secondary"
                className="justify-content-center"
                onClick={showModal}
              >
                Book Appointment
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Appointment Modal */}
      <MainModal
        show={show}
        onHide={onHide}
        centered
        footer={false}
        heading="Book Appointment"
        className="booking-modal"
      >
        {user ? (
          <UserBooking user={user}></UserBooking>
        ) : (
          <div className="text-center">
            <h5>Please login or register first</h5>
            <p className="text-muted">
              You need to be logged in to book an appointment
            </p>
          </div>
        )}
      </MainModal>
    </Container>
  );
};

export default LabBlocks;
