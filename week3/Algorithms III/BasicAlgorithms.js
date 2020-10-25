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
