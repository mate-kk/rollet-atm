import {
  TransactionActionTypes,
  ADD_TRANSACTION,
  SET_TRANSACTION,
  INSUFFICIENT_AMOUNT,
} from './Types';
import { Notes } from '../notes/Types';

export const addTransaction = (
  amount: number,
  notes: Notes,
  remainingNotes: Notes,
): TransactionActionTypes => {
  return {
    type: ADD_TRANSACTION,
    payload: { amount, notes, remainingNotes },
  };
};

export const setTransaction = (
  amount: number,
  notes: Notes,
): TransactionActionTypes => {
  return {
    type: SET_TRANSACTION,
    payload: { amount, notes },
  };
};

export const insufficientAmount = (
  amount: number,
  remainingNotes: Notes,
): TransactionActionTypes => {
  return {
    type: INSUFFICIENT_AMOUNT,
    payload: { amount, remainingNotes },
  };
};
