/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numIdxs = {};

  nums.forEach((num,i) => {
    if (!numIdxs[num]) {
      numIdxs[num] = { idxs: [i] } 
    } else {
      numIdxs[num].idxs.push(i);
    }
  })

  for (let i=0; i<nums.length; i++){
    const soulmate = target - nums[i];
    const selfLove = soulmate === nums[i];
    const found = numIdxs[soulmate];

    if (!selfLove) {
      if (found) return [i, found.idxs[0]];
    } else if (found) {
      if (found.idxs.length > 1) return [i, found.idxs[1]];
    }
  }
};

var result1 = twoSum([2, 7, 11, 15], 9);
console.log(result1);
var result2 = twoSum([3, 2, 4], 6);
console.log(result2);
var result3 = twoSum([3, 3], 6);
console.log(result3);

//plan 1: iterate nums, check if current num + a future num returns target

//plan 2: create map of included numbers
//  iterate numbers
//    check if 'partner' number in table to equal target

// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//   Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]


// Constraints:

// 2 <= nums.length <= 104
//   - 109 <= nums[i] <= 109
//   - 109 <= target <= 109
// Only one valid answer exists.


  // Follow - up: Can you come up with an algorithm that is less than O(n2) time complexity ?