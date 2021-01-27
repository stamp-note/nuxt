import React, { useState } from "react";
import { authService, firebaseInstance } from "fbManager";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (e) => {
    const { name } = e.target;

    if (name === "google") {
      await authService.signInWithPopup(
        new firebaseInstance.auth.GoogleAuthProvider()
      );
    } else if (name === "github") {
      await authService.signInWithPopup(
        new firebaseInstance.auth.GithubAuthProvider()
      );
    }
  };

  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
