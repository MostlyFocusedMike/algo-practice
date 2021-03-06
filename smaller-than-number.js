const smallerNumbersThanCurrentOriginal = (nums) => {
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) count += 1;
        }
        results.push(count);
    }
    return results;
};

const smallerNumbersThanCurrent = (nums) => {
    const sortedNums = [...nums].sort((a,b) => b - a);
    const orders = {};
    for (let i = 0; i < sortedNums.length; i++) {
        orders[sortedNums[i]] = sortedNums.length - i - 1;
    }

    const finalNums = []
    for (let i = 0; i < nums.length; i++) {
        finalNums.push(orders[nums[i]])
    }
    return finalNums;
};

console.log((smallerNumbersThanCurrent([9,10,11,12])))  //[4,0,1,1,3]
console.log((smallerNumbersThanCurrent([8,1,2,2,3])))  //[4,0,1,1,3]
console.log((smallerNumbersThanCurrent([6,5,4,8])))  //[2,1,0,3]
console.log((smallerNumbersThanCurrent([7,7,7,7])))  //[2,1,0,3]