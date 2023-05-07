let array = [1, 2, 3, 4, 5, 34, 7, 9, 32];    // Initialize array
let length = array.length;    // Get length of array

for(let i = 0; i < length; i++) {    // Loop through array
  if(array[i] < 7){    // Check if current element is less than 7
  console.log(array[i]);    // Print current element
 }
}

// Slide 23 - Exercise 7

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 4) {
    console.log(arr[i]);
  }
}