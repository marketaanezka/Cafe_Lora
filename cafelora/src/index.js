import Drink from './Drink/index'
import './style.css';

const navbar = document.querySelector('nav');

const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  navbar.classList.toggle('nav-closed');
});

const navItems = navbar.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navbar.classList.add('nav-closed');
  });
});

const drinksList = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => { 
    json.forEach((drink) => {
      drinksList.appendChild(Drink(drink));
    });
  });
