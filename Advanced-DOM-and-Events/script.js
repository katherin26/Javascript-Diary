'use strict';

//TITTLE: Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
/*--*/
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
/*--*/
const section1 = document.querySelector('#section--1');
/*--*/
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
/*--*/
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault(); // The page did not jump to the top
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//NOTE: Botton open modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//------------------------------------------------------------------------------//
//NOTE: IMPLEMENTING SMOOTH SCROLLING
//We need these coordinates here to tell JavaScript where it should scroll to .

//BUTTON SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(
    s1coords
  ); /*DOMRect {x: 0, y: 276.8000183105469, width: 1524, 
    height: 1580.425048828125, top: 276.8000183105469, …}*/

  console.log(
    e.target.getBoundingClientRect()
  ); /*DOMRect {x: 187, y: 194.5, width: 110, 
  height: 27.80000114440918, top: 194.5, …}*/

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  //Current scroll (X/Y) 0 174.39999389648438

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // height/width viewport 181 1524

  //IMPORTANT: see Notes1.md for old browsers with window.scrollTo()

  //NOTE: ScrollIntoView() works for modern browsers

  section1.scrollIntoView({ behavior: 'smooth' });
});

//TITTLE: PAGE NAVIGATION = EVENT DELEGATION
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault(); // no longer scroll to the page.
    const id = this.getAttribute('href'); // this = current y .href
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

//IMPORTANT:
//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//TITTLE: TYPES OF EVENTS AND EVENTS HANDLERS

//mouseenter event
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: great ! you are reading the heading');
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//TITTLE: BUILDING A TABBED COMPONENT

//tabs.forEach(t => t.addEventListener('click', () => console.log('Tabbbb')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //more closest parentElement
  console.log(clicked);

  //Guard clause
  if (!clicked) return;
  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
}); //<button class = "btn operations__tab....</button>"

//TITTLE: MENU FASE ANIMATION
//The opposite of mouseenter is mouseleave
//The oposite of mouseover is mouseout

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this; //the this keyword is now our opacity.
  }
};

// Passing "argument" into handler.
/*The bind method creates a copy of the function that it's called on and it will set the disc keyword
in this function call to whatever value that we pass into bind.*/
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//TITTLE: IMPLEMENTING A STICKY NAVIGATION : THE SCROLL EVENT

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//TITTLE: A BETTER WAY : THE INTERSECTION OBSERVER API
//NOTE: Notes2.md

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight); //90

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //is a box of -90 pixels that will be applied outside of our target element
});

headerObserver.observe(header);

//TITTLE: REVEALING ELEMENTS ON SCROLL

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry); //90

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden'); //target:section #section--1.section
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//TITTLE: LAZY LOADING IMAGES

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px', //as we approached the images they are already fully loaded.
});

imgTargets.forEach(img => imgObserver.observe(img));
