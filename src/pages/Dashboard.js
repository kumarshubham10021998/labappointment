import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Tab,
  Spinner,
  Badge,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiLogOut,
  FiHome,
  FiPieChart,
} from "react-icons/fi";

const Dashboard = ({ userData, onLogout }) => {
  // Sample data - replace with actual data from your API
  const stats = [
    {
      title: "Today's Appointments",
      value: 12,
      icon: <FiCalendar size={24} />,
      trend: "up",
    },
    {
      title: "Total Patients",
      value: 342,
      icon: <FiUsers size={24} />,
      trend: "up",
    },
    {
      title: "Revenue",
      value: "$8,245",
      icon: <FiDollarSign size={24} />,
      trend: "down",
    },
    {
      title: "Tests Completed",
      value: 87,
      icon: <FiActivity size={24} />,
      trend: "up",
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: "John Doe",
      test: "Complete Blood Count",
      time: "9:00 AM",
      status: "completed",
    },
    {
      id: 2,
      patient: "Jane Smith",
      test: "Lipid Profile",
      time: "10:30 AM",
      status: "pending",
    },
    {
      id: 3,
      patient: "Robert Johnson",
      test: "Thyroid Test",
      time: "11:15 AM",
      status: "in-progress",
    },
    {
      id: 4,
      patient: "Emily Davis",
      test: "Liver Function",
      time: "2:00 PM",
      status: "pending",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge bg="success">Completed</Badge>;
      case "in-progress":
        return <Badge bg="warning">In Progress</Badge>;
      default:
        return <Badge bg="secondary">Pending</Badge>;
    }
  };

  return (
    <Container fluid className="p-0">
      {/* Sidebar and Main Content Layout */}
      <Row className="g-0">
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white vh-100 p-3">
          <div className="d-flex flex-column h-100">
            <div className="mb-4">
              <h4 className="text-center mb-4">Lab Dashboard</h4>
              <div className="text-center mb-4">
                <div className="bg-light rounded-circle d-inline-block p-3 mb-2">
                  <FiHome size={24} className="text-dark" />
                </div>
                <h6>{userData.labName}</h6>
                <small className="text-muted">{userData.labLocation}</small>
              </div>
            </div>

            <Nav className="flex-column mb-auto">
              <Nav.Link className="text-white mb-2 active">
                <FiPieChart className="me-2" />
                Overview
              </Nav.Link>
              <Nav.Link className="text-white mb-2">
                <FiCalendar className="me-2" />
                Appointments
              </Nav.Link>
              <Nav.Link className="text-white mb-2">
                <FiUsers className="me-2" />
                Patients
              </Nav.Link>
              <Nav.Link className="text-white mb-2">
                <FiDollarSign className="me-2" />
                Payments
              </Nav.Link>
              <Nav.Link className="text-white mb-2">
                <FiSettings className="me-2" />
                Settings
              </Nav.Link>
            </Nav>

            <Button
              variant="outline-light"
              className="mt-auto"
              onClick={onLogout}
            >
              <FiLogOut className="me-2" />
              Logout
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="d-flex justify-content-between align-items-center mb-4"
          >
            <div>
              <h4>Welcome back, {userData.labName}!</h4>
              <p className="text-muted mb-0">Here's what's happening today</p>
            </div>
            <div>
              <Button variant="primary">New Appointment</Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <Row className="g-4 mb-4">
            {stats.map((stat, index) => (
              <Col key={index} xs={12} sm={6} lg={3}>
                <motion.div whileHover={{ y: -5 }}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="text-muted mb-2">{stat.title}</h6>
                          <h3 className="mb-0">{stat.value}</h3>
                        </div>
                        <div
                          className={`bg-${
                            stat.trend === "up" ? "success" : "danger"
                          }-subtle p-3 rounded`}
                        >
                          {stat.icon}
                        </div>
                      </div>
                      <div className="mt-3">
                        <small
                          className={`text-${
                            stat.trend === "up" ? "success" : "danger"
                          }`}
                        >
                          {stat.trend === "up" ? "↑ 12%" : "↓ 5%"} from
                          yesterday
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Recent Appointments and Stats */}
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5>Recent Appointments</h5>
                    <Button variant="outline-primary" size="sm">
                      View All
                    </Button>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Patient</th>
                          <th>Test</th>
                          <th>Time</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentAppointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td>{appointment.patient}</td>
                            <td>{appointment.test}</td>
                            <td>{appointment.time}</td>
                            <td>{getStatusBadge(appointment.status)}</td>
                            <td>
                              <Button variant="outline-primary" size="sm">
                                Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h5 className="mb-4">Test Statistics</h5>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Complete Blood Count</span>
                      <span>45%</span>
                    </div>
                    <ProgressBar
                      now={45}
                      variant="primary"
                      className="rounded-pill"
                      style={{ height: "8px" }}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Lipid Profile</span>
                      <span>28%</span>
                    </div>
                    <ProgressBar
                      now={28}
                      variant="info"
                      className="rounded-pill"
                      style={{ height: "8px" }}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Thyroid Test</span>
                      <span>15%</span>
                    </div>
                    <ProgressBar
                      now={15}
                      variant="warning"
                      className="rounded-pill"
                      style={{ height: "8px" }}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Liver Function</span>
                      <span>12%</span>
                    </div>
                    <ProgressBar
                      now={12}
                      variant="danger"
                      className="rounded-pill"
                      style={{ height: "8px" }}
                    />
                  </div>

                  <Alert variant="info" className="mt-4">
                    <small>
                      Most requested test this week:{" "}
                      <strong>Complete Blood Count</strong>
                    </small>
                  </Alert>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
