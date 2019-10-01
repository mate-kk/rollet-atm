export interface Banknote {
  value: number;
  amount: number;
}

export interface Notes {
  n2k: Banknote;
  n5k: Banknote;
  n10k: Banknote;
  n20k: Banknote;
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
    n2k: {
      value: 2000,
      amount: 0,
    },
    n5k: {
      value: 5000,
      amount: 0,
    },
    n10k: {
      value: 10000,
      amount: 0,
    },
    n20k: {
      value: 20000,
      amount: 0,
    },
  },
  history: [],
  currentWithdrawal: null,
};
