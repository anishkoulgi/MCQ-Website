import React from "react";
import "../App.css";

export const Login = () => {
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
        ></input>
        <p className="labels">Password:</p>
        <input type="password" name="password" placeholder="Password"></input>
        <button className="submit">Login</button>
        <p className="link-signup labels">
          Not yet <a href="/signup">Signed up</a>?
        </p>
      </div>
    </div>
  );
};
