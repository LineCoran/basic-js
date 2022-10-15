const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (!array) return false
  let result = "";
  for (let i = 0; i < array.length; i++){
    if (typeof (array[i]) === 'string') {
      array[i] = array[i].trim().toUpperCase();
      result = result + array[i][0];
    }
  }
  return result.split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
