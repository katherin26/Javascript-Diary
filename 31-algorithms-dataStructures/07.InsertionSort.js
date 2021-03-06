function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

/*Second exercise */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

/*

[ 2 ] 1 , 9 , 76 , 4 

[ 1 , 2 ], 9 , 76 , 4

[1, 2 , 9], 76 , 4

[1, 2 , 9, 76], 4

[1, 2 , 4 , 9, 76]  ===> output

*/
