import React, { useContext, useState } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  //const { from } = props.location.state || { from: { pathname: "/" } };

 // if (context.isAuthenticated === true) {
    //return <Navigate to={from} />;
  //}
  return (
    <div align="center">
      <h2>Sign Up page</h2>
      <p>Sign Up now to enjoy user features! </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={login}>Sign Up</button>
      <p>All ready Registered?
      <Link to="/login">Log In!</Link></p>
    </div>
  );
};

export default SignUpPage;