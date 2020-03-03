const algoPractice = (string) => {
    if (string === '') return true;
    const pairs = { '{': '}', '(': ')', '[': ']' };
    const checkChar = [string[0]];
    const last = () => checkChar[checkChar.length - 1];

    for (let i = 1; i < string.length; i++) {
        const char = string[i];
        if (pairs[last()] === char) {
            // current char is the close of the latest check char
            checkChar.pop();
        } else if (pairs[char]) {
            // we have started another set of pairs
            checkChar.push(char)
        } else if (!pairs[last]) {
            // we have found a closing bracket out of place
            return false
        }
    }
    if (checkChar.length) return false
    return true
}

console.log(algoPractice('[]'));
console.log(algoPractice('[['));
console.log(algoPractice(']['));
console.log(algoPractice('[]{[]'));
console.log(algoPractice('['));
console.log(algoPractice('[{}{}][({})([[]])]'));
console.log(algoPractice('[{}{}][({})([[])]'));