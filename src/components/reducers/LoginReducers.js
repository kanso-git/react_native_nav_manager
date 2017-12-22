import * as types from './../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loggedIn: null,
  error: null,
  spinner: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(`recieved action ${action ? JSON.stringify(action, null, 3) : action}`);
  switch (action.type) {
    case types.EMAIL_CHANGE:
      return { ...state, ...action.payload };

    case types.PASSWORD_CHANGE:
      return { ...state, ...action.payload };

    case types.LOGGED_IN:
      return { ...state, ...action.payload, error: null };

    case types.LOGGED_OUT:
      return { ...state, ...action.payload, error: null };

    case types.ERROR_LOGIN:
      return { ...state, ...action.payload };

    case types.SPINNER_ON:
      return { ...state, ...action.payload };

    case types.SPINNER_OFF:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
