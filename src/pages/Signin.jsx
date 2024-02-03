import { useAuth } from "../context/JWTAuthContext";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signin = () => {
  const { signIn, loading } = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSigin = async (e) => {
    e.preventDefault();
    await signIn(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <Form onSubmit={handleSigin}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address"
          ref={emailRef}
          required
        />
        <br />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br />
        <Container className="d-flex justify-content-between">
          <Button type="submit" disabled={loading}>
            Submit form
          </Button>
          <Link to="/signup">Signup</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default Signin;
