import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import "./About.css";
import HomeBanner from "../components/HomeBanner";
import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.jpg";
import about1 from "../assets/img/about-1.jpg";

const About = () => {
  const teams = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      description:
        "Board-certified pathologist with 15+ years experience in diagnostic medicine.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description:
        "Tech innovator specializing in healthcare systems integration.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Operations",
      description: "Ensuring seamless service delivery across all locations.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      description: "Spreading awareness about accessible healthcare solutions.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      social: {
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  const features = [
    {
      icon: "bi-house-door-fill",
      color: "text-success",
      title: "Home Sample Collection",
      description:
        "Our phlebotomists visit you at your preferred location and time",
    },
    {
      icon: "bi-file-earmark-text-fill",
      color: "text-info",
      title: "Digital Reports",
      description: "Get your test results securely delivered to your email",
    },
    {
      icon: "bi-patch-check-fill",
      color: "text-warning",
      title: "Certified Professionals",
      description: "NABL accredited labs and trained technicians",
    },
    {
      icon: "bi-cash-coin",
      color: "text-primary",
      title: "Transparent Pricing",
      description: "No hidden charges with upfront pricing",
    },
    {
      icon: "bi-calendar-check-fill",
      color: "text-danger",
      title: "Hassle-free Booking",
      description: "Book tests in under 2 minutes through our app",
    },
    {
      icon: "bi-shield-check",
      color: "text-secondary",
      title: "Quality Assurance",
      description: "Stringent quality control at every step",
    },
  ];

  return (
    <Container fluid>
      {/* Hero Banner Section */}
      <Container className="about-container">
        <Row className="g-5">
          {/* Block 1: Banner Section */}
          <Col className="banner-wrap" style={{ borderRadius: "15px" }} lg={12}>
            <HomeBanner />
          </Col>
        </Row>
      </Container>
      {/* Main Content */}
      <Container className="pt-5">
        <Row className="g-5 align-items-center mb-5">
          {/* Image Grid Section */}
          <Col lg={6}>
            <Row className="g-3">
              <Col xs={6}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    className="img-fluid rounded-3 shadow-sm"
                    src={about1}
                    alt="Lab technician working"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </Col>
              <Col xs={6}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    className="img-fluid rounded-3 shadow-sm"
                    src={about2}
                    alt="Medical equipment"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </Col>
              <Col xs={6}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    className="img-fluid rounded-3 shadow-sm"
                    src={about3}
                    alt="Doctor consultation"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </Col>
              <Col xs={6}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-100 h-100 d-flex flex-column align-items-center justify-content-center rounded-3 shadow-sm"
                  style={{
                    backgroundColor: "#00d084",
                    padding: "20px",
                    color: "#fff",
                    height: "250px",
                  }}
                >
                  <div className="icon-box mb-3">
                    <i
                      className="bi bi-award-fill"
                      style={{ fontSize: "2.5rem", color: "rgba(0,0,0,0.2)" }}
                    ></i>
                  </div>
                  <motion.h1
                    className="display-3 mb-1 fw-bold"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    5+
                  </motion.h1>
                  <small className="fs-5">Years of Trusted Service</small>
                </motion.div>
              </Col>
            </Row>
          </Col>

          {/* Text Section */}
          <Col lg={6} className="ps-lg-5">
            <motion.h1
              className="display-5 fw-bold mb-4 text-gradient"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your Health, Our Priority – Anytime, Anywhere
            </motion.h1>
            <motion.p
              className="mb-4 fs-5 text-muted"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              At Lab4Everywhere, we believe that healthcare should be
              accessible, convenient, and trustworthy. Our mission is to bring
              full body check-ups and essential diagnostic tests right to your
              doorstep — no long queues, no unnecessary delays.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="btn-secondary">
                Learn More About Us
              </Button>
            </motion.div>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mb-5">
          <Col xs={12} className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-muted">
              We're redefining diagnostic healthcare delivery
            </p>
          </Col>

          <Col lg={12} className="">
            <ul className="list-unstyled fs-5 choose-us-list">
              {features.map((feature, index) => (
                // <Col key={index} xs={6} md={4} lg={2} className="mb-4">
                //   <motion.div
                //     whileHover={{ y: -5 }}
                //     className="h-100 p-4 text-center rounded-3 bg-light"
                //   >
                //     <i
                //       className={`bi ${feature.icon} ${feature.color} fs-1 mb-3`}
                //     ></i>
                //     <h5 className="fw-bold mb-2">{feature.title}</h5>
                //     <p className="small text-muted mb-0">{feature.description}</p>
                //   </motion.div>
                // </Col>
                <li key={index}>
                  <i className={`bi ${feature.icon} ${feature.color}`}></i>{" "}
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="small mb-0">{feature.description}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="py-5">
          <Col xs={12} className="text-center mb-5">
            <h2 className="fw-bold">Meet Our Team</h2>
            <p className="text-muted">
              The passionate professionals behind Lab4Everywhere
            </p>
          </Col>
          <Col xs={12}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              arrows={true}
              itemClass="px-3"
              containerClass="team-carousel"
              sliderClass="team-slider"
              partialVisible={true}
            >
              {teams.map((team, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-100 border-0 shadow-sm overflow-hidden">
                    <div className="team-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={team.image}
                        className="team-img"
                      />
                      <div className="team-social-overlay">
                        {team.social.linkedin && (
                          <a
                            href={team.social.linkedin}
                            className="text-white mx-2"
                          >
                            <i className="bi bi-linkedin fs-5"></i>
                          </a>
                        )}
                        {team.social.twitter && (
                          <a
                            href={team.social.twitter}
                            className="text-white mx-2"
                          >
                            <i className="bi bi-twitter fs-5"></i>
                          </a>
                        )}
                        {team.social.github && (
                          <a
                            href={team.social.github}
                            className="text-white mx-2"
                          >
                            <i className="bi bi-github fs-5"></i>
                          </a>
                        )}
                        {team.social.instagram && (
                          <a
                            href={team.social.instagram}
                            className="text-white mx-2"
                          >
                            <i className="bi bi-instagram fs-5"></i>
                          </a>
                        )}
                      </div>
                    </div>
                    <Card.Body className="text-center p-4">
                      <Card.Title className="fw-bold mb-1">
                        {team.name}
                      </Card.Title>
                      <small className="d-block text-primary mb-2">
                        {team.role}
                      </small>
                      <Card.Text className="text-muted small">
                        {team.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="my-5 d-none">
          <Col xs={12}>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-5 rounded-4 text-center"
              style={{
                background: "linear-gradient(135deg, #4f6d7a 0%, #2c3e50 100%)",
                color: "white",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="fw-bold mb-3">Ready to Take the Next Step?</h2>
              <p className="fs-5 mb-4" style={{ opacity: 0.9 }}>
                With Lab4Everywhere, your wellness journey begins from the
                comfort of your home. Health should never wait, and with us — it
                doesn't have to.
              </p>
              <Button
                variant="light"
                size="lg"
                className="rounded-pill px-4 fw-bold"
              >
                Book an Appointment Now
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
