// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  //create filter array
  const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);
  //sort fron wordArray
  const sorted = wordArray.sort((a, b) => {
    return b.length - a.length;
  });
  //if multiple word[]
  const longestWordsArray = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });
  //check if more than one array val
  if (longestWordsArray.length === 1) {
    return longestWordsArray[0];
  } else {
    return longestWordsArray;
  }

}

const output = longestWord('Hello there, my name is Brad');
const output2 = longestWord('Hellooo there, my name is Brad');

console.log(output);
console.log(output2);