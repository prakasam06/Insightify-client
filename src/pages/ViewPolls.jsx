import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPollStructure } from '../api/polls';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ViewPolls = () => {
  const [form, setForm] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const data = await getPollStructure(params.id);
      setForm(data);
    })();
  }, []);

  return (
    form && (
      <div>
        <Container>
          <Container className='d-flex w-100 flex-column'>
            <div className='d-flex align-items-center justify-content-center'>
              <h4>{form.question}</h4>
            </div>
            <Container className='d-flex align-items-center justify-content-center flex-column'>
              {form.options.map((option, index) => (
                <div key={index} className='my-3'>
                  <input type='radio' name='option' value={option.value} />
                  <label>{option.value}</label>
                </div>
              ))}
              <Button
                onClick={() => {
                  alert('Poll Recorded');
                  navigate('/dashboard');
                }}>
                Submit
              </Button>
            </Container>
          </Container>
        </Container>
      </div>
    )
  );
};

export default ViewPolls;
