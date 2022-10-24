
var longestPrefix = function(strings) {
  let prefixCounts = {};

  for (let i=0; i<strings.length; i++){ 
    for (let k=1; k<strings[i].length - 1; k++){ //defining a prefix as not including the last char
      const slice = strings[i].slice(0,k+1);
      if (prefixCounts[slice]) {
        prefixCounts[slice] += 1;
      } else {
        prefixCounts[slice] = 1;
      }
    }
  }

  return returnLongest(prefixCounts);
};

var returnLongest = function(object) {
  let longest = "";
  const keys = Object.keys(object);

  for (let i=0; i<keys.length; i++){
    if (object[keys[i]] > 1 && object[keys[i]] > longest.length) longest = keys[i];
  }

  return longest;
}

let result = longestPrefix(["flower", "flow", "flight"]);
console.log(result);

result = longestPrefix(["dog", "racecar", "car"]);
console.log(result);

//iterate through strings
//  count all of the prefix that a given word can generate (entire length of string)
//    perhaps could include all but last char
//  

// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



//   Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


//   Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower -case English letters.