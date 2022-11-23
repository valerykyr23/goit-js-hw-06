

const listById = document.querySelector("#categories"); // дает доступ к списку ul
console.log(listById);


const listItemsByClass = document.querySelectorAll(".item"); //дает доступ к li с классом item - категории и выводит их количество
console.log("Number of categories : ", listItemsByClass.length);


const allTitles = document.querySelectorAll("h2");  //дает доступ ко всем h2
console.log(allTitles);

const firstTitle = allTitles[0].textContent;
console.log("Category :", firstTitle);

const secondTitle = allTitles[1].textContent;
console.log("Category :", secondTitle);

const thirdTitle = allTitles[2].textContent;
console.log("Category :", thirdTitle);


console.log(listItemsByClass);

console.log(listItemsByClass[0]);

const firstList = listItemsByClass[0].lastElementChild;

console.log(firstList);

const childrenOfFirstCategory = firstList.children;

console.log("Elements :", childrenOfFirstCategory.length);



const secondtList = listItemsByClass[1].lastElementChild;
console.log(secondtList);

const childrenOfSecondtCategory = secondtList.children;
console.log("Elements :", childrenOfSecondtCategory.length);

const thirdList = listItemsByClass[2].lastElementChild;
console.log(thirdList);

const childrenOfThirdCategory = thirdList.children;
console.log("Elements :", childrenOfThirdCategory.length);
