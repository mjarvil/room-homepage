import Content from './content.js';

const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');
const hero = document.querySelector('.hero img');
const h1 = document.querySelector('h1');
const mainP = document.querySelector('.main-content p');

sliderLeft.addEventListener('click', () => {
  {
    console.log(`left is clicked`);
  }
});

sliderRight.addEventListener('click', () => {
  {
    console.log(`right is clicked`);
  }
});

const getContent = (args) => {
  const content = new Content(...args);
};
