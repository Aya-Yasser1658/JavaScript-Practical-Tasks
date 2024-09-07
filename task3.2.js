function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function findPrimesInRange(start, end) {
    const primes = [];
    
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    
    return primes;
}

// Example usage:
const start = 10;
const end = 50;
console.log(findPrimesInRange(start, end)); // Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
