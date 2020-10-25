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
bouncer([7, "ate", "", false, 9]);