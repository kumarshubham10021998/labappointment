import React, { useState } from "react";
import { Form, Button, Alert, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Validation
  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const isValidMobile = (value) =>
    /^[6-9]\d{9}$/.test(value.trim());

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      setError("Please enter your email or mobile number");
      return;
    }

    if (!isValidEmail(trimmed) && !isValidMobile(trimmed)) {
      setError("Please enter a valid 10-digit mobile number or email address");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    const loginData = isValidEmail(trimmed)
      ? { email: trimmed }
      : { mobile: trimmed };

    try {
      // Step 1: Login
      const response = await fetch("http://localhost/api-lab4everywhere/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok || data.status === "error") {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      if (!data.user || !data.user.registrationId) {
        throw new Error("Invalid user data received from server");
      }

      const regId = data.user.registrationId;

      // Step 2: Fetch booking details
      const bookingResponse = await fetch(`http://localhost/api-lab4everywhere/booking.php?registrationId=${regId}`);
      const bookingData = await bookingResponse.json();

      if (!bookingResponse.ok || bookingData.status !== "success") {
        throw new Error("Failed to fetch booking details.");
      }

      // Step 3: Combine login and booking data
      const userData = {
        ...data.user,
        ...bookingData.data,
      };

      setSuccessMessage("Login successful! Redirecting...");

      // Step 4: Call onLogin
      if (onLogin && typeof onLogin === "function") {
        onLogin(userData);
      }

      setInput("");

      // Step 5: Navigate
      setTimeout(() => {
        navigate("/", {
          state: {
            user: userData,
            loginTime: new Date().toISOString(),
          },
        });
      }, 1500);
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-container" style={{ maxWidth: "400px", marginTop: "50px" }}>
      <div className="login-card p-4 shadow-sm rounded">
        <h4 className="mb-4 text-center">Login to Lab4everywhere</h4>

        {successMessage && (
          <Alert variant="success" className="text-center">
            {successMessage}
          </Alert>
        )}

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label srOnly>Email or Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number or email"
              value={input}
              onChange={handleChange}
              required
              autoFocus
              className="py-2"
            />
            <Form.Text className="text-muted">
              We'll use this to verify your account
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={loading || !input.trim()}
            className="w-100 py-2"
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p className="text-muted mb-0">New user? Register first</p>
          <Button
            variant="link"
            size="sm"
            onClick={() => navigate("/lab-register")}
          >
            Create Account
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
