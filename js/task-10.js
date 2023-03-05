// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215)
// 		.toString(16)
// 		.padStart(6, 0)}`;
// }

// const buttonCreateEl = document.querySelector("button[data-create]");
// const buttonDestroyEl = document.querySelector("button[data-destroy]");
// const boxEl = document.querySelector("#boxes");
// const inputEl = document.querySelector('input[type="number"]');

// buttonCreateEl.addEventListener("click", createBoxes);
// buttonDestroyEl.addEventListener("click", destroyBoxes);

// function destroyBoxes() {
//   boxEl.innerHTML = "";
//   inputEl.value = '';
// }

// function createBoxes() {
//   const amount = inputEl.value;
// 	let height = 30;
//   let width = 30;
//   const collectionEl = [];
// 	for ( let i = 0; i < amount; i += 1) {
//     let newDivEl = document.createElement('div');
// 		newDivEl.style.backgroundColor = getRandomHexColor();
// 		newDivEl.style.height = `${height + 10 * i}px`;
//     newDivEl.style.width = `${width + 10 * i}px`;
//     console.log(newDivEl);
//     collectionEl.push(newDivEl);
//   }
//  boxEl.append(...collectionEl);
//  console.log(boxEl);
// };


function getRandomRgb() {
	const red = Math.round(Math.random(0, 1) * 255);
	const green = Math.round(Math.random(0, 1) * 255);
	const blue = Math.round(Math.random(0, 1) * 255);

	return `rgb(${red},${green},${blue})`;
};

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");
const limitMin = Number(inputEl.min);
const limitMax = Number(inputEl.max);
const step = Number(inputEl.step);

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	amount = inputEl.value;
	if (amount >= limitMin && amount <= limitMax) {
		const arrBoxes = [];
		const initialSizeBox = 30;
		for (let i = limitMin - 1; i <= amount; i += step) {
			let size = initialSizeBox + i * 10;
			const divHtml = `<div style="width: ${size}px; height:${size}px; background-color: ${getRandomRgb()}"></div>`;
			arrBoxes.push(divHtml);
		}
		boxesEl.insertAdjacentHTML("beforeend", arrBoxes.join(""));
	} else {
		alert("Your number is out of limits");
	}
};
function destroyBoxes() {
	boxesEl.innerHTML = "";
	inputEl.value = "";
};