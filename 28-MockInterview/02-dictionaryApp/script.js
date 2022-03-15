'use strict';
/*NOTE: 

Exercise 2 (Dictionary App)

Using the following API https://dictionaryapi.dev/, create an html page where you enter a word and you show the meaning of that word, the pronunciation(phonetic), and examples.

A word can have multiple meaning depending of the part of the speech, it could mean one thing as a verb and another as an adjective.

For example the word “Hello” has the three meanings, one as a noun(object), one as a verb(action), and as an exclamation:

Noun: an utterance of ‘hello’; a greeting.
Example: she was getting polite nods and hellos from people
Verb: say or shout ‘hello’.
Example: I pressed the phone button and helloed
Exclamation: used as a greeting or to begin a phone conversation.
Example: hello there, Katie!

You can style the page as you wish
*/

import { getDictionary } from './services/api.js';

const knowWord = async () => {
  let inputValue = document.getElementById('word').value;
  let content = document.getElementById('meaning-word');
  let resultWord = await getDictionary(inputValue);
  console.log(resultWord);
  let ulElement = document.createElement('ul');
  content.appendChild(ulElement);

  let liElement = document.createElement('li');
  liElement.innerText = `${resultWord.word} ${resultWord.phonetic} `;
  ulElement.appendChild(liElement);

  //h2.innerHTML = `Meaning, ${resultWord.phonetic}`;
};

let button = document.getElementById('word-btn');

button.addEventListener('click', knowWord);
