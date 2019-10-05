import { Transaction, TransactionActionTypes, ADD_TRANSACTION } from './Types';

export function addTransaction(
  trancastion: Transaction,
): TransactionActionTypes {
  return {
    type: ADD_TRANSACTION,
    payload: trancastion,
  };
}
