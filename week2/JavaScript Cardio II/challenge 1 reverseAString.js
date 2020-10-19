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





