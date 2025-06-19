import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaVials,
  FaMicroscope,
  FaHeartbeat,
  FaTemperatureHigh,
  FaNotesMedical,
  FaStethoscope,
} from "react-icons/fa";
import UserBooking from "./UserBooking";
import axios from "axios";

const LabBlocks = ({ userData }) => {
  // Data
  const [data, setData] = useState([]);

  // Icons array
  const iconsArr = [
    <FaVials size={40} />,
    <FaMicroscope size={40} />,
    <FaHeartbeat size={40} />,
    <FaTemperatureHigh size={40} />,
    <FaNotesMedical size={40} />,
    <FaStethoscope size={40} />,
  ];

  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  // Update user when userData prop changes
  useEffect(() => {
    setUser(userData);
    console.log("User data updated in LabBlocks:", userData);

    axios
      .get("/api-lab4everywhere/service-card.php")
      .then((response) => {
        const res = response.data;

        const formattedData = res.map((item) => ({
          id: item.id,
          title: item.name,
          text: item.description,
          price: Number(item.price),
          details: item.details,
        }));

        setData(formattedData);

        console.log("Fetched services:", formattedData);
      })
      .catch((err) => {
        console.error("Error fetching services:", err.message || err);
      });
  }, [userData]);

  // Modal handlers
  const showModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  const [visibleIndex, setVisibleIndex] = useState(null);

  const showDetails = (index) => {
    setVisibleIndex(index);
  };

  return (
    <Container className="pt-5 pb-4 px-0">
      <Row>
        {data.map((item, index) => {
          const isVisible = visibleIndex === index;

          return (
            <Col md={6} className="mb-4 " key={index}>
              {/* Front Card */}
              <div
                style={{
                  background: "#fff",
                  border: "15px solid rgb(208 240 248)",
                  borderRadius: "15px",
                  height: "100%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",

                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    transform: isVisible
                      ? "translateX(-100%)"
                      : "translateX(0)",
                    transition: "transform 0.3s ease-in-out",
                    zIndex: isVisible ? 1 : 2,
                    padding: "25px 20px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: "15px",
                  }}
                >
                  <div>{iconsArr[index]}</div>
                  <h4>{item.title}</h4>
                  <p style={{ margin: "0" }}>{item.text}</p>

                  {/* Price Section */}
                  <div style={{ fontSize: "18px" }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        marginRight: "10px",
                      }}
                    >
                      ₹{(item.price * 1.2).toFixed(2)}
                    </span>
                    <span style={{ color: "#28a745", fontWeight: "bold" }}>
                      ₹{item.price.toFixed(2)}{" "}
                      <small style={{ color: "#dc3545" }}>20% OFF</small>
                    </span>
                  </div>

                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <Button
                      variant="secondary"
                      className="w-auto"
                      onClick={showModal}
                    >
                      Book Appointment
                    </Button>
                    {item.details.length > 0 ? (
                      <Button
                        variant="secondary"
                        className="w-auto"
                        onClick={() => showDetails(index)}
                      >
                        Read More
                      </Button>
                    ) : (
                      <Button variant="secondary" className="w-auto" disabled>
                        Read More
                      </Button>
                    )}
                  </div>
                </div>

                {/* Back Details Div */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 h-100 bg-white"
                  style={{
                    transform: isVisible ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s ease-in-out",
                    zIndex: isVisible ? 3 : 0,
                    padding: "25px 20px",
                  }}
                >
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    aria-label="Close"
                    onClick={() => setVisibleIndex(null)}
                  ></button>

                  <h5 className="text-center mt-4">Tests Included</h5>
                  <hr className="my-2" />
                  <p className="text-muted text-center">
                    {item.details
                      ? item.details.map((det) => (
                          <span
                            key={det}
                            className="badge bg-info me-1 fs-6 m-1"
                          >
                            {det}
                          </span>
                        ))
                      : "No additional details available."}
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
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
          <UserBooking user={user} />
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
