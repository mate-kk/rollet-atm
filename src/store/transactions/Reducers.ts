import {
  TransactionState,
  ADD_TRANSACTION,
  TransactionActionTypes,
} from './Types';

const initialState: TransactionState = {
  transactions: [],
};

export function TransactionReducer(
  state = initialState,
  action: TransactionActionTypes,
): TransactionState {
  switch (action.type) {
    case ADD_TRANSACTION:
      action.payload;
      return {
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
}
