const butPlus = document.querySelector('button[data-action="increment"]');
console.log(butPlus);

const butMinus = document.querySelector('button[data-action="decrement"]');
console.log(butMinus);

const counterValue = 0;

const clickMinus = () => { console.log("Minus is working")};
 
const clickPlus = () => { console.log("Plus is working")};


butPlus.addEventListener("click", clickPlus);

butMinus.addEventListener("click", clickMinus);