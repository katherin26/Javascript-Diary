function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));

/*
  Outer Loop
  i = 4 Inner Loop
  
  j = 0
        5  4  3  2  1
        j j+1       i
        \  / 
  -------------------------
  j = 1
        4  5   3  2  1
           j  j+1    i
           \   /
  -------------------------
  j = 2 
        4  3   5  2  1
               j j+1 i
               \  /
  -------------------------
  j = 3 
        4   3  2  5  1
                      i
                  j  j+1 
  --------------------------
  i = 3 Inner Loop
  
  j = 0
        4  3  2  1  5
        j j+1    i
        \  / 
  -------------------------
  j = 1
        3  4   2  1  5
           j  j+1 i
           \   /
  -------------------------
  j = 2 
        3  2   4  1  5
                  i
               j j+1 
               \  /
  -------------------------
  
  i = 2 Inner Loop
  
  j = 0
        3  2  1  4  5
        j j+1    i
        \  / 
  -------------------------
  j = 1
        2  3   1  4  5
           j  j+1 i
           \   /
  -------------------------
  j = 2 
        3  2   1  4  5
               i   
               j j+1 
               \  /
  -------------------------
         
  i = 1 Inner Loop
  
  j = 0
        2  1  3  4  5
           i
        j j+1    
        \  / 
  -------------------------
   result = 1 , 2 , 3 , 4 , 5
  */
