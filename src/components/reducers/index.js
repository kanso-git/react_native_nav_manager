import { combineReducers } from 'redux';
import loginReducers from './LoginReducers';

export default combineReducers({
  loginForm: loginReducers,
});
