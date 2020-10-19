// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}
const output = isPalindrome('racecar');
const output2 = isPalindrome('hello');

console.log(output, output2);
