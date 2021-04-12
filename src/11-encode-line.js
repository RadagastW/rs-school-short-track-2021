/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  const result = [];
  let prev = '';
  let i = 0;

  arrStr.forEach((item) => {
    if (i === 0) {
      prev = item;
      i++;
    } else if (prev === item) {
      i++;
    } else {
      if (i !== 1) result.push(i + prev); else result.push(prev);
      prev = item;
      i = 1;
    }
  });
  if (i > 1) result.push(i + prev); else result.push(prev);

  return result.join('');
}

module.exports = encodeLine;
