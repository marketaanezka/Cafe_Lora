import Layer from '../Layer/index';
import './style.css'

const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="/assets/cups/${props.id}.png" />
      </div>
      <div class="drink__info">
        <h3>${props.name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
  `;
  
  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  props.layers.forEach((layer) => drinkInfoElm.innerHTML += Layer(layer));

  const orderBtn = drinkElm.querySelector('.order-btn');
  orderBtn.addEventListener('click', () => {
    const drinkCupElm = drinkElm.querySelector('.drink__cup');

    if (props.ordered) {
      drinkCupElm.classList.remove('drink__cup--selected');
      orderBtn.textContent = 'Objednat';
    } else {
      drinkCupElm.classList.add('drink__cup--selected');
      orderBtn.textContent = 'Zrušit';
    }

    props.ordered = !props.ordered;
  });

  return drinkElm;
}

export default Drink;
