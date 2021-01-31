import React from "react";
import { AuthAccountWrap, GoggleGitButton, LogoIcon } from "./styled";
import { authService, firebaseInstance } from "fbManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const AuthAccount = () => {
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
    <AuthAccountWrap>
      <GoggleGitButton onClick={onSocialClick} name="google">
        <LogoIcon>
          <FontAwesomeIcon icon={faGoogle} />
        </LogoIcon>
        Continue with Google
      </GoggleGitButton>
      <GoggleGitButton onClick={onSocialClick} name="github">
        <LogoIcon>
          <FontAwesomeIcon icon={faGithub} />
        </LogoIcon>
        Continue with Github
      </GoggleGitButton>
    </AuthAccountWrap>
  );
};

export default AuthAccount;
