const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  

  
  if(!date) {
    return 'Unable to determine the time of year!'
  }

  if(date.getDate != Date.prototype.getDate || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  

  let month = date.getMonth();

  let result;

  if (month === 11 || month === 0 || month === 1) {
    result = 'winter'
  } else if (month === 2 || month === 3 || month === 4){
    result = 'spring'
  } else if (month === 5 || month === 6 || month === 7) {
    result = 'summer';
  } else  {
    result = 'autumn'
  }
  return result
}

module.exports = {
  getSeason
};
