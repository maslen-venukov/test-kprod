const headerBurger = document.querySelector('.header__burger');
const headerNavList = document.querySelector('.header .nav__list');
const bodyHtml = document.querySelector('html, body');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerNavList.classList.toggle('active');
  bodyHtml.classList.toggle('lock');
})