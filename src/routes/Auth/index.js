import React from "react";
import AuthForm from "components/Auth/AuthForm/index";
import { AuthContainer, AuthWrap, LogoWrap } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import AuthAccount from "components/Auth/AuthAccount";

const Auth = () => {
  return (
    <AuthWrap>
      <AuthContainer>
        <LogoWrap>
          <FontAwesomeIcon icon={faTwitter} />
        </LogoWrap>
        <AuthForm />
        <AuthAccount />
      </AuthContainer>
    </AuthWrap>
  );
};

export default Auth;
