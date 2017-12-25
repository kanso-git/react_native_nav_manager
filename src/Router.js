import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => (
  <Router >
    <Stack key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main" >
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee list"
          rightTitle="Add"
          onRight={() => Actions.employeeForm()}
        />
        <Scene
          key="employeeForm"
          component={EmployeeCreate}
          title="New employee"
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponent;
