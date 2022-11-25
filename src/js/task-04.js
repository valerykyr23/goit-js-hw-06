

const bts = document.querySelectorAll("button");
console.log(bts);



bts.forEach(btn => {
    btn.addEventListener("click", function () {
        const action = this.dataset.action;
        const span = this.parentElement.querySelector("#value");
        const currentValue = +span.textContent;
        let newValue;


        if (action === "increment") {
            newValue = currentValue + 1;
        } else {

            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        span.textContent = newValue;
})})