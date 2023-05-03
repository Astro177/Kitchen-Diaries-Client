/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { registerUser, updateUserDetails } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Please provide a 6 character password");
      return;
    } else {
      setError("");
    }
    if ((email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          updateUserDetails(result.user,name,photo)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="text-center">
      <p className="text-4xl text-color mb-8">
        New to our website? Register now!
      </p>
      <div className=" mb-4">
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
          <p className="error">{error}</p>
        </div>
        <div>
          <input
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            placeholder="Photo URL"
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
      </div>
      <p className="mb-2">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-xl hover:underline decoration-1 text-sky-500"
        >
          Sign In
        </Link>
      </p>
      <button className="btn-primary" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
