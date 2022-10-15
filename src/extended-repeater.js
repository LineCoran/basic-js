const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, op) {

  mySeparator = (!op.separator)?"+":op.separator;
  function addition(val) {
    let add = val.addition;
    let mySeparatorTwo = (!val.additionSeparator)?"|":val.additionSeparator;
    for (let i = 1; i < val.additionRepeatTimes; i++) {
      add += (mySeparatorTwo+val.addition);
    }
    if (add == undefined) return ""
    return add;
  }

  let result = str;

  for (let i = 1; i < op.repeatTimes; i++) {
    result += (addition(op) + mySeparator+str);
  }

  return result+addition(op);
}

module.exports = {
  repeater
};
