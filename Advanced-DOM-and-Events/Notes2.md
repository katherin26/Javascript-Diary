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

## **A BETTER WAY : THE INTERSECTION OBSERVER API**

```
Observe changes to the way that a certain target element intersects another element , or the way
it intersects the viewport.
```

```
This callback function here will get called each time that the observed element, so our target element
here is intersecting the root element at the threshold that we defined.
```

```
const obsCallback = function (entries, observer) {
entries.forEach(entry => {
console.log(entry);
});
};

const obsOptions = {
root: null, //this root is the element that the target is intersecting.
threshold: [0, 0.2], //this is basically the percentage of intersection at which the observer callback
will be called. (intersectionRatio)
};

const observer = new IntersectionObserver(obsCallback, obsOptions); //callback function and object
observer.observe(section1); //target
```

## **Lifecycle DOM Events**

**DOM CONTENT LOADED**

```
This event is fired by the document as soon as the HTML is completely parsed.
which means that the HTML has been downloaded and been converted to the DOM tree, Also all scripts
must be downloaded and executed before the DOM content loaded event can happen And of course we can listen
to that event and since it happens on the document we call the add event listener method on the document
And then name of the event is , ('DOMContentLoaded).
```

```
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!!', e);
});
//HTML parsed and DOM tree built!! > Event{...}
```

**LOAD EVENT**

```
The load event is fired by the window . As soon as not only the HTML is parsed but also all the images
and external resources like CSS files are also loaded , Basically when the complete page has finished loading
is when this event gets fired .So as always .
```

```
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

//Page fully loaded > Event{...}
```

**UNLOAD EVENT**

```
The load is fired by the window, and this event  is created inmediately before a user is about to leave
a page. So for example after clicking this close button here in the browser tab, So we can basically use
this event to ask users if they are 100% sure that they want to leave the page.
Now in some browsers to make this work ,we need to call prevent default ,in chrome is not necessary , but some
browsers require it .
And actually in order to display a leaving confirmation we need to set the return value on the event to an empty
string
```

```
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
```
