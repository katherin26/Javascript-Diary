# **CSS QUESTIONS**

1. What are the 3 ways to apply styles to an html page?

- External
- Internal
- Import

2. Choose in what tag you should import your css files? Give an example.

- Script
- Body
- Style
- Head ===> Rigth Answer

```
<head>
    <link rel = "stylesheet" href = "style.css"/>
</head>

```

3. What tag do you use to import an external css file ? Give an example.

- Import
- Link ===> Right Answe
- Meta
- Alien

```
<link rel = "stylesheet" href="../style.css"></link>
```

4. What tag do you use to define internal css? Give an example

- internal
- irs
- research
- Style ===> Rigth Answer

```
<style></style>
```

5. What tag property do you use to define inline css? Give an example.

- Class
- Id
- Data
- Style ===> Right Answer

```
<div id = "container" style= "width: 300px"></div>
```

6. How do you import a css file called style.css ? Write it below.

- href = "styles.css"

```
<link rel = "stylesheet" href="style.css"></link>
```

7. What are the five types of positioning in Css??

- Static
- Relative
- Absolute
- Fixed
- Sticky

8. What are the four elements of the Box Model?

- Margin
- Padding
- Border
- Content

9. What are the 2 types of box sizing?

- Border box (content-border-padding)
- Content box (content)

10. What is the css element selector? Give an example.

Se agregan a la etiqueta en css para modificar uno o varios elementos.

```
- <a></a>
- <ul></ul>
- <li></li>
- <p></p>
```

11. What is an id selector?? Give an example
    Cuando usas un id selector las caracteristicas de ese id no se pueden compartir.

```
- <div id = "box"></div>
- #box
```

12. What is a class selector? Give an example.

```
- <div class = "box"></div>
- .box
```

13. Can you combine selectors? If yes, give an example.

```
- div + p {}
- Div p{}
```

14. Explain what the following selectors select.

```
- div > p = Selecciona todos los hijos directos de p elements dentro de un div.
- div.post > p = Selecciona todos los hijos directos de p element dentro de un div con clase post.
- .downdloads a.link = todos los a elements con clase link que desciendan de cualquier elemento con clase downloads.
- image#use_pic = selecciona un elemento image con id user_pic.
- ul > li = Selecciona todo los li elements que desciendan directamente de ul.
- div.menu1 + div.menu2 = Selecciona un div con clase menu2 que esta adyacente directo a un div en clase menu1.
- div ~ p = Selecciona todos los p elements adyacentes a un div element.
```

15. What is a pseudo-element? Give an example.

- Modifica el estilo de un elemento.
- a::first-letter{}

16. What is a pseudo-class? Give an example.

- Define el estado de un element cuando el mouse para por encima y cambia el color.
- a:hover{}

17. Explain the CSS "BOX MODEL" and the layout components that it consist of (parts of the box, there are 4).

- The box model wrap an element in html:
- Margin
- Border
- Padding
- Content

18. Explain the different types of positioning in Css.

- Static = Defaullt
- Relatice = Moved with the flow.
- Absolute = Moved outside the flow.
- Fixed = They always stay in the same position on the screen.
- Sticky = It's a combination between Fixed and Relative.

19. What are the different values of the display property in CSS?

- none
- inline-block
- block
- inline

20. What is the difference between px, em, rem and % in CSS?

- em : Respond to the parent Element at that moment.
- rem : Is calculated with the root which is 62.5% 16px = 1rem.
- % : The element responds to the width and height in the parent.
- px : Doesn't have a behavior, no responsiveness, no escalable.

21. What do we use in CSS to make a website responsive?

- Viewport
- Media queries
- Grid

# **JAVASCRIPT QUESTIONS AND ANSWERS**

22. Write a function that prints "Hello world".

```
Function sayHello(){
    return `Hello`;
}
console.log(sayHello());


```

23. Write a function that receives two numbers and returns their sum.

