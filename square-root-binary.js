const mySqrt = (target) => {
    let left = 0;
    let right = target;
    if (target < 2) return target;
    while (left <= right) {
        pivot = Math.floor((right + left) / 2)
        console.log('pivot: ', pivot);
        if (pivot ** 2 <= target) {
            console.log('pivot less: ', pivot);
            left = pivot + 1
        } else {
            console.log('pivot more: ', pivot);
            right = pivot - 1;
        }
    }
    return left - 1;
};

console.log(mySqrt(6))