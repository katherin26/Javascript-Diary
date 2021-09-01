# **DOM TRAVERSING**

```
 Is walking through the DOM which means that we can select an element based on another element.
```

```
const tittle = document.querySelector('h1');
```

## **Going downwards : child**

**querySelectorAll**

```
console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]

In this case these two elements are direct children of the h1 but as I said , it would go down
as deep as neccessary into the DOM tree, also if there were other highlight elements on the page
they would not get selected because they would not be children of the h1 element
```

**childNodes**

```
sometimes all we need are actually direct children and so for that , we can use

console.log(h1.childNodes); //NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); //HTMLCollection(3) [span.highlight, br, span.highlight]

and this gives us an HTMLCollection which remembers is a live collection
so it's updated and so here we indeed only get the three elements that are actually inside of the h1
```

**First and last element child**

```
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';
```

## **Going upwards : parents**

```
console.log(h1.parentNode); // <div class = "header__tittle">...</div> (grid)
console.log(h1.parentElement); //<div class = "header__tittle">...</div> (grid)
```

**closest();**

```
closest() = this receives a query string just like querySelectorAll

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)'; // Now this is the h1 element itself
the closest being the opposite of querySelector so both receives a query string as an input but querySelector
finds childrens no matter how deep in the DOM tree while the closest method finds parents and also
no matter how far up in the DOM tree.
```

## **Going sideways : siblings**

```
console.log(`----------------`);
console.log(h1.previousElementSibling); //null
console.log(h1.nextElementSibling); //<h4>Take major steps to make the world a better place</h4>
console.log(h1.previousSibling); //#text
console.log(h1.nextSibling); //#text
console.log(h1.parentElement.children); //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
```

**Using spread operator and forEach**

```
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.9)';
});
```
