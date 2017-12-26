import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from './types';

// actions for the employee form
const displayNameChange = displayName => (
  {
    type: types.DISPLAY_NAME_CHANGE,
    payload: {
      displayName,
    },
  }
);

const phoneNumberChange = phoneNumber => (
  {
    type: types.PHONE_NUMBER_CHANGE,
    payload: {
      phoneNumber,
    },
  }
);

const shiftSelectChange = shift => (
  {
    type: types.SHIFT_SELECT,
    payload: {
      shift,
    },
  }
);

const fillInEmployeeForm = employee => ({
  type: types.FILL_IN_FORM_FOR_UPDATE,
  payload: {
    employeeForm: employee,
  },
});
// action creator to clear the form
const resetEmployeeForm = () => ({ type: types.RESET_EMPLOYEE_FROM });

// 1 - async action save the employe in firebase db
// 2 - reset the employee form
// 3 - go back to the employee list
const saveNewEmployee = ({ displayName, phoneNumber, shift }) =>
  async (disptach) => {
    const { currentUser } = firebase.auth();
    try {
      await firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ displayName, phoneNumber, shift });
      disptach(resetEmployeeForm()); // clear form after add
      Actions.pop();
      // Actions.reset('main', {});
    } catch (e) {
      console.log(`w've got an error while saving new employee 
        error is :${e}`);
    }
  };

// actions for employee list
const setEmployeeList = employeeList => ({
  type: types.SET_EMPLOYEE_LIST,
  payload: {
    employeeList,
  },

});
const fetchEmployeeListFromFirebase = () =>
  (dispatch) => {
    const { currentUser } = firebase.auth();
    try {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', (snapshot) => {
          dispatch(setEmployeeList(snapshot.val()));
        });
    } catch (e) {
      console.log(`error in fetchEmployeeListFromFirebase 
    ${e}`);
    }
  };

export {
  displayNameChange,
  phoneNumberChange,
  shiftSelectChange,
  saveNewEmployee,
  fillInEmployeeForm,
  fetchEmployeeListFromFirebase,
  setEmployeeList,
};
