let counterValue = 0;

const counterEl = document.querySelector("#counter");
const decrementBtnEl = counterEl.firstElementChild;
const incrementBtnEl = counterEl.lastElementChild;
const valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", () => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", () => {
	counterValue += 1;
	valueEl.textContent = counterValue;
});
