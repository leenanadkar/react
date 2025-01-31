import React, { useState, useEffect } from "react";
import { Form, Button, Card, Table, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [submittedContacts, setSubmittedContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
      topic: "General Inquiry",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      message: Yup.string().required("Message cannot be empty"),
      topic: Yup.string().required("Please select a topic"),
    }),
    onSubmit: (values, { resetForm }) => {
      const updatedContacts = [...submittedContacts, values];
      setSubmittedContacts(updatedContacts);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      resetForm();
    },
  });

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-3">Contact Us</h3>
            <Form onSubmit={formik.handleSubmit}>
              {/* Full Name */}
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.fullName && formik.errors.fullName}
                  placeholder="Enter your full name"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.fullName}</Form.Control.Feedback>
              </Form.Group>

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

              {/* Topic */}
              <Form.Group className="mb-3">
                <Form.Label>Topic</Form.Label>
                <Form.Select
                  name="topic"
                  value={formik.values.topic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.topic && formik.errors.topic}
                >
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                  <option>Support</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{formik.errors.topic}</Form.Control.Feedback>
              </Form.Group>

              {/* Message */}
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.message && formik.errors.message}
                  placeholder="Enter your message"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.message}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Display Submitted Data */}
      {submittedContacts.length > 0 && (
        <Row className="justify-content-md-center mt-4">
          <Col md={8}>
            <h4 className="text-center">Submitted Contacts</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Topic</th>
                </tr>
              </thead>
              <tbody>
                {submittedContacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.fullName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.topic}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ContactForm;
