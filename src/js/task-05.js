

const input = document.querySelector("#name-input");
console.log(input);



const span = document.querySelector("#name-output");
console.log(span);


function changeOutput() {
    

	if (input.value === '') {
        span.textContent = 'Anonymous';
    } else {
        span.textContent = input.value;
    }
};


input.addEventListener('input', changeOutput);