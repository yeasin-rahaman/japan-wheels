import Axios from "axios";
// import history from "./history";


async function get(url) {
  
  try {
    const authTOKEN = localStorage.getItem("jwt_access_token");

    const res = await Axios.get(`${url}`, {
      headers: {
        Authorization: authTOKEN,
      },
    });
    return await res?.data?.result;
  } catch (error) {
    throw error;
  }
}

export default get;
