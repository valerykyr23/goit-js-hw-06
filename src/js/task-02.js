const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const listWithIngr = document.querySelector("#ingredients");
console.log(listWithIngr);


  ingredients.forEach(ingredient => {

  const liForList = document.createElement("li");
  liForList.textContent = ingredient;
  liForList.classList.add("item");

    console.log(liForList);
    listWithIngr.append(liForList);


})



