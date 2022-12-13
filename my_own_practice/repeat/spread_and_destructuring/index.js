'use strict';

const first = require('eslint-plugin-import/lib/rules/first');

/**
 * @param {number[]} numbers
 * @return {number[]}
 */

function swap(numbers) {
  const [firstEL, ...rest] = numbers; // put your code here
  return rest.concat(firstEL);
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const arr = [];
  for (let index = 1; index < numbers.length; index += 1) {
    arr.push(numbers[index]);
  }
  const firstNum = numbers.slice().shift();
  return arr.concat(firstNum);
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
