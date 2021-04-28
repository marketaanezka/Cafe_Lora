import Layer from '../Layer/index';
import './style.css'

const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  // produkt
  const drinkProduct = document.createElement('div');
  drinkProduct.classList.add('drink__product');
  drinkElm.appendChild(drinkProduct);

  const drinkCup = document.createElement('div');
  drinkCup.classList.add('drink__cup');
  drinkProduct.appendChild(drinkCup);

  const img = document.createElement('img');
  img.src = `/assets/cups/${props.id}.png`;
  drinkCup.appendChild(img);

  const drinkInfo = document.createElement('div');
  drinkInfo.classList.add('drink__info');
  drinkProduct.appendChild(drinkInfo);

  const drinkInfoH3 = document.createElement('h3')
  drinkInfoH3.textContent = props.name;
  drinkInfo.appendChild(drinkInfoH3);

  props.layers.forEach(layer => drinkInfo.innerHTML += Layer(layer));

  const drinkControls = document.createElement('div');
  drinkControls.classList.add('drink__controls');

  const orderBtn = document.createElement('button');
  orderBtn.classList.add('order-btn');
  orderBtn.textContent = 'Objednat';

  orderBtn.addEventListener('click', () => {
    if (props.ordered === false) {
      drinkCup.classList.add('drink__cup--selected');
      orderBtn.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      drinkCup.classList.remove('drink__cup--selected');
      orderBtn.textContent = 'Objednat';
      props.ordered = false;
    }
    // řešení Filipa Jirsáka
    // props.ordered = !props.ordered;
    // drinkCup.classList.toggle('drink__cup--selected', props.ordered);
    // orderBtn.textContent = props.ordered ? 'Zrušit' : 'Objednat'
  });

  drinkControls.appendChild(orderBtn);
  drinkElm.appendChild(drinkControls);

  return drinkElm;
}

export default Drink;
