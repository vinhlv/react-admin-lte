import React from 'react';
import {Link} from 'react-router';
import {Users} from 'api';
import isEmpty from 'lodash/isEmpty';
import {connect} from 'react-redux';
import {emailPattern} from 'constants/regexPattern';
import {Checkbox} from 'react-icheck';

class SigninForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  isValid(state) {
    const errors = {};

    if (!state.email) {
      errors.email = 'Email is required.';
    } else if (!emailPattern.test(state.email)) {
      errors.email = 'Email is invalid.';
    }

    if (!state.password) {
      errors.password = 'Password is required.';
    }

    if (!isEmpty(errors)) {
      this.setState({errors});
    }

    return isEmpty(errors);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    if (this.isValid(this.state)) {
      this.setState({errors: {}, isLoading: true});
      this.props.dispatch(Users.actions.login(null, {email: this.state.email, password: this.state.password})).then(res => {
        this.setState({isLoading: false});
        this.context.router.push('/');
      }).catch(err => {
        this.setState({isLoading: false});
      });
    }
  }

  render() {
    return (
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>

        <form action="javascript:void(0)" method="post">
          <div className="form-group has-feedback">
            <input type="email" className="form-control" placeholder="Email"/>
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" className="form-control" placeholder="Password"/>
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <Checkbox
                  checkboxClass="icheckbox_square-blue"
                  increaseArea="20%"
                  label=" Remember Me"
                />
              </div>
            </div>
            <div className="col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </form>
        <div className="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
            Facebook</a>
          <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
            Google+</a>
        </div>
        <a href="#">I forgot my password</a><br/>
        <a href="#" className="text-center">Register a new membership</a>

      </div>
    );
  }
}

SigninForm.propTypes = {
  dispatch: React.PropTypes.func
};

SigninForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect()(SigninForm);
