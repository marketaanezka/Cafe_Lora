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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

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
