const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed valueay based on the control sequences that original
 * valueay contains
 * 
 * @param {valueay} value initial valueay
 * @returns {valueay} transformed valueay
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(value) {
  let result = [];
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === '--double-prev') {
        if(i !== value.length - 1 && i !== 0){
          if(value[i-2] !== '--discard-next'){
            result.push(value[i-1]);
          }
        }
      }
     else if (value[i] === '--double-next') {
        if(i !== value.length-1 && i !== 0 ){
          result.push(value[i + 1]);
        }
      }
      else if (value[i] === '--discard-prev') {
        if(i !== value.length-1 && i !== 0){
          if(value[i-2] !== '--discard-next'){
            result.pop();
          }
        }
      } 
      else {
        if (value[i] !== '--discard-next' && value[i-1] !== '--discard-next') {
          result.push(value[i]);
        }
      }  
  }
} else {
  throw new NotImplementedError('Not implemented');
  }

  return result;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
