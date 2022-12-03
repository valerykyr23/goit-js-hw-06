function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}

function changeColorByClick() {
  
  let newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  span.textContent = newColor;
  
}




const body = document.querySelector("body");
console.dir(body);

const button = document.querySelector(".change-color");
console.log(button);

const span = document.querySelector(".color");
console.log(span);


button.addEventListener("click", changeColorByClick);

