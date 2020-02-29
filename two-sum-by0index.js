/**
 * Brute force guessing
 * Time complexity : O(n^2).
 * For each element, we try to find its complement by looping through the rest of array which takes O(n) time.
 *  Therefore, the time complexity is O(n^2).
 * Space complexity : O(1).
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const firstIdx = nums[i] ;
        for (let j = i+1; j < nums.length; j++) {
            const secondIdx = nums[j]
            if (firstIdx + secondIdx === target) return [i, j]
        }
    }
};

// Time complexity : O(n). We traverse the list containing n elements exactly twice.
// Since the hash table reduces the look up time to O(1), the time complexity is O(n).

// Space complexity : O(n). The extra space required depends on the number of
// items stored in the hash table, which stores exactly n elements.
/**
 * two take hashmap
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const checkVal = target - currentValue
        if (hashMap[checkVal]) return [i, hashMap[checkVal]]
    }
    return [];
};


// Time complexity : O(n). We traverse the list containing n elements only once.
// Each look up in the table costs only O(1) time.

// Space complexity : O(n). The extra space required depends on the number of
// items stored in the hash table, which stores at most nn elements.

/**
 * one take hashmap
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
const twoSum = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const checkVal = target - currentValue
        if (hashMap[checkVal] >= 0) return [i, hashMap[checkVal]]
        hashMap[nums[i]] = i;
    }
    return [];
};
