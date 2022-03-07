import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  //login event
  const login = (event) => {
    event.preventDefault(); //this stops the refresh
    // Login Logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in,redirecting to homepage..
        history.push("/");
      })
      .catch((e) => alert(e.message));
    //pop up alert
  };

  //register event
  const register = (event) => {
    event.preventDefault(); //this stops the refresh

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Created a user andd logged in..
        history.push("/");
      })
      .catch((e) => alert(e.message));
    //pop up alert
  };

  return (
    <div className="login">
      

      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            type="email"
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            type="password"
          ></input>
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to E-com's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your E-com Account
        </button>
      </div>
    </div>
  );
}

export default Login;
