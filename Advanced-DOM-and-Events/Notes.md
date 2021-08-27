# **SELECTING CREATING AND DELETING ELEMENTS**

## **SELECTING ELEMENTS**

```
console.log(document.documentElement); //<html>...</html>
console.log(document.head); //<head></head>
console.log(document.body); //<body></body>
```

### **querySelector**

```
const header = document.querySelector('.header');

//We used this a lot when we want to select child elements.
```

### **querySelectorAll**

```
const allSections = document.querySelectorAll('.section');
console.log(allSections); `NodeList(4) [section....]`

// contain all of the elements.
```

### **getElementById**

```
document.getElementById('section--1');
```

### **getElementByTagName**

```
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); `HTMLCollection(9)[button ...] `

//Also called life collection that means that if the DOM changes then this collection is also immediately updated automatically.
```

### **getElementByClassName**

```
console.log(document.getElementsByClassName('btn')); HTMLCollection(5)[button..]
```

## **CREATING AND INSERTING ELEMENTS**

### **insertAdjacentHTML**

```
element.insertAdjacentHTML(position, text);
```

### **createElement**

```
const message = document.createElement('div');

We want to create a div and so this will return a DOM element and then stores that element in a variable.
Now that element is not yet anywhere in our DOM , All this is , a DOM Object that we can now use
to do something on it , but it is not yet in the DOM itself. If we want it on the page then we need o manually insert it into the page
```

### **add**

```
For example = we can add classes

message.classList.add( 'cookie-message' );

Here we will now programmatically built an element which will display a small cookie message on the bottom of the screen.
```

### **textContent**

```
message.textContent = 'We use cookied for improved functionality and analytics.';
```

### **innerHTML**

```
message.innerHTML = `We use cookies for improved functionality and analytics.
<button class="btn btn--close-cookie">Got it!</button>`;
```

### **prepend - append**

```
Basically adds the element as the first child of this element, but we can also edit as the last
child and that is append, We can used the prepend and append methods not only to insert elements but
also to move them, that is because a DOM element is unique so it can always only exist at one place
at a time.

header.prepend(message);

//Now is in our DOM <div class = "cookie-message">...</div>

header.append(message);

//Now is appended and is the last child.basically this append move the element from being the first child to being the last child.
```

### **cloneNode**

### **What if we wanted insert multiple copies of the same element??**

```
In that case we actually would have to first copy the first element

header.append(message.cloneNode(true));

 //This means that all the child elements will also be copied and you are gonna see , the cookie message in both places.
```

### **before and after**

```
As the name says this one will insert a message before and after the header element as a sibling.

header.append(message);
header.before(message);
```

### **Delete Elements**

```
document.querySelector('.btn--close-cookie');
addEventListener('click', function () {
  message.remove();

  //We don't have to select the message element again because we already have it in memory.
});
```
