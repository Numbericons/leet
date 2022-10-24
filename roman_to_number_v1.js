/**
 * @param {string} s
 * @return {number}
 */

//setup total, iterate through string s
//If 'I' before 'V' or 'X'
//  or 'X' before 'L' or 'C'
//  or 'C' before 'D' or 'M'
//subtract the first chars values from total

// if higher value exists in the future of the string
//   value is negative
//     recursive mechanism?


var romanToInt = function (s) {
  let total = 0;
  const posNegs = { I: ['V', 'X'], X: ['L', 'C'], C: ['D', 'M'] };

  const sValues = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  for (let i = 0; i < s.length; i++) {
    const val = sValues[s[i]];
    const negVal = Object.keys(posNegs).includes(s[i]) &&
      (posNegs[s[i]][0] === (s[i + 1]) || posNegs[s[i]][1] === (s[i + 1])); //the current char is negative when the next char is one of 2 values
    total = negVal ? total - val : total + val;
  }

  return total;
};

console.log('Here comes 1!')
const result1 = romanToInt('I');
console.log(result1);

console.log('Here comes 2!')
const result2 = romanToInt('II');
console.log(result2);

console.log('Here comes 3!')
const result3 = romanToInt('III');
console.log(result3);

console.log('Here comes 4!')
const result4 = romanToInt('IV');
console.log(result4);

console.log('Here comes 5!')
const result5 = romanToInt('V');
console.log(result5);

console.log('Here comes 6!')
const result6 = romanToInt('VI');
console.log(result6);

console.log('Here comes 9!')
const result9 = romanToInt('IX');
console.log(result9);