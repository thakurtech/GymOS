import axios from "axios";

export const signup = async (email, password, phone, role="user") => {
  let url = "";
  if (role === "user") {
    url = "http://localhost:8000/v1/auth/register-user-with-email-password";
  } else if (role === "admin") {
    url = "http://localhost:8000/v1/auth/register-admin-with-email-password";
  }
  try {
    const res = await axios.post(url, { email, password,phone });
    if (res.status === 200) {
      return { response: true, msg: res.data };
    } else {
      console.log(res.data);
      return { response: false, msg: res.data.msg };
    }
  } catch (error) {
    // Handle errors from the server
    const errorResponse = await error.response;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      return { response: false, msg: errorResponse.data.msg };
    } else if (error.request) {
      // The request was made but no response was received
      return { response: false, msg: "failed to fetch nutrition data" };
    } else {
      // Something happened in setting up the request that triggered an Error

      return { response: false, msg: "failed to fetch nutrition data" };
    }
  }
};
