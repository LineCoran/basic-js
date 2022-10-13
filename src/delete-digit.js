const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = String(n);
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    let newNumber = arr.replace(arr[i], "");
    numbers.push(Number(newNumber));
  }

  return Math.max.apply(null, numbers);
}

module.exports = {
  deleteDigit
};
