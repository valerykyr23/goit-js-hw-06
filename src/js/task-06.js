
const input = document.getElementById("validation-input");
console.log(input);




//  console.log(input.getAttribute("data-length"));  //shows value 6
// console.log(input.value.length); // shows 0 when input is empty



input.addEventListener("blur", event => {
     
    
    if (input.getAttribute('data-length') > input.value.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
});


