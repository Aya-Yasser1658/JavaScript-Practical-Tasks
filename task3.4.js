function filterArray(arr, callback) {
    return arr.filter(callback);
}
function isEven(num) {
    return num % 2 === 0;
}
function hasMoreThanThreeChars(str) {
    return str.length > 3;
}
const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = filterArray(numbers, isEven);
console.log(filteredNumbers); 

const strings = ['apple', 'kiwi', 'banana', 'grape'];
const filteredStrings = filterArray(strings, hasMoreThanThreeChars);
console.log(filteredStrings); 