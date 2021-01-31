import Content from './content.js';

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
