function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}

function changeColorByClick() {
  
  let newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  span.textContent = newColor;
  
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.



const body = document.querySelector("body");
console.dir(body);

const button = document.querySelector(".change-color");
console.log(button);

const span = document.querySelector(".color");
console.log(span);


button.addEventListener("click", changeColorByClick);

