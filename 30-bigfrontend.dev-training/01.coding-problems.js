/*NOTE: Array.prototype.flat() using recursion a iteration. */

const arr = [1, [2], [3, [4]]];

function flat(arr, depth = 1) {
  if (depth <= 0) return arr;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      let flatted = flat(arr[i]);
      newArr.push(...flatted);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flat(arr, 2));
