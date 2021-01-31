import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "routes/Home/index";
import Auth from "routes/Auth/index";
import Profile from "routes/Profile/index";
import Navigation from "components/Navigation/index";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>

            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Router exact path="/">
            <Auth />
          </Router>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
