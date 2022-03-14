'use strict';

/*NOTE:
 Exercise 1 (Greeting Page)

Given the following HTML

<h2 id='greeting'></h2>
<input name='user-name' id='user-name' placeholder='Your name goes here'>
<button id='greet-btn'>Say Hi</button>

When the user enters his name and presses the button “Say Hi”, the h2 element should show a message greeting the user, for example “Hello Kathe”
 */

const sayHi = () => {
  let inputValue = document.getElementById('user-name').value;
  let h2 = document.getElementById('greeting');

  h2.innerHTML = `Hello, ${inputValue}`;
};
