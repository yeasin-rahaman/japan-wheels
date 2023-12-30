//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import reducer from "./dataSlice";


const rootReducer = combineReducers({
  japanwheels: reducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });
