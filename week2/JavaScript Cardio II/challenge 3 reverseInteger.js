// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}
const output = reverseInt(12345);
const output2 = reverseInt(-12345);
console.log(output, output2);