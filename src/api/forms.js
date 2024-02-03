import axios from "../config/axios";

export const deleteForm = async (formId) => {
  try {
    const res = await axios.delete("forms/", { id: formId });
    console.log(res);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getFormStructure = async (formId) => {
  try {
    const res = await axios.get(`forms/${formId}`);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
