'use strict';

const sayHi = () => {
  let inputValue = document.getElementById('user-name').value;
  let h2 = document.getElementById('greeting');

  h2.innerHTML = `Hello, ${inputValue}`;
};
