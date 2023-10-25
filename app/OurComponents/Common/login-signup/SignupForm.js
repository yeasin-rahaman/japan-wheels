'use client'
import React, { useState } from 'react';
import axios from 'axios';  // Import Axios for making HTTP requests
import { REGISTER_URL } from '@/constant/constants';
import post from '@/utils/post';
import { getUserInfo } from '@/app/Redux/dataSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
    
    }
    else{
      setError('');
    // Prepare the request payload
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    // Send a POST request to the API  for signup
    post(REGISTER_URL, payload)
      .then((res) => {
       
        if (res?.status === 200) {
          localStorage.setItem(
            "jwt_access_token",
            `Bearer ${res?.data?.token}`
          );
          dispatch(getUserInfo());
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Register Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <p className='text-danger'>{error}</p>
        </div>
        <button type="submit" className="btn btn-signup btn-thm mb0">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
