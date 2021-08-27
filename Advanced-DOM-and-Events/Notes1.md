# **OLD WAY**

## **IMPLEMENTING SMOOTH SCROLLING**

We need these coordinates here to tell JavaScript where it should scroll to .

```
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
const s1coords = section1.getBoundingClientRect();
console.log(
s1coords
);

//_DOMRect {x: 0, y: 276.8000183105469, width: 1524,
height: 1580.425048828125, top: 276.8000183105469, …}_/

console.log(
e.target.getBoundingClientRect()
);

//_DOMRect {x: 187, y: 194.5, width: 110,
height: 27.80000114440918, top: 194.5, …}_/

console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//Current scroll (X/Y) 0 174.39999389648438

console.log(
'height/width viewport',
document.documentElement.clientHeight,
document.documentElement.clientWidth
); // height/width viewport 181 1524

```

## **Scrolling**

## **scrollTo =** That's a global function and is available on the window object.

```
window.scrollTo(
s1coords.left + window.pageXOffset,
s1coords.top + window.pageYOffset
);

// and here the first argument is the left position and that is at s1coords
//current position + current scroll
```

## **Another solution**

//And this works by passing in an object now insted of just one argument

```
window.scrollTo({
left: s1coords.left + window.pageXOffset,
top: s1coords.top + window.pageYOffset,
behavior: 'smooth',
  });
});
```
