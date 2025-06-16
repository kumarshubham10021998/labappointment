import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
  Spinner,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const PartnersPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    labName: "",
    labLocation: "",
    labType: "",
    contact: "",
    email: "",
    password: "",
    type: "partner",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        // GET request for login
        const response = await axios.get(
          "/api-lab4everywhere/admin_login.php",
          {
            params: {
              email: formData.email,
              password: formData.password,
            },
          }
        );

        const data = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(data.user);
        navigate("/dashboard");
      } else {
        // POST request for registration
        const response = await axios.post(
          "/api-lab4everywhere/admin_register.php",
          formData
        );
        const data = response.data;

        setIsLogin(true);
        setFormData({ ...formData, password: "" });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      title: "Boost Visibility",
      desc: "Reach a wider audience through our platform.",
      icon: "👁️",
    },
    {
      title: "Advanced Dashboard",
      desc: "Track bookings, customers, and revenue in real-time.",
      icon: "📊",
    },
    {
      title: "Trusted Brand",
      desc: "Partner with a name that people trust.",
      icon: "🏆",
    },
    {
      title: "Seamless Integration",
      desc: "Easy setup with your existing systems.",
      icon: "🔌",
    },
    {
      title: "Marketing Support",
      desc: "Get featured in our promotional campaigns.",
      icon: "📢",
    },
    {
      title: "Priority Support",
      desc: "Dedicated account manager for partners.",
      icon: "🛎️",
    },
  ];

  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(135deg, #4f6d7a 0%, #2c3e50 100%)",
          color: "white",
          padding: "5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
        <Container>
          <motion.h1
            className="mb-4 fw-bold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join our network of premium diagnostic labs and unlock new growth
            opportunities with our powerful platform and marketing support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outline-light"
              size="lg"
              className="mt-4 btn-primary position-relative"
              onClick={() => {
                const formSection = document.getElementById("auth-section");
                formSection.scrollIntoView({ behavior: "smooth" });
                setIsLogin(false);
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      {/* Stats Section */}
      <Container className="py-5">
        <Row className="g-4 justify-content-center text-center">
          {[
            { value: "500+", label: "Partner Labs" },
            { value: "1M+", label: "Monthly Tests" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <Col key={index} xs={6} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-3 bg-light"
              >
                <h3 className="text-primary fw-bold">{stat.value}</h3>
                <p className="mb-0 text-muted">{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Benefits Section */}
      <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <h3 className="text-center mb-5 fw-bold">Why Partner With Us?</h3>
          <Row className="g-4">
            {benefits.map((benefit, idx) => (
              <Col key={idx} xs={12} sm={6} lg={4}>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                  <Card className="h-100 border-0 shadow-sm overflow-hidden">
                    <Card.Body className="p-4">
                      <div
                        className="mb-3 fs-1"
                        style={{ transition: "transform 0.3s" }}
                      >
                        {benefit.icon}
                      </div>
                      <Card.Title className="mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="text-muted">
                        {benefit.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* Auth Form Section */}
      <div
        id="auth-section"
        className="py-5"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-4 p-lg-5 rounded-4 shadow"
                style={{ backgroundColor: "white" }}
              >
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-3">
                    {isLogin ? "Welcome Back!" : "Join Our Partner Network"}
                  </h3>
                  <p className="text-muted">
                    {isLogin
                      ? "Access your lab dashboard and manage your business"
                      : "Complete the form to start your partnership application"}
                  </p>
                </div>

                {error && (
                  <Alert
                    variant="danger"
                    onClose={() => setError("")}
                    dismissible
                    className="animate__animated animate__fadeIn"
                  >
                    {error}
                  </Alert>
                )}

                {showSuccess && (
                  <Alert
                    variant="success"
                    onClose={() => setShowSuccess(false)}
                    dismissible
                    className="animate__animated animate__fadeIn"
                  >
                    Registration successful! Please login with your credentials.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                    >
                      <Row className="g-3 mb-4">
                        <Col md={6}>
                          <FloatingLabel
                            controlId="labName"
                            label="Lab Name"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder=" "
                              name="labName"
                              value={formData.labName}
                              onChange={handleChange}
                              required
                              className="border-2"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md={6}>
                          <FloatingLabel
                            controlId="labLocation"
                            label="Lab Location"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder=" "
                              name="labLocation"
                              value={formData.labLocation}
                              onChange={handleChange}
                              required
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md={6}>
                          <FloatingLabel
                            controlId="labType"
                            label="Lab Type"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder=" "
                              name="labType"
                              value={formData.labType}
                              onChange={handleChange}
                              required
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md={6}>
                          <FloatingLabel
                            controlId="contact"
                            label="Contact Number"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder=" "
                              name="contact"
                              value={formData.contact}
                              onChange={handleChange}
                              required
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                    </motion.div>
                  )}

                  <FloatingLabel
                    controlId="email"
                    label="Email"
                    className="mb-4"
                  >
                    <Form.Control
                      type="email"
                      placeholder=" "
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-4"
                  >
                    <Form.Control
                      type="password"
                      placeholder=" "
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </FloatingLabel>

                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-4">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className=""
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="ms-2">Processing...</span>
                        </>
                      ) : isLogin ? (
                        "Login"
                      ) : (
                        "Apply Now"
                      )}
                    </Button>

                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => {
                        setIsLogin(!isLogin);
                        setError("");
                      }}
                      size="lg"
                      className=""
                    >
                      {isLogin
                        ? "Need an account? Register"
                        : "Already have an account? Login"}
                    </Button>
                  </div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Testimonials */}
      <Container className="py-5 my-4 ">
        <h3 className="text-center mb-5 fw-bold">What Our Partners Say</h3>
        <Row className="g-4">
          {[
            {
              quote:
                "Our patient volume increased by 40% after joining this platform. The dashboard makes management so easy.",
              author: "Dr. Sarah Johnson",
              position: "Lab Director, HealthPlus Diagnostics",
            },
            {
              quote:
                "The marketing support helped us establish our brand in new neighborhoods. Highly recommended!",
              author: "Michael Chen",
              position: "Owner, Precision Labs",
            },
            {
              quote:
                "Seamless integration with our existing systems saved us countless hours of manual work.",
              author: "Emma Rodriguez",
              position: "CTO, MetroPath Labs",
            },
          ].map((testimonial, index) => (
            <Col key={index} md={4}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-100 p-4 rounded-3"
                style={{
                  backgroundColor: index === 1 ? "#4f6d7a" : "#f8f9fa",
                  color: index === 1 ? "white" : "inherit",
                }}
              >
                <div className="mb-3 fs-4">"</div>
                <p className="mb-4 fs-5">{testimonial.quote}</p>
                <div>
                  <p className="mb-1 fw-bold">{testimonial.author}</p>
                  <p className="mb-0 small opacity-75">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* FAQ Section */}
      <Container className="py-5 my-5 d-none">
        <h3 className="text-center mb-5 fw-bold">Frequently Asked Questions</h3>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="accordion" id="faqAccordion">
              {[
                {
                  question: "How long does the approval process take?",
                  answer:
                    "Typically 1-2 business days after submitting your complete application. We'll notify you via email once your lab is approved.",
                },
                {
                  question: "Is there any cost to join?",
                  answer:
                    "No, joining our partner network is completely free. We only take a small commission on tests booked through our platform.",
                },
                {
                  question:
                    "Can I integrate with my existing lab management system?",
                  answer:
                    "Yes, we offer API integration with most major lab management systems. Our technical team can assist with the setup process.",
                },
                {
                  question: "How do I get paid for tests?",
                  answer:
                    "We process payments weekly via direct bank transfer. You'll have full visibility of all transactions in your dashboard.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="accordion-item mb-3 border-0 shadow-sm rounded-3 overflow-hidden"
                  whileHover={{ y: -2 }}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faqCollapse${index}`}
                      style={{ backgroundColor: "white" }}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`faqCollapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Final CTA */}
      <div
        className="py-5 d-none"
        style={{ backgroundColor: "#4f6d7a", color: "white" }}
      >
        <Container className="text-center py-4">
          <h2 className="fw-bold mb-4">Ready to Grow Your Lab Business?</h2>
          <p
            className="fs-5 mb-4"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Join hundreds of labs already benefiting from our partnership
            program.
          </p>
          <Button
            variant="light"
            size="lg"
            className="px-5 py-3 rounded-pill fw-bold"
            onClick={() => {
              const formSection = document.getElementById("auth-section");
              formSection.scrollIntoView({ behavior: "smooth" });
              setIsLogin(false);
            }}
          >
            Apply Now - It's Free
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default PartnersPage;
