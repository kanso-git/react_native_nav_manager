import { combineReducers } from 'redux';
import auth from './AuthReducer';
import employeeForm from './EmployeeFormReducer';
import employeeList from './EmployeeListReducer';

export default combineReducers({
  auth,
  employeeForm,
  employeeList,
});
