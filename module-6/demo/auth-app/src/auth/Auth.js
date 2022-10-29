import React from 'react';

class Login extends React.Component {

  render() {
    // TODO: See if we're logged in AND (maybe) have the capability
    //       If so, we render the children
    //       If not, we render null
    return (
      <>
        {this.props.children}
      </>
    )
  }

}

export default Login;
