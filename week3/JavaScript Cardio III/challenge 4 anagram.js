// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagramx(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//helper function
const formatStr = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

};



const output = isAnagramx('elbow', 'below');
const output2 = isAnagramx('Dormitory', 'dirty room##%$#');
console.log(output);
console.log(output2);