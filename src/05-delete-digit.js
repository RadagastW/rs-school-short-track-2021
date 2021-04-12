/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = String(n);
  const arrN = [];
  let partN;

  for (let i = 0; i < strN.length; i++) {
    partN = '';
    for (let j = 0; j < strN.length; j++) {
      if (j !== i) partN += strN[j];
    }
    arrN.push(Number(partN));
  }

  return Math.max.apply(null, arrN);
}

module.exports = deleteDigit;
