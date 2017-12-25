import React, { Component } from 'react';
import { View, Text } from 'react-native';


class EmployeeCreate extends Component {
  componentWillMount() {
    console.log('componentWillMount ...');
  }
  render() {
    return (<View><Text> Create form </Text></View>);
  }
}

export default EmployeeCreate;
