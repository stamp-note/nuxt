import React, { useState } from "react";
import { authService } from "fbManager";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () =>
    setNewAccount((prev) => {
      return !prev;
    });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
          required
        />
        <input type="submit" value={newAccount ? "Create Account" : "Login"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
    </>
  );
};

export default AuthForm;
