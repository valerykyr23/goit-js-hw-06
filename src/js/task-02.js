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


  ingredients.forEach(ingredient => {

  const liForList = document.createElement("li");
  liForList.textContent = ingredient;
  liForList.classList.add("item");

    console.log(liForList);
    listWithIngr.append(liForList);


})



