// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
//1
function frankenSplice(arr1, arr2, n) {
  // return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

  let arr = arr2.slice();
  arr.splice(n, 0, ...arr1);

  return arr;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
//2
function bouncer(arr) {
  arr = arr.filter(falsyValus);
  return arr;
}

const falsyValus = (arg) => {
  return (Boolean(arg) === true);
};
console.log(bouncer([7, "ate", "", false, 9]));

// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
//3

function getIndexToIns(arr, num) {
  //insert num to arr
  arr.push(num);
  //sort arr i second order
  arr = arr.sort((a, b) => {
    return a - b;
  });
  // find position in sort arr
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
//4
function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (first.indexOf(letter) === -1) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "hey"]));

// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//5
function chunkArrayInGroups(arr, size) {
  const chunkedArr = [];
  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === size) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));