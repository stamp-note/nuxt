import React, { useState, useRef, useEffect } from "react";
import { authService } from "fbManager";
import { AuthFormInput, AuthFormWrap, AuthToggle, ErrorDesc } from "./styled";

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
      if (!newAccount) {
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
      shakeText();
      setError(error.message);
      console.log(errorShake.current);
    }
  };

  const focuseInput = useRef();
  useEffect(() => {
    focuseInput.current.focus();
  }, []);

  const errorShake = useRef();

  const shakeText = () => {
    errorShake.current.classList.add("shaking");
    setTimeout(() => {
      errorShake.current.classList.remove("shaking");
    }, 500);
  };

  const toggleAccount = () =>
    setNewAccount((prev) => {
      return !prev;
    });

  return (
    <AuthFormWrap>
      <form onSubmit={onSubmit}>
        <AuthFormInput
          ref={focuseInput}
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
          required
        />
        <AuthFormInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
          required
        />

        <AuthFormInput
          type="submit"
          value={newAccount ? "Login" : "Create Account"}
          button
        />
        <ErrorDesc>
          <span ref={errorShake}>{error}</span>
        </ErrorDesc>
      </form>
      <AuthToggle>
        <span onClick={toggleAccount}>
          {newAccount ? "Create Account" : "Sign In"}
        </span>
      </AuthToggle>
    </AuthFormWrap>
  );
};

export default AuthForm;
