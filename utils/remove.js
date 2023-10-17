import Axios from "axios";
import { rootUrl } from "../constants/constants";
// import history from "./history";
async function remove(url, authToken = "") {
  try {
    const authTOKEN = localStorage.getItem("jwt_access_token");

    const res = await Axios.delete(`${rootUrl}${url}`, {
      headers: {
        authorization: authTOKEN,
      },
    });
    return await res?.data?.message;
  } catch (error) {
    if (error.response.status === 404) {
      // history.push("/404");
    }

    throw error;
  }
}

export default remove;
