const numberOfSteps = (num) => {
    let steps = 0;
    while (num > 0) {
        num = !(num % 2) ? num / 2 : num - 1;
        steps++;
    }
    return steps;
};


console.log(numberOfSteps(0) === 0, numberOfSteps(0))
console.log(numberOfSteps(14) === 6, numberOfSteps(14))
console.log(numberOfSteps(8) === 4, numberOfSteps(8))
console.log(numberOfSteps(123) === 12, numberOfSteps(123))