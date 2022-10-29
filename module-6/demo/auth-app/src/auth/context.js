import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import cookie from 'react-cookies';

// External Access Point
export const LoginContext = React.createContext();

class LoginProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: null,
      user: {},
      login: this.login,
      logout: this.logout,
      can: this.can
    }
  }

  can = (capability) => {
    return this?.state?.user?.capabilities?.includes(capability);
  }

  // login = async (username, password) => {
  //   try {
  //     const res = await axios.post('http://localhost:3001/login', {username, password});
  //     const auth = res.data;
  //     // Decode the token
  //     this.validateToken(auth.token);
  //     // Put the user and their capabilities into state
  //     // Save it in a cookie
  //   } catch(e) {
  //     console.error('No Bueno');
  //   }
  // }

  login = async (user) => {
    try {
      const res = await axios.post('http://localhost:3001/login', { email: user.email });
      const auth = res.data;
      // Decode the token
      this.validateToken(auth.token);
      // Put the user and their capabilities into state
      // Save it in a cookie
    } catch (e) {
      console.error('No Bueno');
    }
  }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateToken = (token) => {
    try {
      const validUser = jwt_decode(token, "super-secret");
      this.setLoginState( true, token, validUser)
    } catch(e) {
      this.setLoginState( false, null, {}, e.message)
    }
  }

  setLoginState = (loggedIn, token, user, error) => {
    // Set the state
    this.setState({ token, loggedIn, user });

    // Set a cookie
    cookie.save('auth', token);
  }

  componentDidMount() {
    const cookieFromToken = cookie.load('auth');
    this.validateToken(cookieFromToken);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }

}

export default LoginProvider;
