const headerBurger = document.querySelector('.header__burger');
const headerNavList = document.querySelector('.header .nav__list');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerNavList.classList.toggle('active');
})