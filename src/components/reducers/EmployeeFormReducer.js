import * as types from './../actions/types';

const initialState = {
  displayName: '',
  phoneNumber: '',
  shift: '',
};
export default (state = initialState, action) => {
  console.log(`From reducers recieved action ${action ? JSON.stringify(action, null, 3) : action}`);
  switch (action.type) {
    case types.DISPLAY_NAME_CHANGE:
      return { ...state, ...action.payload };
    case types.PHONE_NUMBER_CHANGE:
      return { ...state, ...action.payload };
    case types.SHIFT_SELECT:
      return { ...state, ...action.payload };
    case types.FILL_IN_FORM_FOR_UPDATE:
      return { ...state, ...action.payload.employeeForm };
    case types.RESET_EMPLOYEE_FROM:
      return { ...initialState };
    default:
      return state;
  }
};
