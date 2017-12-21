import * as types from './../actions/types';

export default (state = { email: '', password: '', loggedIn: false }, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGE:
      return { ...state, ...action.payload };

    case types.PASSWORD_CHANGE:
      return { ...state, ...action.payload };

    case types.LOGGED_IN:
      return { ...state, loggedIn: true };

    case types.LOGGED_OUT:
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};
