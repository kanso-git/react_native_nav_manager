import firebase from 'firebase';
import * as types from './types';
import * as errors from './errors';

// actions for the login form
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

const loggedIn = user => ({
  type: types.LOGGED_IN,
  payload: {
    loggedIn: true,
    user,
    spinner: false,
  },
});

const loggedOut = () => ({
  type: types.LOGGED_OUT,
  payload: {
    loggedIn: false,
    spinner: false,
  },
});

const spinnerOn = () => ({
  type: types.SPINNER_ON,
  payload: {
    spinner: true,
  },
});

const spinnerOff = () => ({
  type: types.SPINNER_OFF,
  payload: {
    spinner: false,
  },
});

const errorLogin = errorMsg => ({
  type: types.ERROR_LOGIN,
  payload: {
    error: errorMsg,
    spinner: false,
  },
});

// Meet thunks.
// A thunk is a function that returns a function.
// This is a thunk.

const startLogout = () =>
  async (dispatch) => {
    try {
      await firebase.auth().signOut();
      return null; // dispatch(loggedOut());
    } catch (e) {
      return dispatch(errorLogin(e ? e.code : e));
    }
  };


const startLogin = ({ email, password }) =>
  // Invert control! manager@gmail.com/a12345
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.
  async (dispatch) => {
    dispatch(spinnerOn());
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return dispatch(loggedIn());
    } catch (e) {
      if (e != null) {
        switch (e.code) {
          case errors.ERROR_USER_NOT_FOUND:
            try {
              await firebase.auth().createUserWithEmailAndPassword(email, password);
              // await firebase.auth().signInWithEmailAndPassword(email, password);
              return null;// dispatch(loggedIn());
            } catch (e2) {
              return dispatch(errorLogin(e2 ? e2.code : e2));
            }
          default:
            return dispatch(errorLogin(e.code));
        }
      }
      return dispatch(errorLogin(e ? e.code : e));
    }
  };

export {
  emailChange,
  passwordChange,
  startLogin,
  startLogout,
  loggedIn,
  loggedOut,
  spinnerOn,
  spinnerOff,
};
