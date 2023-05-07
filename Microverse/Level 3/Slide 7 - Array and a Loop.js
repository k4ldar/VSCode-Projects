// let array =  [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];
// create a loop that loops through every value of the array above.
// Inside the loop, create an if-else statement that only "console.logs" the value or "array[i] if it belongs to the range between 3 and 7.
// In the end, the console should only show the numbers 3, 5, 7, 4, 6

let array =  [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];
for(let i=0; i<array.length; i++){
 if(array[i] >= 3 && array[i] <= 7) {
   console.log(array[i]);
 }
}