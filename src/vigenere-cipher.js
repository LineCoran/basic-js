const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  reverse = true

  constructor(orientation = true) {
    this.reverse = orientation
  }

  encrypt(word, key) {
    if(!word||!key||typeof word!='string'|| typeof key != 'string'|| word.length==0 || key.length==0){
      throw new Error('Incorrect arguments!')
    };
    key = key.toUpperCase();
    let theForwardName = 0;
    let res = word.toUpperCase().split('').map((ch) => {
      if (ch.charCodeAt(0) < 65 || ch.charCodeAt(0) > 90) return ch;
      theForwardName++;
      let mySymbolNumber = ch.charCodeAt(0) - 65;
      let numberOfKey = key[(theForwardName-1)%key.length].charCodeAt(0) - 65;
      let newCodeOfChar = (mySymbolNumber + numberOfKey) % 26;
      return String.fromCharCode( newCodeOfChar + 65 );
    }).join('');
    return  (this.reverse) ? res
      :res.
      split('').
      reverse().
      join('');
  }




  decrypt(word, key) {
    
    if(!word||!key||typeof word!='string'|| typeof key != 'string'|| word.length==0 || key.length==0){
      throw new Error('Incorrect arguments!')
    }
    key = key.toUpperCase();
    let theForwardName = 0;
    let res =  word.toUpperCase().split('').map((ch) => {
      if (ch.charCodeAt(0) < 65 || ch.charCodeAt(0) > 90) return ch
      theForwardName++;
      let mySymbolNumber = ch.charCodeAt(0)-65; 
      let numberOfKey = key[(theForwardName-1)%key.length].charCodeAt(0)-65;
      let newCodeOfChar = (mySymbolNumber-numberOfKey) ;
      newCodeOfChar = (newCodeOfChar<0)?
      newCodeOfChar+26:
      newCodeOfChar;
      newCodeOfChar = newCodeOfChar%26;
      return String.fromCharCode(newCodeOfChar+65)
    }).join('')
    return (this.reverse) 
    ? res 
    : res.split('')
        .reverse()
        .join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};


const app = new function() {
	
	/* 
	 * Handles the HTML input/output for Vigenère cipher encryption/decription.
	 * This is the one and only entry point function called from the HTML code.
	 */
	this.doCrypt = function(isDecrypt) {
		const keyStr = document.getElementById("key").value;
		if (keyStr.length == 0) {
			alert("Key is empty");
			return;
		}
		
		let keyArray = filterKey(keyStr);
		if (keyArray.length == 0) {
			alert("Key has no letters");
			return;
		}
		
		if (isDecrypt) {
			for (let i = 0; i < keyArray.length; i++)
				keyArray[i] = (26 - keyArray[i]) % 26;
		}
		
		let textElem = document.getElementById("text");
		textElem.value = crypt(textElem.value, keyArray);
	};
	
	
	/* 
	 * Returns the result the Vigenère encryption on the given text with the given key.
	 */
	function crypt(input, key) {
		let output = "";
		let j = 0;
		for (const ch of input) {
			const cc = ch.codePointAt(0);
			if (isUppercase(cc)) {
				output += String.fromCodePoint((cc - 65 + key[j % key.length]) % 26 + 65);
				j++;
			} else if (isLowercase(cc)) {
				output += String.fromCodePoint((cc - 97 + key[j % key.length]) % 26 + 97);
				j++;
			} else {
				output += ch;
			}
		}
		return output;
	}
	
	
	/* 
	 * Returns an array of numbers, each in the range [0, 26), representing the given key.
	 * The key is case-insensitive, and non-letters are ignored.
	 * Examples:
	 * - filterKey("AAA") = [0, 0, 0].
	 * - filterKey("abc") = [0, 1, 2].
	 * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
	 */
	function filterKey(key) {
		let result = [];
		for (const ch of key) {
			const cc = ch.codePointAt(0);
			if (isLetter(cc))
				result.push((cc - 65) % 32);
		}
		return result;
	}
	
	
	// Tests whether the given character code is a Latin letter.
	function isLetter(c) {
		return isUppercase(c) || isLowercase(c);
	}
	
	// Tests whether the given character code is an Latin uppercase letter.
	function isUppercase(c) {
		return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
	}
	
	// Tests whether the given character code is a Latin lowercase letter.
	function isLowercase(c) {
		return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
	}
	
};