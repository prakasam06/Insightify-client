import react from 'react';
import axios from "../config/axios";

export const getResponse = async (formId) => {
    try {
      const res = await axios.get(`/formResponses/${formId}`);
      console.log(res);
      return res.data;
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };