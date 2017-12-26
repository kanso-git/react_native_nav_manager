/* eslint-disable react/prop-types,no-empty */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { authActions } from './actions';
import * as errors from './actions/errors';
import { Card, Spinner, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChange(text);
  }
  onPasswordChange = (text) => {
    this.props.passwordChange(text);
  }
  onLogin = () => {
    this.props.startLogin(this.props.auth);
  }
  onLogout = () => {
    this.props.startLogout();
  }
  renderError= () => {
    const { error } = this.props.auth;
    if (!error) {
    } else {
      // todo user errors file to map the error
      return (
        <View style={{ height: 30, paddingTop: 5 }}>
          <Text style={{ color: 'red', fontSize: 18, alignSelf: 'center' }}>{error}</Text>
        </View>
      );
    }
    return null;
  }
  renderBtnOrSpinner = () => {
    const { spinner } = this.props.auth;
    if (spinner) {
      return <Spinner />;
    }
    return <Button press={this.onLogin}>Login</Button>;
  }
  render() {
    const { email, password } = this.props.auth;
    return (
      <Card>
        <CardSection>
          <Input
            autoFocus
            label="Email"
            placeholder="email@ggmail.com"
            value={email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          { this.renderBtnOrSpinner() }
        </CardSection>
        <CardSection>
          <Button press={this.onLogout}>Logout</Button>
        </CardSection>
      </Card>

    );
  }
}
const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, authActions)(LoginForm);
