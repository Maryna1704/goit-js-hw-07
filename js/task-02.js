const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ulRef = document.getElementById('ingredients')
console.log(ulRef);

const newElements = ingredients.map(i => {
  const elem = document.createElement('li');
  elem.textContent = i
  return elem; 
})

 
ulRef.append(...newElements)