import * as ACTIONS from './Types';
import * as Utils from '../../common/Utils';

export const validateAmount = (amount: number) => {
  let actionType: any = null;
  if (!Utils.isValidAmount(amount)) {
    actionType = ACTIONS.USER_AMOUNT_VALID;
  } else {
    actionType = ACTIONS.USER_AMOUNT_INVALID;
  }
  return {
    type: actionType,
    payload: amount,
  };
};

export const approveAmount = (amount: number) => {
  return {
    type: ACTIONS.USER_APPROVE_AMOUNT,
    payload: amount,
  };
};
