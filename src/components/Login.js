import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const isValidMobile = (value) =>
    /^[6-9]\d{9}$/.test(value.trim()); // For 10-digit Indian numbers starting from 6-9

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (!isValidEmail(trimmed) && !isValidMobile(trimmed)) {
      setError("Please enter a valid mobile number or email.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    const loginData = isValidEmail(trimmed)
      ? { email: trimmed }
      : { mobile: trimmed };

    try {
      const response = await fetch("http://localhost/api-lab4everywhere/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log("🔍 API Response:", data);

      if (!response.ok || data.status === "error") {
        throw new Error(data.message || "Login failed");
      }

      if (!data.user || !data.user.registrationId) {
        throw new Error("⚠ Registration ID missing in response");
      }

      setSuccessMessage("✅ Login Successful! 🎉");

      onLogin?.({
        name: data.user.name,
        registrationId: data.user.registrationId,
      });

      setInput("");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="" style={{ maxWidth: "400px" }}>
      <h4 className="mb-4">Login Lab4everywhere</h4>
      <Form onSubmit={handleSubmit}>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3">
          {/* <Form.Label>Login lab4everywhere</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Enter mobile number or email"
            value={input}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
