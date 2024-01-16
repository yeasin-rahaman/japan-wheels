import { createSlice } from "@reduxjs/toolkit";
import {
  GET_BLOG,
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
export const saveAuctionSearchData = (searchData) => (dispatch) => {
  console.log({ searchData });
  dispatch(setAuctionSearchData(searchData))
};
export const saveCarDetailsPaginationData = (paginationData) => (dispatch) => {
  dispatch(setCarDetailsPaginationData(paginationData))
};
export const getBlogs = (page) => (dispatch) => {
  const authTOKEN = {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("jwt_access_token"),
    },
  };
  fetch(`${GET_BLOGS}?page=${page || 1}&size=15`, authTOKEN)
    .then((res) => res.json())
    .then((data) => dispatch(setBlogs(data)))
    .catch((e) => {
      console.log(e);
    });
};

export const getBlog = (id) => (dispatch) => {
  const authTOKEN = {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("jwt_access_token"),
    },
  };
  fetch(`${GET_BLOG}/${id}`, authTOKEN)
    .then((res) => res.json())
    .then((data) => dispatch(setBlog(data?.data)))
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
  blogs: {},
  blog: {},
  auctionSearchData: {},
  carDetailsPaginationData: {},
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
    setAuctionSearchData: (state, action) => {
      state.auctionSearchData = action.payload ? action.payload : {};
    },
    setCarDetailsPaginationData: (state, action) => {
      state.carDetailsPaginationData = action.payload ? action.payload : {};
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload ? action.payload : [];
    },
    setBlog: (state, action) => {
      state.blog = action.payload ? action.payload : {};
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload ? action.payload : {};
    },
  },
});

export const { setMenus, setSiteSetting, setUserInfo, setBlogs, setBlog, setAuctionSearchData, setCarDetailsPaginationData } =
  dataSlice.actions;
export default dataSlice.reducer;
