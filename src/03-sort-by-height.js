/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [];
  let resultArr = [];
  let i = 0;

  sortArr = arr.filter((item) => item !== -1);
  sortArr.sort((a, b) => Number(a) - Number(b));

  resultArr = arr.map((item, index) => {
    if (item === -1) {
      i++;
      return item;
    }
    return sortArr[index - i];
  });

  return resultArr;
}

module.exports = sortByHeight;
