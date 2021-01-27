import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbManager";

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
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "initializing..."
      )}

      <footer>&copy; {new Date().getFullYear()} Xwitter</footer>
    </>
  );
}

export default App;
