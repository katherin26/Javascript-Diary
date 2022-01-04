'use strict';

/*NOTE: PROMISES

There are 3 ways of representing async code (code that takes time to produce a result and 
this will return result in the future.)
Let's represent the following actions, each action take time to finish.

1. Wake up
2. Brush Teeth 
3. Prepare coffe
4. Study
*/

/*NOTE: THE OLD WAY WITH CALL BACKS.
When a function takes time to finishm it does not immediately return a result, instead it receives
a callback function which will be called with the result.
*/
