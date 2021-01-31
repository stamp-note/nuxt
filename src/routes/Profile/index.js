import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "fbManager";
import {
  LogoutButton,
  ProfileNickFin,
  ProfileNickInput,
  ProfileWrap,
} from "./styled";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    refreshUser();
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <ProfileWrap>
      <form onSubmit={onSubmit}>
        <ProfileNickInput
          onChange={onChange}
          value={newDisplayName}
          type="text"
          placeholder="너의 닉네임은요?"
        />
        <ProfileNickFin type="submit" placeholder="Update" value="결정완료" />
      </form>
      <LogoutButton onClick={onLogOutClick}>Logout</LogoutButton>
    </ProfileWrap>
  );
};

export default Profile;
