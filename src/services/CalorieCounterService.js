import axios from "axios";
const CalorieCounterService = async (query) => {
  try {
    const res = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
      {
        headers: {
          "X-Api-Key": "F9TaLS5PIH1a+YAIL6lB/A==uc5o11pyupk3k3SL",
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      return { response: true, msg: res.data };
    } else {
      console.log(res.data.msg);
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

export default CalorieCounterService;
