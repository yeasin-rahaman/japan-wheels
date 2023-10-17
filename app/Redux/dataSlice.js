import { createSlice } from "@reduxjs/toolkit";
import { GET_MENUS_ALL_NESTED, GET_SITESETTINGS } from "../../constant/constants";

export const getAllMenus = () => (dispatch) => {
  fetch(GET_MENUS_ALL_NESTED)
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

const initialState = {
  menus: [],
  siteSetting: [],
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
  },
});

export const { setMenus, setSiteSetting } = dataSlice.actions;
export default dataSlice.reducer;
