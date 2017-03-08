import React from 'react';
import {SingleLayout} from 'layout';
import SigninForm from 'modules/signin';

class SigninPage extends React.Component {
  componentDidMount() {
    document.getElementById("bodyApp").className = "login-page";
  }
  render() {
    return (

        <div className="login-box">
          <div className="login-logo">
            <a href="javascript:void(0)"><b>Admin</b>LTE</a>
          </div>
          <SigninForm />
        </div>
      
    );
  }
}

export default SigninPage;
