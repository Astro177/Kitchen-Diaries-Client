/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="text-center">
      <p className="text-4xl text-color mb-8">
        New to our website? Register now!
      </p>
      <div className=" mb-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
      </div>
      <p className="mb-2">Already have an account? <Link to="/login" className="text-xl hover:underline decoration-1 text-sky-500">Sign In</Link></p>
      <button className="btn-primary">Register</button>
    </div>
  );
};

export default Register;
