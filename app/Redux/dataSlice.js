import { createSlice } from "@reduxjs/toolkit";
import {
  GET_BLOGS,
  GET_SITESETTINGS,
  GET_USER_INFO,
} from "../../constant/constants";

export const getAllMenus = () => (dispatch) => {
  fetch(GET_SITESETTINGS)
    .then((res) => res.json())
    .then((data) => dispatch(setMenus(data.menus)))
    .catch((e) => {
      console.log(e);
    });
};

export const getSiteSetting = () => (dispatch) => {
  fetch(GET_SITESETTINGS)
    .then((res) => res.json())
    .then((data) => dispatch(setSiteSetting(data.general_settings)))
    .catch((e) => {
      console.log(e);
    });
};
export const getBlogs = () => (dispatch) => {
  const authTOKEN = {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("jwt_access_token"),
    },
  };
  fetch(GET_BLOGS, authTOKEN)
    .then((res) => res.json())
    .then((data) => dispatch(setBlogs(data?.data)))
    .catch((e) => {
      console.log(e);
    });
};
export const getUserInfo = () => (dispatch) => {
  const authTOKEN = {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("jwt_access_token"),
    },
  };
  fetch(GET_USER_INFO, authTOKEN)
    .then((res) => res.json())
    .then((data) => dispatch(setUserInfo(data)))
    .catch((e) => {
      dispatch(setUserInfo({}));
    });
};

const initialState = {
  menus: [],
  siteSetting: [],
  userInfo: {},
  blogs: [],
};

const dataSlice = createSlice({
  name: "japanwheels/data",
  initialState,
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload ? action.payload : [];
    },
    setSiteSetting: (state, action) => {
      state.siteSetting = action.payload ? action.payload : [];
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload ? action.payload : [];
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload ? action.payload : {};
    },
  },
});

export const { setMenus, setSiteSetting, setUserInfo, setBlogs } =
  dataSlice.actions;
export default dataSlice.reducer;
