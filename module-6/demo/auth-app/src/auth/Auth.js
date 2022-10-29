import React from 'react';
import {When} from 'react-if';

import {LoginContext} from './context.js';

class Login extends React.Component {

  static contextType = LoginContext;

  render() {

    const isLoggedIn = this.context.loggedIn;
    const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
    const okToRender = isLoggedIn && canDo;

    // TODO: See if we're logged in AND (maybe) have the capability
    //       If so, we render the children
    //       If not, we render null
    return (
      <When condition={okToRender}>
        {this.props.children}
      </When>
    )
  }

}

export default Login;
