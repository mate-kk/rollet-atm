import { Notes } from '../store';

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
export const numberWithCommas = (n: number, sep: string = ' '): string => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
};

export const getBankNotes = (amount: number, availableNotes: any): any => {
  return getMoney(1000, limits);
};

let getMoney = (amount, limits) => {
  let recur = (amount, nominals) => {
    if (amount == 0) return {}; // success
    if (!nominals.length) return; // failure
    let nominal = nominals[0];
    let count = Math.min(limits[nominal], Math.floor(amount / nominal));
    for (let i = count; i >= 0; i--) {
      let result = recur(amount - i * nominal, nominals.slice(1));
      if (result) return i ? { [nominal]: i, ...result } : result;
    }
  };
  return recur(
    amount,
    Object.keys(limits)
      .map(Number)
      .sort((a, b) => b - a),
  );
};

// count of nominals in ATM
let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.log(getMoney(1000, limits)); // {1000: 1}
console.log(getMoney(230, limits)); // {30: 1, 100: 2}
console.log(getMoney(200, limits)); // {100: 2}
console.log(getMoney(150, limits)); // {50: 1, 100: 1}
console.log(getMoney(120, limits)); // {30: 4}
