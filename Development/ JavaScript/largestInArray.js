function largestInArray(arr) {
 

  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [3, 5, 7, 2, 8];
console.log(largestInArray(arr));