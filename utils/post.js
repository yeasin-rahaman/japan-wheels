import axios from "axios";

import { BASE_URL } from "@/constant/constants";
// import history from "./history";


async function post(url, body = {}, authToken = "") {
  try {
    const AuthStr = localStorage.getItem("token");

    const res = await axios.post(`${url}`, body, {
      headers: {
        authorization: AuthStr,
      },
    });
    return await res;
  } catch (error) {
    if (error?.response?.status === 404) {
      // history.push("/404");
    }

    throw error;
  }
}

export default post;
