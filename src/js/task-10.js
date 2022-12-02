// const generalDiv = document.querySelector("#boxes");
// console.log(generalDiv);

// const btnCreate = document.querySelector("button[data-create]");
// console.log(btnCreate);

// const btnDestroy = document.querySelector("button[data-destroy]");
// console.log(btnDestroy);

// const input = document.querySelector("input");
// console.log(input);


// btnCreate.addEventListener("click", createBoxes);

// btnDestroy.addEventListener("click", destroyBoxes);


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }



// function makeDivOperations (amount) {

//   const generatedDivs = [];

//   for (let i = 0; i <= amount; i += 1) {

// const newDiv = document.createElement("div");
//     newDiv.style.hight = `${30 + 10 * i}px`;
//     newDiv.style.width = `${30 + 10* i}px`;
//     newDiv.style.backgroundColor = getRandomHexColor();
//     generatedDivs.push(newDiv);
//   }

//   return generatedDivs;
// }


// function createBoxes(amount) {

//   let allBoxes = makeDivOperations(input.value);
//   generalDiv.append(...allBoxes);
// }
 

// function destroyBoxes() {

//   generalDiv.innerHTML = "";
// }





// 1. id for divs
// 2. reset or inner html for desrtoy
// 3.element.style.hight = "30px";



const generalDiv = document.querySelector("#boxes");
console.log(generalDiv);

const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);

const btnDestroy = document.querySelector("button[data-destroy]");
console.log(btnDestroy);

const input = document.querySelector("input");
console.log(input);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const createBoxes = amount => {
  
	const elementsToAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

const destroyBoxes = () => {
	generalDiv.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(input.value)
	generalDiv.append(...boxesToAdd)
})

console.log(input.value)

btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})