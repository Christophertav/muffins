let beltCont = document.querySelector('#belt-container')

for(let i=1; i <= 100; i++) {

  let belt = document.createElement('div');
  let cake = document.createElement('div');
  let layerOne = document.createElement('div');
  let filling = document.createElement('div');
  let layerTwo = document.createElement('div');
  let topping = document.createElement('div');
  let candle = document.createElement('div')

  layerOne.style.backgroundColor = `hsl( ${Math.floor(Math.random() * i * 50)}, 30%, 60%`
  layerTwo.style.backgroundColor = `hsl(${Math.floor(Math.random() * i * 50)}, 60%, 35%`
  topping.style.backgroundColor = `hsl(${Math.floor(Math.random() * i * 25)}, 50%, 50%`


  belt.classList.add('belt');
  cake.classList.add('cake');
  layerOne.classList.add('layer');
  layerOne.classList.add('layer-1');
  filling.classList.add('filling');
  layerTwo.classList.add('layer');
  layerTwo.classList.add('layer-2');
  topping.classList.add('layer');
  topping.classList.add('topping');
  candle.classList.add('candle');

  belt.style.left = `${1 * i * 150}px`
  cake.append(layerOne, filling, layerTwo, topping, candle);
  belt.append(cake);

  beltCont.append(belt);

}
