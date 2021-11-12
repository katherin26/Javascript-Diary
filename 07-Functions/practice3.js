/*NOTE: RECURSION */

let forLoopFunction = num => {
  num++;
  console.log(num);
  if (num < 5) {
    forLoopFunction(num);
  }
};

forLoopFunction(0);

//Example print numbers.

function countDown(num) {
  console.log(num);

  const newNumber = num - 1;
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(5);

/*In the above program, the user passes a number as an argument when calling 
a function.
In each iteration, the number value is decreased by 1 and function countDown()
is called until the numbers is positive. Here, newNumber > 0 is the base condition.
This recursive call can be explained in the following steps: 

countDown(5) prints 5 and calls countDown(4)
countDown(4) prints 5 and calls countDown(3)
countDown(3) prints 5 and calls countDown(2)
countDown(2) prints 5 and calls countDown(1)
countDown(1) prints 5 and calls countDown(0)

When the number reaches 0, the base condition is met and the function is not 
called anymore.
*/
