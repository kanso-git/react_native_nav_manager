import * as types from './types';

const emailChange = emailText => ({
  type: types.EMAIL_CHANGE,
  payload: {
    email: emailText,
  },
});


const passwordChange = passwordText => ({
  type: types.PASSWORD_CHANGE,
  payload: {
    password: passwordText,
  },
});

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
  payload: {},
});


export { emailChange, passwordChange, loginRequest };
