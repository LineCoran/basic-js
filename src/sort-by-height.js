const { NotImplementedError } = require('../extensions/index.js');

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
 let arrWithOut = [];
 let result = [... arr];

 for (let i = 0; i < result.length; i++) {
  if (result[i] !== -1) {
    result[i] = null
  }
 }
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== -1){
    arrWithOut.push(arr[i])
  }
 }

 arrWithOut.sort((a, b) => (a - b));


 for (let i = 0; i < arrWithOut.length; i++) {
  for (let j = 0; j<result.length; j++) {
    if (result[j] === null) {
      result[j] = arrWithOut[i];
      break;
    }
  }
 }

 return result;
}

module.exports = {
  sortByHeight
};
