import axios from "axios";

const DietService = async (data,token) => {
    
  try {
    const response = await axios.post("http://localhost:8000/v1/user/create-diet", data, {
        headers: {
            Authorization: `bearer ${token}`,
        },
        }
    );
    return { response: true, data: response.data.data,msg:response.data.message };
  } catch (error) {
    return { response: false, msg: error.response.data,data:"" };
  }
};
export default DietService;
