import React from 'react';

// External Access Point
export const LoginContext = React.createContext();

class LoginProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout
    }
  }

  login = (username, password) => {
    console.log(username, password);
    // Check "somewhere" if you're legit and then change state
    this.setState({...this.state, loggedIn:true})
  }

  logout = () => {
    // Undo it all...
    this.setState({...this.state, loggedIn:false})
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
