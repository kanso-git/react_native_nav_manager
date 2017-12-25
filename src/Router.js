import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router >
    <Stack>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="employeeList" component={EmployeeList} title="Employee list" />
    </Stack>
  </Router>
);

export default RouterComponent;
