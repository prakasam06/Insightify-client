import React, { useState, useEffect, useRef } from "react";
import { MultiSelect } from "react-multi-select-component";

export const CreateForm = () => {
  const [questionType, setQuestionType] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [options, setOptions] = useState("");
  const [formJson, setFormJson] = useState([]);

  const selectOptions = [];
  const radioOptions = [];
  const checkboxOptions = [];

  const [selected, setSelected] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [textArea, setTextArea] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [domain, setDomain] = useState("");
  const [tel, setTel] = useState("");

  const emailRef = useRef(null);

  function createValidJson({
    questionType,
    isRequired,
    options,
    questionName,
  }) {
    const validJson = {};
    validJson["id"] = Math.floor(Math.random() * 1000);
    validJson["tag"] = questionType;
    validJson["name"] = questionName;
    validJson["isRequired"] = isRequired;
    validJson["options"] = options;
    validJson["domain"] = domain;
    return validJson;
  }

  const clearForm = () => {
    setQuestionType("");
    setQuestionName("");
    setIsRequired(false);
    setOptions("");
    setSelected([]);
    setSelectedRadio([]);
    setSelectedCheckbox([]);
    setTextArea("");
    setEmail("");
    setTime("");
    setDate("");
    setDomain("");
  };

  function handleSubmit({
    questionType,
    isRequired,
    options,
    questionName,
    domain,
  }) {
    if (questionType === "select" && options.length === 0) {
      alert("Please enter options");
      return;
    }
    const jsonData = createValidJson({
      questionType,
      isRequired,
      options,
      questionName,
      domain,
    });
    setFormJson([...formJson, jsonData]);
    clearForm();
  }

  function validateEmail(domain) {
    if (!email.endsWith(domain) || email === "") {
      alert("Please enter a valid email");
    }
    emailRef.current.value = "";
  }

  const inputTypes = [
    {
      id: 1,
      value: "input",
    },
    {
      id: 2,
      value: "select",
    },
    {
      id: 3,
      value: "radio",
    },
    {
      id: 4,
      value: "checkbox",
    },
    {
      id: 5,
      value: "textarea",
    },
    {
      id: 6,
      value: "range",
    },
    {
      id: 7,
      value: "date",
    },
    {
      id: 8,
      value: "time",
    },
    {
      id: 9,
      value: "email",
    },
    {
      id: 10,
      value: "tel",
    },
  ];

  const customValueRenderer = (selected, _options) => {
    return selected.length
      ? selected.map(({ label }) => "✔️ " + label)
      : "😶 No Items Selected";
  };

  useEffect(() => {
    setOptions(selected.map((item) => item.value).join(","));
  }, [selected]);

  useEffect(() => {
    setOptions(selectedRadio.map((item) => item.value).join(","));
  }, [selectedRadio]);

  useEffect(() => {
    setOptions(selectedCheckbox.map((item) => item.value).join(","));
  }, [selectedCheckbox]);

  return (
    <>
      <div className="card w-75 ">
        <div className="card-body">
          <div className="container">
            <div className="form-group m-3">
              <label htmlFor="questionType" className="form-label">
                Question Type
              </label>
              <select
                className="form-select"
                id="questionType"
                onChange={(e) => {
                  setQuestionType(e.target.value);
                }}
              >
                <option>Select Type</option>
                {inputTypes.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group m-3">
              <label htmlFor="options" className="form-label">
                Enter Question Name
              </label>
              <input
                type="text"
                className="form-control"
                id="options"
                value={questionName}
                onChange={(e) => {
                  setQuestionName(e.target.value);
                }}
              />
            </div>

            {questionType === "email" && (
              <div className="form-group m-3">
                <label htmlFor="domain" className="form-label">
                  Enter Domain to valid email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="domain"
                  onChange={(e) => {
                    setDomain(e.target.value);
                  }}
                  placeholder="@gamil.com"
                />
              </div>
            )}

            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="radio"
                name="isRequired"
                id="isRequired"
                onChange={(e) => {
                  setIsRequired(e.target.checked);
                }}
              />
              <label className="form-check-label" htmlFor="isRequired">
                Is Required
              </label>
            </div>
            {questionType === "select" && (
              <div className="form-group m-3">
                <label htmlFor="options" className="form-label">
                  Multi choice Options
                </label>
                {/* <input type="text" className="form-control" id="options" onChange={(e) => { setOptions(e.target.value) }} /> */}
                <MultiSelect
                  options={selectOptions}
                  value={selected}
                  onChange={setSelected}
                  isCreatable={true}
                  labelledBy="Select"
                  valueRenderer={customValueRenderer}
                />
              </div>
            )}
            {questionType === "radio" && (
              <div className="form-group m-3">
                <label htmlFor="options" className="form-label">
                  Radio Options
                </label>
                <MultiSelect
                  options={radioOptions}
                  value={selectedRadio}
                  onChange={setSelectedRadio}
                  isCreatable={true}
                  labelledBy="Select"
                  valueRenderer={customValueRenderer}
                />
              </div>
            )}
            {questionType === "checkbox" && (
              <div className="form-group m-3">
                <label htmlFor="options" className="form-label">
                  Checkbox Options
                </label>
                <MultiSelect
                  options={checkboxOptions}
                  value={selectedCheckbox}
                  onChange={setSelectedCheckbox}
                  isCreatable={true}
                  labelledBy="Select"
                  valueRenderer={customValueRenderer}
                />
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary m-3"
              onClick={() => {
                handleSubmit({
                  questionType,
                  isRequired,
                  options,
                  questionName,
                  domain,
                });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <form className="container mt-5">
        {formJson.length === 0 &&
          formJson.map((item) => (
            <div key={item.id}>
              <label className="form-label" htmlFor={item.name}>
                {item.name}
              </label>
              {(item.tag === "input" ||
                item.tag === "email" ||
                item.tag === "tel") && (
                <input
                  className="form-control w-50"
                  type={item.tag}
                  id={item.name}
                  required={item.isRequired}
                  ref={emailRef}
                  {...(item.tag === "email" && {
                    onBlur: (e) => {
                      validateEmail(e.target.value, item.domain, emailRef);
                    },
                  })}
                  {...(item.tag === "tel" && {
                    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                  })}
                />
              )}
              {item.tag === "select" && (
                <select
                  className="form-select w-50"
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
              {item.tag === "textarea" && (
                <textarea
                  className="form-control w-50"
                  type="text"
                  id={item.name}
                  required={item.isRequired}
                />
              )}
              {item.tag === "date" && (
                <input
                  className="form-control w-50"
                  type="date"
                  id={item.name}
                  required={item.isRequired}
                />
              )}
              {item.tag === "time" && (
                <input
                  className="form-control w-50"
                  type="time"
                  id={item.name}
                  required={item.isRequired}
                />
              )}
            </div>
          ))}
        <input type="submit" className="btn btn-primary mt-2" value="Submit" />
      </form>
    </>
  );
};
