/**
 * @param {string} s
 * @return {number}
 */
//set total, iterate through string
//If 'I' before 'V' or 'X'
//  or 'X' before 'L' or 'C'
//  or 'C' before 'D' or 'M'
//subtract the first chars values from total


var romanToInt = function (s) {
  let total = 0;
  const posNegs = { I: ['V', 'X'], X: ['L', 'C'], C: ['D', 'M'] };

  const sValues = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  for (let i = 0; i < s.length; i++) {
    const val = sValues[s[i]];
    const negVal = Object.keys(posNegs).includes(s[i]) && posNegs[s[i]].includes(s[i + 1]);
    total = negVal ? total - val : total + val;
  }

  return total;
};