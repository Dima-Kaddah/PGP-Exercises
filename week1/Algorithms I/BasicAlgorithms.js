// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
//1
function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}
console.log(convertToF(-30));
console.log(convertToF(-10));
console.log(convertToF(0));
console.log(convertToF(20));
console.log(convertToF(30));

// Reverse the provided string.
// You may need to turn the string into an array(split) before you can reverse it(reverse).
// Your result must be a string(join).
//2
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
//3
function factorialize(num) {
  let result = 1;
  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));

// Return the length of the longest word in the provided sentence.
// Your response should be a number.
//4
function findLongestWordLength(str) {
  const toArray = str.split(' ');
  const sortArr = toArray.sort((strA, strB) => { return strB.length - strA.length; });
  return sortArr[0].length;
};
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
//5
function largestOfFour(arr) {
  arr.forEach(oneArr => oneArr.sort((a, b) => b - a));
  arr.forEach((oneArr) => oneArr.splice(1, 3));
  arr.reduce((arr1, arr2) => {
    return arr1.concat(arr2);
  });
  return arr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//another way
function largestOfFour2(arr) {
  let arrAnswer = [];
  arr.forEach(oneArr => arrAnswer.push(Math.max.apply(null, oneArr)));
  return arrAnswer;
}
console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
//6
function confirmEnding(str, target) {
  return target === str.slice(- Math.abs(target.length));
}

console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));

function confirmEnding2(str, target) {
  return str.substr(-target.length) === target;
}
console.log(confirmEnding2("Congratulation", "on"));
console.log(confirmEnding2("Bastian", "n"));
console.log(confirmEnding2("Connor", "n"));
console.log(confirmEnding2("He has to give me a new name", "name"));