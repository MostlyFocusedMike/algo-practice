/**
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
