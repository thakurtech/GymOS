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

const AddDietService = async (diet,userId,token) => {
    
  try {
    const response = await axios.post("http://localhost:8000/v1/user/add-diet",{diet,userId} , {
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

const GetDietService = async (token,userId) => {
      
    try {
      const response = await axios.get("http://localhost:8000/v1/user/fetch-diet/"+userId, {
          headers: {
              Authorization: `bearer ${token}`,
          },
          }
      );
      return { response: true, data: response.data.data.diet,msg:response.data.message };
    } catch (error) {
      return { response: false, msg: "error",data:"" };
    }
  }

const DeleteDietService=async (userId,token)=>{
  try {
    const response = await axios.delete("http://localhost:8000/v1/user/delete-diet/"+userId, {
        headers: {
            Authorization: `bearer ${token}`,
        },
        }
    );
    return { response: true, data: response.data.data,msg:response.data.message };
  }
  catch (error) {
    return { response: false, msg: error.response.data,data:"" };
  }

}

const UpdateDietService=async (data,token)=>{
  try {
    const response = await axios.post("http://localhost:8000/v1/user/update-diet", data, {
        headers: {
            Authorization: `bearer ${token}`,
        },
        }
    );
    return { response: true, data: response.data.data,msg:response.data.message };
  }
  catch (error) {
    return { response: false, msg: error.response.data,data:"" };
  }
}
export {DietService,AddDietService,GetDietService,DeleteDietService,UpdateDietService};
