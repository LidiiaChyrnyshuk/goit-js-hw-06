// const inputEl = document.querySelector("#font-size-control");
// const textInputEl = document.querySelector('#text');

// inputEl.addEventListener("input", handleChangeFontSize);
// textInputEl.style.fontSize = `${inputEl.value}px`;

// function handleChangeFontSize(event) {
  
//   textInputEl.style.fontSize = `${event.currentTarget.value}px`;
// }

const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

function getChangeTextSize() {
	textEl.style.fontSize = `${inputEl.value}px`;
}

getChangeTextSize();

inputEl.addEventListener("input", () => {
	getChangeTextSize();
});