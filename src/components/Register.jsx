/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    if ((!email, !password, !name, !photo)) {
      setError("Please provide valid information");
      return;
    } else {
      registerUser(email, password)
        .then((result) => {
          updateUserDetails(result.user, name, photo);
          setError("");
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
      <form className=" mb-4">
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            placeholder="Photo URL"
            required
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
      </form>
      <p className="error">{error}</p>
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
