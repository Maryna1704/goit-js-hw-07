const counterValue = document.querySelector('#value');
  //let newValue = 0;

function increment() {
   //newValue += 1;
    counterValue.textContent = Number(counterValue.textContent) + 1;
 }

function decrement() {
   // newValue -= 1;
    counterValue.textContent -= 1;
 }

const dec = document.querySelector('[data-action="decrement"]');
dec.addEventListener('click', decrement);

  const inc = document.querySelector('[data-action="increment"]');
inc.addEventListener ('click', increment);    
