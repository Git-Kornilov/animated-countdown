'use strict';

const nums = document.querySelectorAll('.nums span');

const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.getElementById('replay');

const runAnimation = function () {
  nums.forEach((num, indx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', e => {
      if (e.animationName === 'goIn' && indx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
};

runAnimation();

const resetDom = function () {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  // reset all class for span
  nums.forEach(num => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
};

replay.addEventListener('click', () => {
  resetDom();
  runAnimation();
});
