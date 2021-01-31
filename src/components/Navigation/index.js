import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavIcon, NavItem, NavTitle, NavWrap } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => {
  return (
    <Nav>
      <NavWrap>
        <NavItem>
          <Link to="/">
            <NavIcon>
              <FontAwesomeIcon icon={faHome} />
            </NavIcon>
            <NavTitle>Home</NavTitle>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">
            <NavIcon>
              <FontAwesomeIcon icon={faUser} />
            </NavIcon>
            {userObj.displayName ? (
              <NavTitle>{userObj.displayName}'s Profile</NavTitle>
            ) : (
              <NavTitle>Profile</NavTitle>
            )}
          </Link>
        </NavItem>
      </NavWrap>
    </Nav>
  );
};

export default Navigation;
