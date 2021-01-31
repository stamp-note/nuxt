import React from "react";
import AuthForm from "components/Auth/AuthForm/index";
import { AuthContainer, AuthWrap, LogoWrap } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthAccount from "components/Auth/AuthAccount";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
  return (
    <AuthWrap>
      <AuthContainer>
        <LogoWrap>
          <FontAwesomeIcon icon={faCommentDots} />
        </LogoWrap>
        <AuthForm />
        <AuthAccount />
      </AuthContainer>
    </AuthWrap>
  );
};

export default Auth;
