import axios from "../config/axios";

export const handleFormSubmission = async (values) => {
  try {
    const res = await axios.post("forms/", { ...values });
    console.log(res);
    return res;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
