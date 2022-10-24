/**
 * @param {number} num
 * @return {string}
 */

//First thought - take num and get the remainder and quotient
//  Start w/ largest possible roman value and move down
//    if quotient is 0, try process with n - 1
//      unless n < 4
//  Perhaps return the string and a recursive call with the remainder

const posNegs = { I: 'VX', X: 'LC', C: 'DM' };

const sValues = {
  I: { val: 1, small: "I" }, V: { val: 5, small: "I" }, X: { val: 10, small: "I" }, L: { val: 50, small: "X" },
  C: { val: 100, small: "X" }, D: { val: 500, small: "C" }, M: { val: 1000, small: "C" }
};

var intToRoman = function (num, stop) {
  let keys = Object.keys(sValues).reverse();
  let romanStr = '';
  
  while (num > 0 && keys.length) {
    const value = sValues[keys[0]].val;
    const smallVal = sValues[sValues[keys[0]].small].val;
    let quotient = Math.floor(num / value);
    
    if (keys[0] === stop) debugger;
    
    if (quotient >= 1 && (quotient < 4 || keys[0] === 'M')) {
      let maxChars = quotient <= 3 || keys[0] === 'M' ? quotient : 3; //Problem assumption M is max char and all chars can only be repeated thrice
      
      for (let k = 0; k < maxChars; k++) { romanStr += keys[0] }
      
      num = num % value;
    } else if ((num + smallVal) / value >= 1) { //check if the number is within a small increment of the key value
      romanStr = romanStr + sValues[keys[0]].small + keys[0];

      num = (num + smallVal) % value;
    }

    let withinSmall = (num + smallVal) / value >= 1;
    if (!withinSmall) keys.shift();
  }

  return romanStr;
};

const testCases = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 29, 30, 31, 35, 36, 40, 45, 50, 100, 191, 200, 300, 400, 500, 
  600, 700, 800, 900, 999, 1000, 1001, 1994, 7575
];

testCases.forEach(num => {
  const stop = num === 'NA' ? 'X' : null;
  const result = intToRoman(num, stop);
  console.log(`'intToRoman' called with number ${num}: ${result}`);
})