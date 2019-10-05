import { Notes } from '../notes/Types';

// Describing the shape of the transaction's slice of state
export enum TransactionStatus {
  SUCCESS,
  PENDING,
  FAILED_NO_MATCHING_NOTES,
  FAILED_INVALID_AMOUNT,
}

export interface Transaction {
  withdrawalAmount: number;
  withdrawalNotes: Notes;
  dateTime: string;
  status: TransactionStatus;
}

export interface TransactionState {
  transactions: Transaction[];
}

// Describing the different ACTION NAMES available
export const ADD_TRANSACTION = 'ADD_TRANSACTION';

interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: Transaction;
}

export type TransactionActionTypes = AddTransactionAction;
