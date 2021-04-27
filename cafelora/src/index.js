import './style.css';

console.log('funguju!');

const navbar = document.querySelector('nav');
const closeNavbar = () => navbar.classList.toggle('nav-closed')

const navItems = navbar.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
});

const orderBtn = document.querySelector('.order-btn');
const drinkElm = document.querySelector('.drink__cup')
let ordered = false;

const order = () => {
  if(!ordered) {
    drinkElm.classList.add('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkElm.classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    ordered = false;
  }
}
orderBtn.addEventListener('click', order);