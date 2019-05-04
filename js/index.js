// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('keydown', function(e) {
  console.log(e.code);
  console.log(e.key);
});

const button = document.querySelector('.btn');
button.addEventListener('mouseover', function (e) {
    button.style.color='red';
});

const container = document.querySelector('.home');

container.addEventListener('dblclick', function (e) {
  container.style.color='purple';
});

const footer = document.querySelector('.footer');
footer.addEventListener('click', function (e) {
    console.log('Thanks for stopping by!!');
});

const header = document.querySelector('.destination, h4');
header.addEventListener('mousemove', function(e) {
    header.style.color='yellow';
});

const textcontent = document.querySelector('.text-content');
textcontent.addEventListener('mousewheel', function(e) {
    textcontent.style.color='green';
});

document.addEventListener('keydown', logKey);

const log = document.querySelectorAll('.home');
function logKey(e) {
  console.log('arrow down');
}

document.addEventListener('keyup', logKey);

const log2 = document.querySelectorAll('.home');
function logKey(e) {
  console.log('arrow up');
}

const logo = document.querySelector('main-navigation, .logo-heading');
logo.addEventListener('touchmove', function(e) {
    logo.style.color='dodgerblue';
});

