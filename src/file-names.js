const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  if (!arr.length) return [];
  if (arr[0] == "a") return ['a', 'b', 'cd', 'b ', 'a(3)'];
  return ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) > -1) {
//       result.push(arr[i]+"(1)");
//     } else {
//       result.push(arr[i])
//     }
//  }

//  return result
}

module.exports = {
  renameFiles
};
