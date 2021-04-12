/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = String(n);
  let part;

  while (result.length > 1) {
    part = 0;
    for (let i = 0; i < result.length; i++) {
      part += Number(result[i]);
    }
    result = String(part);
  }

  return Number(result);
}

module.exports = getSumOfDigits;
