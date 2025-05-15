import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, mobile, email, age } = formData;

    if (!name.trim()) return "Name is required!";
    if (!/^\d{10}$/.test(mobile)) return "Enter a valid 10-digit mobile number!";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return "Enter a valid email address!";
    if (!age || isNaN(age) || age <= 0) return "Enter a valid age!";
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost/api-lab4everywhere/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("🔍 Register API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      if (!data.registrationId) {
        console.warn("⚠ Registration ID missing! Generating fallback ID.");
        data.registrationId = `REG-${Math.floor(1000 + Math.random() * 9000)}`;
      }

      setSuccessMessage("✅ Registration Successful! 🎉");
      setFormData({ name: "", mobile: "", email: "", age: "" });

      if (typeof onRegister === "function") {
        onRegister({
          name: data.name,
          registrationId: data.registrationId,
        });
      }
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
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control
          type="tel"
          name="mobile"
          value={formData.mobile}
          placeholder="Enter your mobile number"
          onChange={handleChange}
          pattern="^\d{10}$"
          required
        />
        {/* <Form.Text className="text-muted">Enter a 10-digit mobile number.</Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          onChange={handleChange}
          min="1"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>
    </Form>
  );
};

export default Register;
