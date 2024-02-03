import { useState } from "react";
import { useEffect } from "react";
import { getFormStructure } from "../api/forms";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const [form, setForm] = useState(null);
  const params = useParams();
  useEffect(() => {
    (async () => {
      const data = await getFormStructure(params.id);
      setForm(data);
    })();
  }, []);

  return <div>{JSON.stringify(form)}</div>;
};

export default ViewForm;
