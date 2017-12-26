import * as types from './../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_EMPLOYEE_LIST:
      return action.payload.employeeList;
    default:
      return state;
  }
};
