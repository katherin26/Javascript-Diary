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
