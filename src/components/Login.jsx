/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { TbBrandGithub, TbBrandGoogle, TbEye } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { handleGoogleSignIn } = useContext(AuthContext);
  const { handleGitHubSignIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold text-color mb-8">
        Login to your account
      </h1>
      <p>Login using social networks</p>
      <div className="flex justify-center items- gap-8 mt-4 mb-2">
        <div>
          <button
            className="text-4xl p-2 bg-slate-800 rounded-full"
            onClick={handleGoogleSignIn}
          >
            {" "}
            <TbBrandGoogle />{" "}
          </button>
        </div>
        <div>
          <button className="text-4xl p-2 bg-slate-800 rounded-full" onClick={handleGitHubSignIn}>
            <TbBrandGithub />
          </button>
        </div>
      </div>
      <p>Or</p>
      <form>
        <div className="display: inline-block mt-2">
          <input
            type="email"
            placeholder="Type your email"
            name="email"
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Type your password"
            name="password"
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </form>

      <p className="mt-4 cursor-pointer hover:underline decoration-1">
        <button
          className="btn rounded-3xl"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? "Show Password" : "Hide password"}
        </button>
        <br />
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
