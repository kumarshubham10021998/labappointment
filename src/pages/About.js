import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row, Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "../components/HomeBanner";
import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.jpg";
import about1 from "../assets/img/about-1.jpg";

const About = () => {
  const teams = [
    {
      name: "Member 1",
      description: "Crafting beautiful UI/UX",
      image: "https://placehold.co/600x400",
    },
    {
      name: "Member 1",
      description: "Building the core engine",
      image: "https://placehold.co/600x400",
    },
    {
      name: "Member 1",
      description: "Spreading the word",
      image: "https://placehold.co/600x400",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <Container fluid>
      <Container className="about-container">
        <Row className="g-5">
          {/* Block 1: Banner Section */}
          <Col className="banner-wrap" style={{ borderRadius: "15px" }} lg={12}>
            <HomeBanner />
          </Col>

          {/* Block 2: Image Grid Section */}
          <Col lg={6}>
            <Row className="g-3">
              <Col xs={6}>
                <img className="img-fluid rounded" src={about1} alt="About 1" />
              </Col>
              <Col xs={6}>
                <img className="img-fluid rounded" src={about2} alt="About 2" />
              </Col>
              <Col xs={6}>
                <img className="img-fluid rounded" src={about3} alt="About 3" />
              </Col>
              <Col xs={6}>
                <div
                  className="w-100 h-100 d-flex flex-column align-items-center justify-content-center rounded"
                  style={{
                    backgroundColor: "#00d084",
                    padding: "20px",
                    color: "#fff",
                  }}
                >
                  <div className="icon-box-light mb-3">
                    <i
                      className="bi bi-award text-dark"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                  <h1 className="display-4 mb-1">5</h1>
                  <small className="fs-5">Years Experience</small>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Block 3: Text Section */}
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold mb-4 text-primary">
              Your Health, Our Priority – Anytime, Anywhere
            </h1>
            <p className="mb-4 text-muted fs-5">
              At Lab4Everywhere, we believe that healthcare should be
              accessible, convenient, and trustworthy. Our mission is to bring
              full body check-ups and essential diagnostic tests right to your
              doorstep — no long queues, no unnecessary delays.
            </p>
            <h4 className="mb-3 text-secondary">Why Choose Us?</h4>
            <ul className="list-unstyled fs-5">
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-house-door-fill text-success me-2"></i> Home
                Sample Collection
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-file-earmark-text-fill text-info me-2"></i>{" "}
                Digital Reports
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-patch-check-fill text-warning me-2"></i>{" "}
                Certified Labs & Professionals
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-cash-coin text-primary me-2"></i>{" "}
                Transparent Pricing
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-calendar-check-fill text-danger me-2"></i>{" "}
                Hassle-free Booking
              </li>
            </ul>
          </Col>

          {/* Block 4: Call-to-Action Section */}
          {/*  <Col lg={12} className="text-center mt-5">
            <div
              className="p-5 rounded"
              style={{
                backgroundColor: "#f8f9fa",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="text-primary mb-3">
                Ready to Take the Next Step?
              </h2>
              <p className="text-muted fs-5 mb-4">
                With Lab4Everywhere, your wellness journey begins from the
                comfort of your home. Health should never wait, and with us — it
                doesn’t have to.
              </p>
              <button className="btn btn-success btn-lg px-4">
                Book an Appointment Now
              </button>
            </div>
          </Col> */}

          {/* Block 5: Teams Section */}

          <Col lg={12} className="text-center mt-5 mb-5">
            <h2 className="text-center mb-4">Teams Members</h2>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              arrows
            >
              {teams.map((team, index) => (
                <div key={index} className="px-2">
                  <Card className="h-100 shadow-sm">
                    <Card.Img variant="top" src={team.image} />
                    <Card.Body>
                      <Card.Title>{team.name}</Card.Title>
                      <Card.Text>{team.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
