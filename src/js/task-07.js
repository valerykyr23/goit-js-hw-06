const inputText = document.getElementById("font-size-control");
console.log(inputText);

const span = document.getElementById("text");
console.log(span);

inputText.addEventListener("input", event => {
    span.style.fontSize = event.currentTarget.value + "px";
})

 