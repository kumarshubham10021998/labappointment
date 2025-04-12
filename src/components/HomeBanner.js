import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import bgImage from "../assets/img/home-banner.png"; // Replace with actual path

const HomeBanner = () => {
  return (
    <div style={{ position: "relative", width: "100%" }} className="pt-4">
      <img
        src={bgImage}
        alt="Medical Lab Background"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "600px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="p-5 text-center">
              <Carousel fade interval={4000} controls={false}>
                <Carousel.Item>
                  <h2 className="text-white">Intelligent Lab Testing</h2>
                  <p className="text-white">
                    Automated, fast, and accurate results for professionals.
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <h2 className="text-white">Precision Diagnostics</h2>
                  <p className="text-white">
                    Trust your diagnostics with modern lab systems.
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <h2 className="text-white">Modern Healthcare</h2>
                  <p className="text-white">
                    We blend innovation with experience in lab testing.
                  </p>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
