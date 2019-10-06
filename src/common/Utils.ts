import { Notes, ValidNote, NoteState } from '../store/notes/Types';
import { useDebugValue } from 'react';

/**
 * Prevalidates give amount. It needs to be higher than 2000, and divisible by 1000.
 * @param amount User input, amount to withdraw.
 * @returns True if valid, false otherwise.
 */
export const isValidAmount = (amount: number): boolean => {
  if (amount < 2000) return false;
  if (amount % 1000 != 0 && amount % 1000 < 1000) return false;
  return true;
};

/**
 * Returns a given number in formatted string with given separator.
 * @param n Number to format.
 * @param sep Separator to use between thousands
 * @returns Formatted number as string.
 */
export const numberWithSeparator = (n: number, sep: string = ' '): string => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
};

/**
 * Calculates total amount of given notes.
 * @param notes Banknotes to summarize.
 * @returns Total value of bank notes.
 */
export const calculateTotalAmount = (notes: object): number => {
  return Object.entries(notes).reduce(function(total, pair) {
    const [key, value] = pair;
    return total + parseInt(key) * value;
  }, 0);
};

export const subtractNotes = (atmBalance: Notes, toSubtract: Notes): Notes => {
  let ret: Notes = { ...atmBalance };
  Object.keys(toSubtract).forEach((value, index) => {
    ret[value] =
      ret[value] - toSubtract[value] < 0 ? 0 : ret[value] - toSubtract[value];
  });
  return ret;
};

export const timeStamp2ReadableFormat = (timeStamp: number): string => {
  return `${new Date(timeStamp).toLocaleDateString()}  -  ${new Date(
    timeStamp,
  ).toLocaleTimeString()}`;
};

export const getBankNotes = (
  amount: number,
  availableNotes: Notes,
): Notes | undefined => {
  if (amount == 0) return undefined;
  let getRecursively = (amount: number, notesLeft) => {
    if (amount == 0) return {};
    let current = notesLeft[0];
    let count = Math.min(availableNotes[current], Math.floor(amount / current));
    for (let i = count; i >= 0; i--) {
      let result = getRecursively(amount - i * current, notesLeft.slice(1));
      if (result) return i ? { [current]: i, ...result } : result;
    }
  };
  return getRecursively(
    amount,
    Object.keys(availableNotes)
      .map(Number)
      .sort((a, b) => b - a),
  );
};

// count of nominals in ATM
let notes1: Notes = { 2000: 5, 5000: 2, 10000: 2, 20000: 200 };
//subtractNotes(notes1, { 2000: 1, 5000: 8, 10000: 2 });
console.log(getBankNotes(1000, notes1)); // {1000: 1}
console.log(getBankNotes(230, notes1)); // {30: 1, 100: 2}
console.log(getBankNotes(200, notes1)); // {100: 2}
console.log(getBankNotes(150, notes1)); // {50: 1, 100: 1}
console.log(getBankNotes(120, notes1)); // {30: 4}
console.log(getBankNotes(150000, notes1)); // {30: 4}
