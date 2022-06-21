function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx1], arr[idx2]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));

/* 
Outer Loop : 

i = 0 

  j = 1

       5  4  3  2  1  
       i  j
  
  j = 2 

       5  4  3  2  1
       i     j 
  
  j = 3 

       5  4  3  2  1
       i        j

  j = 4 

       5  4  3  2  1
       i           j 

       1  4  3  2  5    1 => fully sorted

-------------------------------------------

Outer Loop : 

i = 1 

  j = 2

       1  4  3  2  5  
          i  j
  
  j = 3 

       1  4  3  2  5  
          i     j
  
       1  2  3  4  5    ==> 2 fully sorted
*/
