"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { userLogin } from "../Redux/AuthRedux/action";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch=useDispatch()
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(userLogin(email, password))
    } else {
      // Handle validation errors
    }
  };

  return (
    <div id="login" className="login p-2  m-auto bg-white">
      <div className="bg-gray-100 py-2 mb-4 w-full lg:w-[90%] m-auto ">
        <h2 className="text-xl lg:text-2xl px-5 font-semibold">CUSTOMER LOGIN</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 w-full lg:w-[90%] m-auto" >
        <div className="border border-gray-300 rounded p-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium">Welcome Back!</h3>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">Sign in with your email address.</h3>
          </div>
          <div className="mt-4">
            <form onSubmit={handleLogin}>
              <label htmlFor="email" className="font-semibold">
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
              <div className="mt-4">
                <input
                  type="checkbox"
                  id="showPassword"
                  className="mr-2"
                />
                <label htmlFor="showPassword">Show password</label>
              </div>
              <button className="w-full bg-[#00b4d8] text-white font-bold py-2 px-4 mt-4">
                Sign In
              </button>
              <p className="text-red-500 mt-2">* Required Fields</p>
            </form>
          </div>
        </div>
        <div className="border border-gray-300 rounded p-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium">New Customers</h3>
          </div>
          <div className="mt-4">
            <p>
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more.
            </p>
          </div>
          <div className="mt-4">
            <Link href="/signup">
              <button className="w-full bg-[#00b4d8] text-white font-bold py-2 px-4">
                Create an Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
