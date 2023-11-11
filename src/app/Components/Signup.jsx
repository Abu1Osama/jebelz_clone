"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userSignup } from "../Redux/AuthRedux/action";
import { useState } from "react";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const username = firstname + lastname;

    if (password === confirmPassword && username && email && password) {
      dispatch(userSignup(username, email, password));
    } else {
      // Handle password mismatch or validation errors
    }
  };

  return (
    <div id="signup" className="signup bg-white">
      <div className="lg:w-[90%] m-auto py-5">

      <div className="bg-gray-100  py-2 mb-4 text-center " >
        <h3 className="text-lg px-5 font-semibold">
          CREATE NEW CUSTOMER ACCOUNT
        </h3>
      </div>
      <div className="border border-gray-300 rounded p-4 lg:w-[50%] m-auto">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-medium">PERSONAL INFORMATION</h3>
        </div>
        <form onSubmit={handleSignup} className="mt-4">
          <label htmlFor="firstName" className="font-semibold">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border border-gray-300"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="lastName" className="font-semibold mt-4">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border border-gray-300"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <div className="border-b border-gray-200 pb-4 mt-4">
            <h3 className="font-medium">SIGN-IN INFORMATION</h3>
          </div>
          <label htmlFor="email" className="font-semibold mt-4">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="w-full px-4 py-2 border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="font-semibold mt-4">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="font-semibold mt-4">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="text-red-500 mt-2">* Required Fields</p>
          <button className="w-full bg-[#00b4d8] text-white font-bold py-2 px-4 mt-4">
            Create an Account
          </button>
        </form>
      </div>
      </div>

    </div>
  );
}

export default Signup;
