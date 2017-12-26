import { combineReducers } from 'redux';
import auth from './AuthReducer';
import employeeForm from './EmployeeFormReducer';

export default combineReducers({
  auth,
  employeeForm,
});
