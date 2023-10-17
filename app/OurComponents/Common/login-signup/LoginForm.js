"use client";
import axios from "axios";
import { GET_USER_INFO, LOGIN_URL } from "@/constant/constants";
import React, { useState } from "react";
import post from "../../../../utils/post";
import get from "../../../../utils/get";

const LoginForm = () => {
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
        debugger
        localStorage.setItem("token", `Bearer ${res?.data?.token}`);
        // Get the userData
    get(GET_USER_INFO).then((res) => {
      if (res?.status === 200) {
        console.log(`res`, res);
      }
    });      }
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
