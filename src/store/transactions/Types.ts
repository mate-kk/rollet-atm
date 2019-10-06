import { Notes } from '../notes/Types';

// Describing the shape of the transaction's slice of state
export enum TransactionStatus {
  SUCCESS = 'SUCCES',
  INSUFFICIENT_AMOUNT = 'INSUFFICIENT_AMOUNT',
}

export interface Transaction {
  amount: number;
  notes: Notes;
  remainingNotes: Notes;
  dateTime: number;
  status: TransactionStatus;
}

export interface TransactionState {
  transactions: Transaction[];
  currentTransaction: Transaction | {};
}

// Describing the different ACTION NAMES available
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const SET_TRANSACTION = 'SET_TRANSACTION';
export const INSUFFICIENT_AMOUNT = 'INSUFFICIENT_AMOUNT';

interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: { amount: number; notes: Notes; remainingNotes: Notes };
}

interface SetTransactionAction {
  type: typeof SET_TRANSACTION;
  payload: { amount: number; notes: Notes };
}

interface InsufficientAmountAction {
  type: typeof INSUFFICIENT_AMOUNT;
  payload: { amount: number; remainingNotes: Notes };
}

export type TransactionActionTypes =
  | AddTransactionAction
  | SetTransactionAction
  | InsufficientAmountAction;
