import {
  TransactionState,
  ADD_TRANSACTION,
  SET_TRANSACTION,
  TransactionActionTypes,
  INSUFFICIENT_AMOUNT,
  TransactionStatus,
} from './Types';
import { Notes } from '../notes/Types';

const initialState: TransactionState = {
  transactions: [],
  currentTransaction: {},
};

export function TransactionReducer(
  state = initialState,
  action: TransactionActionTypes,
): TransactionState {
  switch (action.type) {
    case ADD_TRANSACTION:
      let { amount, notes, remainingNotes } = action.payload;
      return {
        transactions: [
          ...state.transactions,
          {
            amount,
            notes,
            remainingNotes,
            dateTime: Date.now(),
            status: TransactionStatus.SUCCESS,
          },
        ],
        currentTransaction: { ...state.currentTransaction },
      };
    case SET_TRANSACTION:
      return {
        transactions: [...state.transactions],
        currentTransaction: action.payload,
      };
    case INSUFFICIENT_AMOUNT:
      return {
        transactions: [
          ...state.transactions,
          {
            amount: action.payload.amount,
            notes: {} as Notes,
            remainingNotes: action.payload.remainingNotes,
            dateTime: Date.now(),
            status: TransactionStatus.INSUFFICIENT_AMOUNT,
          },
        ],
        currentTransaction: { ...state.currentTransaction },
      };
    default:
      return state;
  }
}
