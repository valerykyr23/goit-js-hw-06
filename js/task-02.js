const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];





const listWithIngr = document.querySelector("#ingredients");

console.log(listWithIngr);

const liArray = [];


ingredients.forEach(ingredient => {

  const liForList = document.createElement("li");
  liForList.textContent = ingredient;
  liForList.classList.add("item");

liArray.push(liForList); 

})

listWithIngr.append(...liArray);






