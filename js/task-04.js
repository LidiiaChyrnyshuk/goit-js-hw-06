// let counterValue = 0;

// const counterEl = document.querySelector("#counter");
// const decrementBtnEl = counterEl.firstElementChild;
// const incrementBtnEl = counterEl.lastElementChild;
// const valueEl = document.querySelector("#value");

// decrementBtnEl.addEventListener("click", () => {
// 	counterValue -= 1;
// 	valueEl.textContent = counterValue;
// });

// incrementBtnEl.addEventListener("click", () => {
// 	counterValue += 1;
// 	valueEl.textContent = counterValue;
// });


const counterObj = {
	value: 0,

	inc() {
		this.value += 1;
	},

	dec() {
		this.value -= 1;
	},
};

incrementEl.addEventListener("click", () => {
	counterObj.inc();
	valueEl.textContent = counterObj.value;
});

decrementEl.addEventListener("click", () => {
	counterObj.dec();
	valueEl.textContent = counterObj.value;
});