/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import * as actions from './actions';
import { Card } from './common';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';


class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChange(text);
  }
  onPasswordChange = (text) => {
    this.props.passwordChange(text);
  }
  onLogin = () => {
    this.props.startLogin(this.props.loginForm);
  }
  onLogout = () => {
    this.props.startLogout();
  }
  render() {
    const { email, password, error } = this.props.loginForm;
    return (
      <Card>
        <CardSection>
          <Input
            autoFocus
            label="Email"
            placholder="email@ggmail.com"
            value={email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placholder="password"
            value={password}
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        <CardSection>
          <Button press={this.onLogin}>Login</Button>
        </CardSection>
        <CardSection>
          <Button press={this.onLogout}>Logout</Button>
        </CardSection>

        <CardSection >
          <Text style={{ color: 'red', height: 30 }}>{error}</Text>
        </CardSection>
      </Card>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(state);
  return { loginForm: state.loginForm };
};
export default connect(mapStateToProps, actions)(LoginForm);
