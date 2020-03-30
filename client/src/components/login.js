import React, { useState } from "react";
import "../App.css";

export const Login = () => {
  const initialUser = {
    username: "",
    password: ""
  };
  const [user, setUser] = useState(initialUser);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="content">
      <div className="login-card">
        <h1 className="header">LOGIN</h1>
        <p className="desc">MCQ quizzes for Online Exams</p>
        <p className="labels">Username:</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <p className="labels">Password:</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button className="submit" onClick={handleSubmit}>
          Login
        </button>
        <p className="link-signup labels">
          Not yet <a href="/signup">Signed up</a>?
        </p>
      </div>
    </div>
  );
};
