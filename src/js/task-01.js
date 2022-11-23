
// Updated and correct  version of the solution


const caterogies = document.querySelectorAll('.item');
console.log(`Number of categories: ${caterogies.length}`)

caterogies.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`)
    console.log(`Elements: ${category.querySelector('ul').children.length}`);
})





//Trial version of the solution

// const listById = document.querySelector("#categories"); // дает доступ к списку ul
// console.log(listById);


// const listItemsByClass = document.querySelectorAll(".item"); //дает доступ к li с классом item - категории и выводит их количество
// console.log("Number of categories : ", listItemsByClass.length);


// const allTitles = document.querySelectorAll("h2");  //дает доступ ко всем h2
// console.log(allTitles);

// const firstTitle = allTitles[0].textContent; //дает доступ к первому тайтл
// console.log("Category :", firstTitle);

// const secondTitle = allTitles[1].textContent;  // дает доступ ко второму тайтл
// console.log("Category :", secondTitle);

// const thirdTitle = allTitles[2].textContent;  // дает доступ к третьему тайтл
// console.log("Category :", thirdTitle);


// console.log(listItemsByClass); // выводит в консоль массив лишек с классом айтем

// console.log(listItemsByClass[0]); //   выводить в консоль первый елелемнт массива лишек-айтем

// const firstList = listItemsByClass[0].lastElementChild; // дает доступ к ул-списку в первой лишке-айтем

// console.log(firstList); // консолит первый ул-список

// const childrenOfFirstCategory = firstList.children; //  дает доступ ко всем лишкам в пеовм ул-списке

// console.log("Elements :", childrenOfFirstCategory.length); // показывает длинну массива из лишек в певой категории



// const secondtList = listItemsByClass[1].lastElementChild; // доступ ко второму ул-списку
// console.log(secondtList); //

// const childrenOfSecondtCategory = secondtList.children;   // доступ к лишкам внутри второго ул-списка
// console.log("Elements :", childrenOfSecondtCategory.length);

// const thirdList = listItemsByClass[2].lastElementChild; // доступ к третьему ул-списку
// console.log(thirdList);

// const childrenOfThirdCategory = thirdList.children;  // доступ к лишкам в третьем ул-списке
// console.log("Elements :", childrenOfThirdCategory.length);


