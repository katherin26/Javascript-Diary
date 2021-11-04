'use strict';

/*NOTE: LOCAL VS GLOBAL SCOPE
When you have the same variable the local scope take precedence over global  variables 
or constants.
*/

//Global scope
const color = 'red';

//Local Scope
function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);
}

function stop() {
  const message = 'bye';
}
