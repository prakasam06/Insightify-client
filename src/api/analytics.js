import axios from "../config/axios";

export const dashboardAnalytics = async () => {
  try {
    const res = await axios.get("analytics/dashboard");
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const userRecents = async () => {
  try {
    const res = await axios.get("analytics/recents");
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
