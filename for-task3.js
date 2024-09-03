
/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

//subtask -01
let i = 91;
let sumOdd = 0;
for(i = 91;i<=129;i++)
{
    if(i % 2==1)
    {
        sumOdd+=i;
    }   
}
console.log("Sum of all odd numbers from 91 to 129:", sumOdd);  
//subtask -02
let sumEven = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}

console.log("Sum of all even numbers from 51 to 85:", sumEven);