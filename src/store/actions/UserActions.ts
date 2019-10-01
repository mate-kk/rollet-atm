import * as ACTIONS from './Types';

export const approveAmount = (amount: number) => {
  return {
    type: ACTIONS.USER_APPROVE_AMOUNT,
    payload: amount,
  };
};
