/* eslint-disable no-unused-vars */
import React from "react";
import { TbBrandGithub, TbBrandGoogle} from "react-icons/tb";
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit=e=>{
        
    }
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
      <div className="display: inline-block mt-2">
        <input
          type="email"
          placeholder="Type your email"
          className="input input-bordered input-primary w-full max-w-xs mb-6"
        />
        <input
          type="password"
          placeholder="Type your password"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <p className="mt-4 cursor-pointer hover:underline decoration-1">Forgot password?</p>
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

      <button className="btn-primary" onSubmit={handleSubmit}>Sign In</button>
    </div>
  );
};

export default Login;
