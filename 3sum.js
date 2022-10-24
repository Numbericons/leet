//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var twoSums = function(nums, num) {
  let numIdxs = {};
  let seen = {};
  let pairsSeen = {};
  let pairs = [];

  nums.forEach((num,i) => {
    if (!numIdxs[num]) {
      numIdxs[num] = { idxs: [i] } 
    } else {
      numIdxs[num].idxs.push(i);
    }
  })

  for (let i=0; i<nums.length; i++){
    if (seen[nums[i]]) continue;
    seen[nums[i]] = true;

    const soulmate = -nums[i];

    // const isZero = nums[i] === 0;
    // const soulmate = isZero ? 0 - num : -nums[i] - num;

    const found = numIdxs[soulmate];

    // if (!isZero) {
      if (found) {
        let pair = [nums[i], soulmate];
        pairsSeen[pair] = true;
        pairs.push(pair);
      }
    // } else {
    //   if (found.idxs.length > 1) {
    //     pairs.push([0, 0]);
    //   }
    // }
  }

  return pairs;
};

var threeSum = function (nums) {
  let numIdxs = {};
  let seen = {};

  for (let i=0; i<nums.length; i++){
    rest 
    if (seen[nums[i]]) continue;
    seen[nums[i]] = true;

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

//iterate array
//  determine rest of array
//    use function to determine if rest of array has 2 elements w/ sum of 0
//    

var result1 = twoSums([-1, 0, 1, 2, -1, -4], 2);
console.log(result1);

// Medium  

// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



//   Example 1:

// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
//   - 105 <= nums[i] <= 105   (10 the 5) 