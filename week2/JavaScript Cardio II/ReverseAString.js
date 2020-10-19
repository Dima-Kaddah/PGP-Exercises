// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  //1 SOLUTION
  // return str.split('').reverse().join('');
  ///////////////////////////////

  //2 SOLUTION
  // let revString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;
  ///////////////////////////////

  //3 SOLUTION
  // let revString = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;
  ///////////////////////////////

  //4 SOLUTION
  // let revString = '';
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;
  ///////////////////////////////

  //4 SOLUTION
  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;
  ///////////////////////////////

  // 5 SOLUTION
  // return str.split('').reduce((revString, char) => {
  //   return char + revString;
  // }, '');
  // /////////////////////////////

  // 6 SOLUTION
  // return str.split("").reduce((revString, character) => character + revString, "");
  // /////////////////////////////
  // 7 SOLUTION
  // return [...str].reverse().join('');
  // /////////////////////////////

}
const output1 = reverseString('hello');
console.log(output1);

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {



}
const output2 = reverseString('racecar');
console.log(output2);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

}
const output3 = capitalizeLetters('i love javascript');
console.log(output3);

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

}
const output4 = maxCharacter('javascript');
console.log(output4);

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

}
const output5 = maxCharacter('FizzBuzz');
console.log(output5);





