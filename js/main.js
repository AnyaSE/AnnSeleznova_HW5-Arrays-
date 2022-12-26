
console.group('Знайти суму та кількість позитивних елементів.');

const numbersArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumOfPositive = 0; 
let k = 1;
let numberOfPositive = 0;

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
        const number = numbersArray[i];
        sumOfPositive = number + sumOfPositive; 
        numberOfPositive = k++;
    }
};

console.log(`The sum of positive numbers is ${sumOfPositive}`);
console.log(`The number of positive numbers is ${numberOfPositive}`);

console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер.');

let lowestNumber = numbersArray[0];

for (let a = 1; a < numbersArray.length; a++) {
    if (lowestNumber > numbersArray[a]) {
        const testNumber = numbersArray[a];
        lowestNumber = testNumber;
    }
};

console.log(`The lowest number in the array is ${lowestNumber}`);

console.log(`The index of the lowest number is ${numbersArray.indexOf(lowestNumber)}`);

console.groupEnd();

console.group('Знайти максимальний елемент масиву та його порядковий номер.');

let highestNumber = numbersArray[0];

for (let b = 1; b < numbersArray.length; b++) {
    if (highestNumber < numbersArray[b]) {
        const desiredNumber = numbersArray[b];
        highestNumber = desiredNumber;
    }
};

console.log(`The highest number in the array is ${highestNumber}`);

console.log(`The index of the highest number is ${numbersArray.indexOf(highestNumber)}`);

console.groupEnd();

console.group('Визначити кількість негативних елементів.');

let p = 1;
let numberOfNegative = 0;

for (let c = 0; c < numbersArray.length; c++) {
    if (numbersArray[c] < 0) {
        const number = numbersArray[c];
        numberOfNegative = p++;
    }
};

console.log(`Number of negative numbers is ${numberOfNegative}`);

console.groupEnd();

console.group('Знайти добуток позитивних елементів.');

let multiplicationOfPositive = 1; 

for (let q = 0; q < numbersArray.length; q++) {
    if (numbersArray[q] > 0) {
        const number = numbersArray[q];
        multiplicationOfPositive = number*multiplicationOfPositive; 
    }
};

console.log(`The multiplication of positive numbers is ${multiplicationOfPositive}`);

console.groupEnd();