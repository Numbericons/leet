//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var twoSums = function(nums, num) {
  var numIdxs = {};
  var seen = {};
  var pairsSeen = {};
  var pairs = [];

  nums.forEach((num,i) => {
    if (!numIdxs[num]) {
      numIdxs[num] = { idxs: [i] } 
    } else {
      numIdxs[num].idxs.push(i);
    }
  })

  for (var i=0; i<nums.length; i++){
    if (seen[nums[i]]) continue;
    seen[nums[i]] = true;

    const isZero = nums[i] === 0;
    const missingLink = isZero ? 0 - num : -nums[i] - num;
    // num is 5, num[i] is 3 => -3 - 5  => -8

    let found = numIdxs[missingLink];
    let valid;

    if (found) {
      for (let k=0; k<found.idxs.length; k++){
        if (found.idxs[k] > i) {
          valid = true;
          break;
        }
      }
    }

    if (valid) {
      if (isZero) {
        if (num === 0 && found.idxs.length > 1) pairs.push([0,0])
        continue;
      }

      var pair = [nums[i], missingLink];
      pairsSeen[pair] = true;
      pairs.push(pair);
    }
  }

  return pairs;
};

var threeSum = function (nums) {
  var tripletArr = [];
  var seenNums = {};
  var seenTriplets = {};

  for (var i=0; i<nums.length; i++){
    if (seenNums[nums[i]]) continue;
    seenNums[nums[i]] = true;

    var arrCopy = copyRestOfArray(nums, i);

    var pairs = twoSums(arrCopy, nums[i]);
    // const uniquePairs = uniqPairs(pairs);

    const triplets = makeTriplets(pairs, nums[i]);

    for (let k=0; k<triplets.length; k++){
      const keyArr = [triplets[k][0], triplets[k][1], triplets[k][2]];
      const key = `${keyArr[0]}${keyArr[1]}${keyArr[2]}`;

      if (!seenTriplets[key]) {
        seenTriplets[key] = true;
        seenTriplets[`${keyArr[0]}${keyArr[2]}${keyArr[1]}`] = true;
        seenTriplets[`${keyArr[1]}${keyArr[0]}${keyArr[2]}`] = true;
        seenTriplets[`${keyArr[1]}${keyArr[2]}${keyArr[0]}`] = true;
        seenTriplets[`${keyArr[2]}${keyArr[0]}${keyArr[1]}`] = true;
        seenTriplets[`${keyArr[2]}${keyArr[1]}${keyArr[0]}`] = true;

        tripletArr.push(triplets[k]);
      }
    }
  }

  return tripletArr;
};

var copyRestOfArray = function (nums, currIdx) {
  var retArr = [];

  for (var k=0; k<nums.length; k++){
    if (k === currIdx) continue;
    retArr.push(nums[k]);
  }

  return retArr;
}

var sameElements = function (arr1, arr2) {
  if (!arr1 && !arr2 || arr1.length !== arr2.length) return false;

  for (var k=0; k<arr1.length; k++){
    if (!arr2.includes(arr1[k])) return false;
  }

  return true;
}

var makeTriplets = function (pairs, thirdEle) {
  for (var k=0; k<pairs.length; k++){
    pairs[k].unshift(thirdEle);
  }

  return pairs;
}

// note 10/19: to do, make function not look for pairs backwards
//   idx has to be greater than current idx from found idxs

//iterate array
//  determine rest of array
//    use function to determine if rest of array has 2 elements w/ sum of 0
//    

var result1 = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result1);

var result2 = threeSum([]);
console.log(result2);

var result3 = threeSum([0]);
console.log(result3);

// var result1 = twoSums([-1, 0, 1, 2, -1, -4], 2);
// console.log(result1);

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