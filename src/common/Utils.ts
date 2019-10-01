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
