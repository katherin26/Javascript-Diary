function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(mid);

  return merge(left, right);
}

/* MergeSort Part

    4 <= 1 ====> No

    let mid = 4/2 ====> 2 
    left = 0,2 ====> [4,3];
    right = 2  ====> [5,2];
    
    mid = 2/2 ====> 1
    left = 0,1 ====> [4]'
    right = 1  ====> [3]


    mid = 2/2 ====> 1
    left = 0,1 ====> [5]
    right = 1  ====> [2]


    merge(4,3)  ====> [3,4]
    merge(5,2)  ====> [2,5]


    merge([3,4],[2,5])

    results = [2,3,4,5]


*/
