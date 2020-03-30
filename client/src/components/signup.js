import React from "react";

export default function Signup() {
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
        ></input>
        <p>Username:</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
        ></input>
        <p>Password:</p>
        <input type="password" name="password" placeholder="Password"></input>
        <button className="submit">Signup</button>
        <p className="link-signup labels">
          Already Signed Up? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}
