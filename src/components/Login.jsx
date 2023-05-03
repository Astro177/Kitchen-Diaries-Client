/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TbBrandGithub, TbBrandGoogle, TbEye } from "react-icons/tb";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [passwordError, serPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    console.log(password);
  };
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      serPasswordError("password must be 6 characters long");
    } else {
      serPasswordError("");
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold text-color mb-8">
        Login to your account
      </h1>
      <p>Login using social networks</p>
      <div className="flex justify-center items- gap-8 mt-4 mb-2">
        <div>
          <button className="text-4xl p-2 bg-slate-800 rounded-full">
            {" "}
            <TbBrandGoogle />{" "}
          </button>
        </div>
        <div>
          <button className="text-4xl p-2 bg-slate-800 rounded-full">
            <TbBrandGithub />
          </button>
        </div>
      </div>
      <p>Or</p>
      <form onSubmit={handleSubmit}>
        <div className="display: inline-block mt-2">
          <input
            type="email"
            placeholder="Type your email"
            name="email"
            // value={email}
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Type your password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </form>
      {passwordError && <span className="error">{passwordError}</span>}
      <p className="mt-4 cursor-pointer hover:underline decoration-1">
         <button className="btn rounded-3xl" onClick={()=>setShowPassword(!showPassword)}>Show Password</button><br />
        Forgot password?
      </p>
      <p className="mb-4">
        <span className="text-2xl text-color">New here?</span> Sign up and
        discover our great amount of new recipes{" "}
        <Link
          to="/register"
          className="text-xl hover:underline decoration-1 text-sky-500"
        >
          Sign Up
        </Link>
      </p>

      <button className="btn-primary">Sign In</button>
    </div>
  );
};

export default Login;
