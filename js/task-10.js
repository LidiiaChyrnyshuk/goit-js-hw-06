function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector('input[type="number"]');

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxEl.innerHTML = "";
  inputEl.value = '';
}

function createBoxes() {
  const amount = inputEl.value;
	let height = 30;
  let width = 30;
  const collectionEl = [];
	for ( let i = 0; i < amount; i += 1) {
    let newDivEl = document.createElement('div');
		newDivEl.style.backgroundColor = getRandomHexColor();
		newDivEl.style.height = `${height + 10 * i}px`;
    newDivEl.style.width = `${width + 10 * i}px`;
    console.log(newDivEl);
    collectionEl.push(newDivEl);
  }
 boxEl.append(...collectionEl);
 console.log(boxEl);
};


