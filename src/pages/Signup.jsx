import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/JWTAuthContext";
import { useRef } from "react";

const Signup = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value,
    });
  };
  
  return (
    <Container>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
          required
        />
        <br />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email address"
          ref={emailRef}
          required
        />
        <br />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br />
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Password"
          ref={passwordConfirmRef}
          required
        />
        <br />
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default Signup;
