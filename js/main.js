
console.group('Знайти суму та кількість позитивних елементів.');

const numbersArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

sumOfPositive = 0; 
let k = 0;
let numberOfPositive = 0;

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
        const number = numbersArray[i];
        sumOfPositive = number + sumOfPositive; 
        numberOfPositive = k++;
    }
};

console.log(`sum of positive numbers is ${sumOfPositive}`);
console.log(`number of positive numbers is ${numberOfPositive}`);

console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер.');

let lowestNumber = numbersArray[0];

for (let a = 0; a < numbersArray.length; a++) {
    if (lowestNumber > numbersArray[a]) {
        const testNumber = numbersArray[a];
        lowestNumber = testNumber;
    } else if (lowestNumber > numbersArray[a]) {
        lowestNumber = numbersArray[a++];        
    } else if (lowestNumber === numbersArray[a])
    lowestNumber = lowestNumber;
};

console.log(`The lowest number in the array is ${lowestNumber}`);

console.log(`The index of the lowest number is ${numbersArray.indexOf(lowestNumber)}`);

console.groupEnd();

console.group('Знайти максимальний елемент масиву та його порядковий номер.');

let highestNumber = numbersArray[0];

for (let b = 0; b < numbersArray.length; b++) {
    if (highestNumber < numbersArray[b]) {
        const desiredNumber = numbersArray[b];
        highestNumber = desiredNumber;
    } else if (highestNumber < numbersArray[b]) {
        highestNumber = numbersArray[b++];        
    } else if (highestNumber === numbersArray[b])
    highestNumber = highestNumber;
};

console.log(`The highest number in the array is ${highestNumber}`);

console.log(`The index of the highest number is ${numbersArray.indexOf(highestNumber)}`);

console.groupEnd();

