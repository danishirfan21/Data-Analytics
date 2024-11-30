const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const backBtn = document.querySelector('.back-btn');

menuBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
});

backBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(-100%)';
});
