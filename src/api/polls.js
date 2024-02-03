import axios from '../config/axios';

export const createPoll = async (values) => {
  try {
    const res = await axios.post('polls', { ...values });
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const deletePoll = async (pollId) => {
  try {
    const res = await axios.delete('polls/structure/', { id: pollId });
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getPollStructure = async (id) => {
  try {
    const res = await axios.get(`polls/structure/${id}`);
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
