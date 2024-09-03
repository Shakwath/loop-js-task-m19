/***

Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */

//Subtask-1:
console.log("Odd numbers from 61 to 100:");
let i = 61; 
while(i <= 100)
{
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
}