import Axios from "axios";

import { BASE_URL } from "../constants/constants";
// import history from "./history";

const authTOKEN = localStorage.getItem("jwt_access_token");
async function put(url, body = {}, authToken = "") {
  try {
    const res = await Axios.put(`${BASE_URL}${url}`, body, {
      headers: {
        authorization: authTOKEN,
      },
    });
    return await res;
  } catch (error) {
    return error;
  }
}

export default put;