```
function calcSum(a,b){
    return a + b;
}
console.log(calcSum(1,2));

```

24. Write a function that receives an array of numbers and returns the sum , example `[1,2,3]` should return 6.

```
function calcSum(arr){
    return arr.reduce((el,acc) => el + acc);
}
console.log(calcSum([1,2,3]));

```

25. Loop through the following array and print each value using Array.forEach().

```
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
months.forEach(el => console.log(el));
```

26. Loop through the following array and print each value using a regular "For loop"

```
let days = ['Monday', 'Martes', 'Wednesday', 'Thursday', 'Friday'];

for(let i = 0; i < days.length; i++){
    console.log(days[i]);
}

```

27. Loop through the following array and print each value using a "For In" loop.

```
let colors = ['Yellow', 'Blue', 'Red'];

for(const value in colors){
    console.log(colors[value]);
}

```

28. Loop through the following array and print each value using a "For Of" loop.

```
let ages = [10,20,30,40,50];
for (const value of ages){
    console.log(value);
}
```

29. Given a list of people, print whether people are allowed into the party based on age, if a person is younger
    than 18, you should print their name along with a message that says "Not Allowed", if person is 18 or older, do the same but the message is "Allowed".

let people = [
{name: 'bambi', age: 32},
{name: 'bambi2', age: 33},
{name: 'bambi3', age: 34},
{name: 'bambi4', age: 35},
{name: 'bambi5', age: 36},
{name: 'bambi6', age: 37},
];

```
for (let i = 0; i < people.length; i++){
    const allowed = people[i].age >= 18 ? "Allowed" : "Not Allowed";
    console.log(`${people[i].name} is ${allowed});
}

```

30. Could you describe the different kinds of selectors??
    Selects the content you want to style :

```
   - tags references an HTML tag.
   - A class references the class attribute on an HTML tag.
   - ID references the id attribute on an HTML tag.

```

31. Explain the three main ways to target elements.??

```
By tag
By class
By ID
```

32. How do you target something inside or around another element??

```
Using Combinators.
```

33. What are attributes and how are they used??

```
There are a few that apply to all tags, like class and id, but a lot of tags have their own ones.
For example : input tags can have a type (text, number, radio,etc) and a tags can have href.
You can target elements with particular attributes by using square brackets:
[attribute=”value’] for example, you can target all input fields that are of type radio like so:
input[type=”radio”]{background-color: #eee;}

```

# **SPECIFICITY**

34. Can you describe the rules around specificity??

```
Type selectors and pseudo-elements.
Class selectors, attributes selectors and pseudo-classes.
ID selectors.

NOTE: the more selectors you use, the higher it ranks in terms of specificity
example: button.primary[target=”_blank”] is more specific than simply button.
```

35. Should you use !important??

```
No, it’s dangerous and you need to override every single rule.

```

36. What’s your preferred way of sizing fonts??

```
em and rem because they are scalable.
```

37. What are web safe fonts and fallback fonts??

```
You should choose a web safe fallback font to display, followed by a generic font family. If your fallback font doesn’t display either, the browser can pick a generic font in the sans-serif family.
```

38. How would you use media queries in a mobile-first approach??

### **mobile styles**

```
body{
font-size:1em;
}


```

### **Desktop styles**

```
@media only screen and (min-width: 768px){
   body{
            font-size:1.5em;
  }
}

```

# **BROWSERS**

39. How do you handle browser differences in your user base?

```
@supports query in CSS can be very useful to scan if the user’s current browser has a certain feature.
```

40. Do you use any tools for browser support?

```
Exist caniuse.com , and this tells you exactly which browsers support which features , including CSS and Javascript.
```

41. Have you used Flexbox and CSS Grid before?? What are the differences between them??

```
- Flexbox: Is useful especially for smaller areas within the site.
- CSS Grid : Is more of a layout tool for the entire page. While Flexbox excels in laying out items along a single axis, Grid is better for layouts with both horizontal and vertical axes.

```
