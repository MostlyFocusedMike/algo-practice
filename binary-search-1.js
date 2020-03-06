/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const sortedNums = [...nums].sort((a,b) => a - b)
    let left = 0;
    let right = sortedNums.length - 1;

    while (left <= right) {
        let pivot = Math.floor(left + ((right - left) / 2));

        if (sortedNums[pivot] === target) {
            return pivot;
        } else if (target > sortedNums[pivot]) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return -1;
};

console.log(search([1,21, 14, 9, 13, 3],1))