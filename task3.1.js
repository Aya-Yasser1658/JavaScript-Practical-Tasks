function findMostFrequentNumbers(arr) {
    const frequencyMap = new Map();
    
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    const maxFrequency = Math.max(...frequencyMap.values());
    const mostFrequentNumbers = Array.from(frequencyMap.entries())
        .filter(([num, freq]) => freq === maxFrequency)
        .map(([num]) => num);

    return mostFrequentNumbers;
}
const numbers = [1, 2, 2, 3, 3, 3, 4, 7, 9, 7, 5, 4, 4, 4,5];
console.log(findMostFrequentNumbers(numbers)); 
