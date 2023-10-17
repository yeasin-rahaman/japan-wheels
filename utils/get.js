import Axios from "axios";
// import history from "./history";


async function get(url) {
  
  try {
    const AuthStr = localStorage.getItem("token");

    const res = await Axios.get(`${url}`, {
      headers: {
        Token: AuthStr,
      },
    });
    return await res?.data?.result;
  } catch (error) {
    throw error;
  }
}

export default get;
