import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";

const CreatePoll = () => {
  const [pollStructure, setpollStructure] = useState({
    question: "",
    options: [],
  });

  const option = {
    value: "",
    id: Date.now(),
    innerText: "",
  };

  const arr = [];

  const addOption = () => {
    setpollStructure((prevState) => ({
      ...prevState,
      options: [...prevState.options, option],
    }));
  };

  return (
    <Container>
      <InputGroup className="mb-3 mt-5">
        <Form.Control aria-label="Example text with two button addons" />
        <Button variant="outline-secondary" onClick={() => addOption()}>
          Add Option
        </Button>
        <Button variant="outline-secondary">Clear All</Button>
      </InputGroup>

      <optionInp />
      {pollStructure.options.map((option, key) => (
        <InputGroup className="mb-3 mt-5" key={key}>
          <Form.Control aria-label="Example text with two button addons" />
          <Button variant="outline-secondary" onClick={() => addOption()}>
            Add Option
          </Button>
          <Button variant="outline-secondary">Clear All</Button>
        </InputGroup>
      ))}
    </Container>
  );
};

export default CreatePoll;
