import axios from "../config/axios";

export const getPolls = async () => {
  try {
    const res = await axios.get("polls");
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getPoll = async (pollId) => {
  try {
    const res = await axios.get(`polls/${pollId}`);
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const createPoll = async (values) => {
  try {
    const res = await axios.post("polls", { ...values });
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const deletePoll = async (pollId) => {
  try {
    const res = await axios.delete("polls/", { id: pollId });
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
