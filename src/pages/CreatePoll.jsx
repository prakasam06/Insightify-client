import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef } from 'react';
import { createPoll } from '../api/polls';
import { useNavigate } from 'react-router-dom';

const CreatePoll = () => {
  const [pollOptions, setpollOptions] = useState([]);
  const navigate = useNavigate();

  const optionRef = useRef(null);
  const questionRef = useRef(null);
  const addOption = () => {
    let option = {
      value: '',
      id: Date.now(),
      innerText: '',
    };
    option.value = optionRef.current.value;
    option.innerText = optionRef.current.value;
    setpollOptions((prevState) => [...prevState, option]);
    optionRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      question: questionRef.current.value,
      options: pollOptions,
    };
    await createPoll(data);
    alert('Poll created successfully');
    navigate('/dashboard');
  };

  return (
    <Container>
      <h3 className='my-5'>Create Polls</h3>
      <Form.Label htmlFor='inputPassword5'>
        Enter the question of the poll
      </Form.Label>
      <Form.Control
        ref={questionRef}
        type='type'
        id='inputPassword5'
        aria-describedby='passwordHelpBlock'
      />
      {pollOptions.length !== 0 && (
        <Form.Label htmlFor='inputPassword5' className='my-3'>
          Options
        </Form.Label>
      )}
      <ul>
        {pollOptions.map((option) => (
          <li key={option.id}>{option.innerText}</li>
        ))}
      </ul>
      <Form.Label htmlFor='inputPassword5' className='my-3'>
        Add Options
      </Form.Label>
      <InputGroup className=''>
        <Form.Control
          placeholder='Enter the option'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          ref={optionRef}
        />
        <Button
          variant='outline-secondary'
          id='button-addon2'
          onClick={() => addOption()}>
          Add
        </Button>
      </InputGroup>
      <Button className='my-5' onClick={handleSubmit}>
        Create Poll
      </Button>
    </Container>
  );
};

export default CreatePoll;
