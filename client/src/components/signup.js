import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Signup() {
  const initialDetails = {
    name: "",
    username: "",
    password: ""
  };

  const [user, setUser] = useState(initialDetails);
  const { changeUsername } = useContext(UserContext);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeUsername(user.username);
  };

  return (
    <div className="content">
      <div className="signup-card">
        <h1 className="header">Signup</h1>
        <p className="desc">Practice MCQs for Online Exams</p>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <p>Username:</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <p>Password:</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button className="submit" onClick={handleSubmit}>
          Signup
        </button>
        <p className="link-signup labels">
          Already Signed Up? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}
