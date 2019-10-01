import {
  USER_APPROVE_AMOUNT,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
} from '../actions/Types';

import { INITIAL_STATE } from '..';

export default (state = INITIAL_STATE, action) => {
  console.log('User REDUCER', action);
  switch (action.type) {
    case USER_APPROVE_AMOUNT:
      let currentWithdrawal = {
        ...state.currentWithdrawal,
        withdrawalAmount: action.payload,
      };
      return { ...state, ...currentWithdrawal };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
