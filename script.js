'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const btn1 = document.querySelector('.section--1');
const btn2 = document.querySelector('.section--2');
const btn3 = document.querySelector('.section--3');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('Current scroll (X/Y)2', window.scrollY);

  window.scrollTo({
    // left: s1coords.left,
    top: 567,
    behavior: 'smooth',
  });

  // section1.scrollIntoView({ behavior: 'smooth' });
});

//Features================================================================
btn1.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log('Current scroll (X/Y)2', window.scrollY);

  window.scrollTo({
    // left: s1coords.left,
    top: 567,
    behavior: 'smooth',
  });
});

//Operations================================================================
btn2.addEventListener('click', function (e) {
  const s1coords = section2.getBoundingClientRect();
  console.log(s1coords);

  console.log('Current scroll (X/Y)2', window.scrollY);

  window.scrollTo({
    // left: s1coords.left,
    top: 2180,
    behavior: 'smooth',
  });
});

//Testimonials=================================================================
btn3.addEventListener('click', function (e) {
  const s1coords = section3.getBoundingClientRect();
  console.log(s1coords);
          console.log('Current scroll (X/Y)2', window.scrollY);

  window.scrollTo({
    // left: s1coords.left,
    top: 3070,
    behavior: 'smooth',
  });
});

//================================================================

// console.log(
//   'height/width viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth // border excludes, padding includes
// );

// Scrolling;
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );
