/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesweeperArr = matrix;
  let quantity;

  for (let i = 0; i < minesweeperArr.length; i++) {
    for (let j = 0; j < minesweeperArr[i].length; j++) {
      if (minesweeperArr[i][j] === true) minesweeperArr[i][j] = -1;
      else minesweeperArr[i][j] = 0;
    }
  }

  for (let i = 0; i < minesweeperArr.length; i++) {
    for (let j = 0; j < minesweeperArr[i].length; j++) {
      quantity = 0;
      if (minesweeperArr[i][j] !== -1) {
        if (i > 0) {
          if (minesweeperArr[i - 1][j] === -1) quantity++;
        }
        if (i > 0 && j > 0) {
          if (minesweeperArr[i - 1][j - 1] === -1) quantity++;
        }
        if (i > 0 && j < minesweeperArr[i].length - 1) {
          if (minesweeperArr[i - 1][j + 1] === -1) quantity++;
        }
        if (j > 0) {
          if (minesweeperArr[i][j - 1] === -1) quantity++;
        }
        if (j < minesweeperArr[i].length - 1) {
          if (minesweeperArr[i][j + 1] === -1) quantity++;
        }
        if (i < minesweeperArr.length - 1 && j > 0) {
          if (minesweeperArr[i + 1][j - 1] === -1) quantity++;
        }
        if (i < minesweeperArr.length - 1) {
          if (minesweeperArr[i + 1][j] === -1) quantity++;
        }
        if (i < minesweeperArr.length - 1 && j < minesweeperArr[i].length - 1) {
          if (minesweeperArr[i + 1][j + 1] === -1) quantity++;
        }

        minesweeperArr[i][j] = quantity;
      }
    }
  }

  for (let i = 0; i < minesweeperArr.length; i++) {
    for (let j = 0; j < minesweeperArr[i].length; j++) {
      if (minesweeperArr[i][j] === -1) minesweeperArr[i][j] = 1;
    }
  }

  return minesweeperArr;
}

module.exports = minesweeper;
