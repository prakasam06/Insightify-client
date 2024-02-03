import { useState } from "react";
import { useEffect, useRef } from "react";
import { getFormStructure } from "../api/forms";
import { useParams } from "react-router-dom";
import { handleUserFormSubmission } from "../api/forms";

const ViewForm = () => {
  
  const [formJson, setFormJson] = useState([]);
  const params = useParams();
  const formRef= useRef(null)
  const emailRef = useRef(null);

  function validateEmail(domain) {
    if (!email.endsWith(domain) || email === "") {
      alert("Please enter a valid email");
    }
    emailRef.current.value = "";
  }

  useEffect(() => {
    (async () => {
      const res = await getFormStructure(params.id);
      setFormJson(res.data.form.formJson);
    })();
  }, []);

  const param = useParams();

  const handleUserSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current);
    const data = {}
    formJson.map((item) => {
      data[item.name] = formData.get(item.name)
    })
    console.log(data)
    handleUserFormSubmission(param.id,data)
    formRef.current.reset()
  };
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
    <h1 className="text-left">Form</h1>
    <form ref={formRef} onSubmit={handleUserSubmit} style={{width:'50vw' }}>
      {  formJson.map((item) => (
                <div key={item.id}>
                  <div className="form-group ms-3">
                    <label className="form-label" htmlFor={item.name}>
                      {item.name}
                    </label>
                    {(item.tag === "input" ||
                      item.tag === "email" ||
                      item.tag === "tel") && (
                      <input
                        className="form-control "
                        type={item.tag}
                        id={item.name}
                        name={item.name}
                        required={item.isRequired}
                        ref={emailRef}
                        {...(item.tag === "email" && {
                          onBlur: (e) => {
                            validateEmail(
                              e.target.value,
                              item.domain,
                              emailRef,
                            );
                          },
                        })}
                        {...(item.tag === "tel" && {
                          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        })}
                      />
                    )}
                  </div>
                  <div className="form-group ms-3">
                    {item.tag === "select" && (
                      <select
                        className="form-select "
                        name={item.name}
                        type="text"
                        id={item.name}
                        required={item.isRequired}
                      >
                        <option>Select</option>
                        {item.options.split(",").map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="form-group ms-3">
                    {item.tag === "radio" &&
                      item.options.split(",").map((option) => (
                        <div key={option} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={item.name}
                            id={option}
                            value={option}
                            required={item.isRequired}
                          />
                          <label className="form-check-label" htmlFor={option}>
                            {option}
                          </label>
                        </div>
                      ))}
                  </div>
                  <div className="form-group ms-3">
                    {item.tag === "checkbox" &&
                      item.options.split(",").map((option) => (
                        <div key={option} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name={item.name}
                            id={option}
                            value={option}
                            required={item.isRequired}
                          />
                          <label className="form-check-label" htmlFor={option}>
                            {option}
                          </label>
                        </div>
                      ))}
                  </div>
                  <div className="form-group ms-3">
                    {item.tag === "textarea" && (
                      <textarea
                        className="form-control "
                        type="text"
                        name={item.name}
                        id={item.name}
                        required={item.isRequired}
                      />
                    )}
                  </div>
                  <div className="form-group ms-3">
                    {item.tag === "date" && (
                      <input
                        className="form-control "
                        type="date"
                        name={item.name}
                        id={item.name}
                        required={item.isRequired}
                      />
                    )}
                  </div>
                  <div className="form-group ms-3">
                    {item.tag === "time" && (
                      <input
                        className="form-control "
                        type="time"
                        name={item.name}
                        id={item.name}
                        required={item.isRequired}
                      />
                    )}
                  </div>
                  <br />
                </div>
              ))}
              {formJson.length > 0 && (
                <input
                  type="submit"
                  name="submitButton"
                  className="btn btn-primary mt-2"
                  value="Submit"
                />
              )}
      </form>
      </div>
  )
};

export default ViewForm;
