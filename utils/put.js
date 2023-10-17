import Axios from "axios";

import { BASE_URL } from "../constants/constants";
// import history from "./history";

const AuthStr = localStorage.getItem("token");
async function put(url, body = {}, authToken = "") {
  try {
    const res = await Axios.put(`${BASE_URL}${url}`, body, {
      headers: {
        authorization: AuthStr,
      },
    });
    return await res;
  } catch (error) {
    return error;
  }
}

export default put;
