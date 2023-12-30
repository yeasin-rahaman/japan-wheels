"use client";
import axios from "axios";
import { GET_USER_INFO, LOGIN_URL } from "@/constant/constants";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import post from "../../../../utils/post";
import get from "../../../../utils/get";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "@/app/Redux/dataSlice";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter()

  const dispatch = useDispatch();
  const user = useSelector((state) => state.japanwheels?.userInfo);
  console.log(`user`, user);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare the request useData
    const loginData = {
      email: userData.email,
      password: userData.password,
    };
    post(LOGIN_URL, loginData).then((res) => {
      if (res?.status === 200) {
        localStorage.setItem("jwt_access_token", `Bearer ${res?.data?.token}`);
        dispatch(getUserInfo());
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 mr-sm-2">
        <label className="form-label">Username or email address *</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          required
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mb5">
        <label className="form-label">Password *</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          required
          value={userData.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-log btn-thm mt5">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
