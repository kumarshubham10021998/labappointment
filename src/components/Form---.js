/* import React from "react";
import { Form, Button } from "react-bootstrap";

export const FormWrap = (
  mainClass,
  fieldClass,
  fieldName,
  fieldType,
  fieldPlaceHol
) => {
  return (
    <Form className={mainClass || "form-main"}>
      <Form.Group
        className={`mb-3 ${fieldClass}`}
        controlId={`formBasic${fieldClass}`}
      >
        <Form.Label>{fieldName}</Form.Label>
        <Form.Control type={fieldType} placeholder={fieldPlaceHol} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
 */
