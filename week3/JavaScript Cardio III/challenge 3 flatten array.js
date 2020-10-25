// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce((a, b) => a.concat(b));
  // SOLUTION 2
  // return [].concat.apply([], arrays);
  // SOLUTION 3
  return [].concat(...arrays);
  // SOLUTION 4

}

const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

console.log(output);