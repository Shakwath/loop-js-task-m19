/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
let sum = 0;
while (true) {
    sum += i;
    if (sum > 100) {
      console.log("Sum has reached or exceeded 100:", sum);
      break;
    }
    i++;
  }
  
  console.log("Final sum:", sum);