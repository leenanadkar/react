import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewsletterSubscription = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      agree: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsSubscribed(true);
      resetForm();
    },
  });

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-3">Subscribe to Newsletter</h3>
            <Form onSubmit={formik.handleSubmit}>
              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.email && formik.errors.email}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
              </Form.Group>

              {/* Terms and Conditions */}
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="agree"
                  label="I agree to the terms and conditions"
                  checked={formik.values.agree}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.agree && formik.errors.agree}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.agree}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">Subscribe</Button>
            </Form>

            {isSubscribed && <Alert className="mt-3" variant="success">Subscription successful!</Alert>}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterSubscription;
