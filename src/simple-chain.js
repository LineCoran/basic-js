const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;    
  },
  removeLink(position) {
    if (this.chain[position] === undefined){ 
      this.chain = [];
      throw new NotImplementedError("You can\'t remove incorrect link!");
    } else {
      this.chain.splice(position-1, 1);
      
    }
    return this;

   

  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i++) {
      result +=`~~( ${this.chain[i]} )`
    }
    this.chain = []
    return result;
  }
};

module.exports = {
  chainMaker
};
