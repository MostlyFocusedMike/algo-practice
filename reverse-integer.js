/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const isNegative = x * -1 === Math.abs(x)
    const flippedNumString = String(Math.abs(x)).split('').reverse().join('')
    return isNegative ? -1 * parseInt(flippedNumString) : 1 * flippedNumString
};

console.log(reverse(123) === 321)
console.log(reverse(-123) === -321)
console.log(reverse(210) === 12)