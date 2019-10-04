export interface Banknote {
  value: number;
  amount: number;
}

export interface NumberTMap<T> {
  [key: number]: T;
}
export interface NumberNumberMap extends NumberTMap<number> {}

export interface Notes {
  [key: number]: number;
}

enum TransactionsStatusCodes {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  FAILED_NO_MATCHING_NOTES = 'FAILED_NO_MATCHING_NOTES',
  FAILED_INVALID_AMOUNT = 'FAILED_INVALID_AMOUNT',
}

export type TransactionStatus =
  | TransactionsStatusCodes.SUCCESS
  | TransactionsStatusCodes.PENDING
  | TransactionsStatusCodes.FAILED_NO_MATCHING_NOTES
  | TransactionsStatusCodes.FAILED_INVALID_AMOUNT;

export interface Transaction {
  withdrawalAmount: number;
  withdrawalNotes: Notes;
  dateTime: string;
  status: TransactionStatus;
}

export interface BankState {
  notes: Notes;
  history: Transaction[];
  currentWithdrawal: null | Transaction;
}

export const INITIAL_STATE: BankState = {
  notes: {
    2000: 0,
    5000: 0,
    10000: 0,
    20000: 0,
  },
  history: [],
  currentWithdrawal: null,
};
