import React from "react";
import services from "../data/services";
import { Container, Row, Col } from "react-bootstrap";
import HomeBanner from "../components/HomeBanner";
import { FaArrowRight } from "react-icons/fa";
import { FaCapsules } from "react-icons/fa";

import "../css/ServiceList.css";

const ServiceList = () => {
  return (
    <Container fluid>
      <Container className="service-container">
        <Row className="g-5">
          {/* Block 1: Banner Section */}
          <Col className="banner-wrap" style={{ borderRadius: "15px" }} lg={12}>
            <HomeBanner />
          </Col>
          <Col
            className="service-grid"
            lg={12}
            style={{ marginBottom: "2rem" }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${index === 0 ? "highlight" : ""}`}
              >
                <div className="service-icon">
                  <FaCapsules className="icon" />
                </div>
                <h3 className="service-title">{service.name}</h3>
                <div className="service-buttons">
                  {service.modalId && (
                    <button
                      className="btn read-more"
                      data-bs-toggle="modal"
                      data-bs-target={`#${service.modalId}`}
                    >
                      Read More <FaArrowRight />
                    </button>
                  )}
                  <a className="btn book-now" href="booking.php">
                    Book Now <FaArrowRight />
                  </a>
                </div>
                <div className="service-price">
                  ₹ {service.price} / <span>Only pay</span>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ServiceList;
