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
