import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost/api-lab4everywhere/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();
      console.log("🔍 Login API Response:", data); // Debugging API response

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (!data.user || !data.user.registrationId) {
        throw new Error("⚠ Registration ID missing in response");
      }

      setSuccessMessage("✅ Login Successful! 🎉");

      // Pass extracted user data to Headers.js
      onLogin({
        name: data.user.name,  
        registrationId: data.user.registrationId, 
      });

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
};

export default Login;
