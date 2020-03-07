const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let pivot = Math.floor(left + ((right - left) / 2));

        if (nums[pivot] === target) {
            return pivot;
        } else if (target > nums[pivot]) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return -1;
};

console.log(search([-1,0,1,2,3,4,5],8))

