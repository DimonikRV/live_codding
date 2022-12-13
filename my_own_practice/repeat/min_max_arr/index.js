'use strict';

function checker(arr) {
  if (!Array.isArray) {
    return null;
  }
  const minNum = arr.reduce((num, el, index, arr) => Math.min(...arr));
  const maxNum = arr.reduce((num, el, index, arr) => Math.max(...arr));
  return minNum + maxNum;
}

console.log(checker([122, -200, 1, 2, -3, 4, 5, 6, -7, 8, 9, -9]));
