import React, {useContext, useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {If, Then, Else} from 'react-if';

import {LoginContext} from "./context.js";

function Login() {

  const context = useContext(LoginContext);

  const {
    isAuthenticated,
    logout,
    loginWithRedirect,
    user
  } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  function handleLogout() {
    context.logout();
    logout();
  }

  useEffect( () => {
    if(isAuthenticated && user) {
      context.login(user);
    }
  }, [isAuthenticated, user])

  return (
      <If condition={isAuthenticated}>
        <Then>
          <button onClick={handleLogout}>Log Out</button>
        </Then>
        <Else>
          <button onClick={handleLogin}>Log In</button>
        </Else>
      </If>
  )

}

export default Login;
