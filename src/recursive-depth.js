const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(value) {
    if (Array.isArray(value)) {
      return 1 + value.reduce((result, item) => Math.max(result, this.calculateDepth(item)), 0);
    } else  {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
