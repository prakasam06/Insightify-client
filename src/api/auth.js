import axios from "../config/axios";

export const signin = async (email, password) => {
  try {
    const res = await axios.post("users/signin", {
      email,
      password,
    });
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
export const signout = async () => {
  try {
    await axios.get("users/signout");
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
export const signup = async (values) => {
  try {
    console.log(values);
    const res = await axios.post(
      "users/signup",
      { ...values },
    );
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getMe = async () => {
  try {
    const res = await axios.get("users/me");
    return res.data.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const forgetPassword = async (email) => {
  try {
    const res = await axios.post("users/forgetPassword", {
      email,
      url: "http://localhost:5173/resetToken?resetToken=",
    });
    return res.data.message;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const resetPassword = async (resetToken, password, passwordConfirm) => {
  try {
    const res = await axios.patch(`users/resetPassword/${resetToken}`, {
      password,
      passwordConfirm,
    });
    return res.data.data;
  } catch (err) {
    Promise.reject(err.response.data);
  }
};

export const updatePassword = async (
  currentPassword,
  password,
  passwordConfirm,
) => {
  try {
    const res = await axios.patch(`users/updatePassword`, {
      currentPassword,
      password,
      passwordConfirm,
    });
    return res.data.data;
  } catch (err) {
    Promise.reject(err.response);
  }
};

export const updateUserData = async (data) => {
  try {
    const res = await axios.patch(
      `users/update`,
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return res.data.data;
  } catch (err) {
    Promise.reject(err.response.data);
  }
};

export const deActivateUser = async () => {
  try {
    const data = await axios.delete(`users/delete`);
    console.log(data);
  } catch (err) {
    console.error(err.response.data);
  }
};
