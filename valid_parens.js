/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let brackets = {
    first: {
      '(': ')', '[': ']', '{': '}'
    },
    last: {
      ')': '(', ']': '[', '}': '{'
    }
  };

  for (let i=0; i<s.length; i=i+2){
    if (!brackets.first[s[i]]) return false;
    if (s[i+1] !== brackets.first[s[i]]) return false;
  }

  return true;
};

let result = isValid("()");
console.log(result);

result = isValid("(]");
console.log(result);

// Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


//   Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.