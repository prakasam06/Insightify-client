import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPollStructure } from '../api/polls';

const ViewPolls = () => {
  const [form, setForm] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const data = await getPollStructure(params.id);
      setForm(data);
    })();
  }, []);

  return (
    <div>
      <h1>View Polls</h1>
      {JSON.stringify(form)}
    </div>
  );
};

export default ViewPolls;
