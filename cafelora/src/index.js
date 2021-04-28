import './style.css';
import Drink from './Drink/index'

console.log('funguju!');

const navbar = document.querySelector('nav');
const navBtn = document.querySelector('#nav-btn');
const closeNav = () => navbar.classList.toggle('nav-closed');
navBtn.addEventListener('click', closeNav);

const navItems = navbar.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navbar.classList.add('nav-closed');
  });
});

const drinksList = document.querySelector('.drinks-list');
// drinks.forEach((drink) => {
//   drinksList.appendChild(Drink(drink))
// });

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => { 
    console.log(json);
    json.forEach((drink) => {
      drinksList.appendChild(Drink(drink));
    });
  });
