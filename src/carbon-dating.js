const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(i) {
  if ( i === null || typeof(i) !== 'string' || i === 'number' || Number(i) == 0 || Number(i) > 15 || Number(i) < 0) {
    return false;
  } else if (isNaN(i)) {
    
    return false 
  } 
else {
    const LOG = 0.693;
    let k = LOG/HALF_LIFE_PERIOD;
    return Math.ceil((Math.log(MODERN_ACTIVITY/i))/k);
  }
}
module.exports = {
  dateSample
};
