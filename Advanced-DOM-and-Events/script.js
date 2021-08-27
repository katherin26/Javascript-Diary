'use strict';

//TITTLE: Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

//NOTE: IMPLEMENTING SMOOTH SCROLLING
//We need these coordinates here to tell JavaScript where it should scroll to .

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
