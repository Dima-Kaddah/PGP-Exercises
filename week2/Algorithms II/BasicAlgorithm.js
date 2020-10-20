// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//1
function repeatStringNumTimes(str, num) {
  let answeStr = '';
  while (num > 0) {
    answeStr += str;
    num--;
  }
  return answeStr;
}

console.log(repeatStringNumTimes("abc", 3));

///////////////////////////////

// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//2
function truncateString(str, num) {
  if (str.length > num) {
    if (num >= 0) {
      str = str.slice(0, num) + '...';
    }
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-", 1));

///////////////////////////////

// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
//3
function findElement(arr, func) {
  return arr.filter(func)[0];
}
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })); //should return 8.
console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; })); //should return undefined.

///////////////////////////////

// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
//4
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  }
  return false;

}

console.log(booWho(true));//should return true
console.log(booWho(false));//should return true
console.log(booWho(null));//should return false.
console.log(booWho([1, 2, 3]));//should return false.
console.log(booWho([].slice));//should return false
console.log(booWho({ "a": 1 }));//should return false
console.log(booWho(1));//should return false.
console.log(booWho(NaN));//should return false.
console.log(booWho("a"));//should return false.
console.log(booWho("true"));//should return false.
console.log(booWho("false"));//should return false.

///////////////////////////////

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
//5
function titleCase(str) {
  const strWordArr = str.toLowerCase().split(' ');
  for (let i = 0; i < strWordArr.length; i++) {
    let letters = strWordArr[i].split('');
    letters[0] = letters[0].toUpperCase();
    strWordArr[i] = letters.join('');
  }
  return strWordArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea pot")); //should return I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt"));//should return Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); //should return Here Is My Handle Here Is My Spout.

///////////////////////////////

// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
//6
function frankenSplice(arr1, arr2, n) {

  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); //should return [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1)); //should return ["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
