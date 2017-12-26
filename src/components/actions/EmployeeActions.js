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
const employeeCreate = () => ({ type: types.EMPLOYEE_CREATE });

const saveNewEmployee = ({ displayName, phoneNumber, shift }) =>
  async (disptach) => {
    const { currentUser } = firebase.auth();
    try {
      await firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ displayName, phoneNumber, shift });
      // Actions.reset('main', {});
      disptach(employeeCreate());
      Actions.pop();
    } catch (e) {
      console.log(`w've got an error while saving new employee 
        error is :${e}`);
    }
  };

export {
  displayNameChange,
  phoneNumberChange,
  shiftSelectChange,
  saveNewEmployee,
};
