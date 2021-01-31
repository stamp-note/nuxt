import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbManager";
import GlobalStyles from "style/GlobalStyles";
import { AppWrap, LoadingText, LoadingWrap, Footer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
          // firebase의 특정부분만 가져와서 react한테 전달해줌
        });
      } else {
        setUserObj(null);
        // 로그아웃
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      <GlobalStyles />
      <AppWrap>
        {init ? (
          <AppRouter
            refreshUser={refreshUser}
            isLoggedIn={Boolean(userObj)}
            userObj={userObj}
          />
        ) : (
          <LoadingWrap>
            <FontAwesomeIcon icon={faSpinner} spin />
            <LoadingText>initializing...</LoadingText>
          </LoadingWrap>
        )}

        <Footer>&copy; 2021 Xwitter</Footer>
      </AppWrap>
    </>
  );
}

export default App;
