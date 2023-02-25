const inputEl = document.querySelector("#font-size-control");
const textInputEl = document.querySelector('#text');

inputEl.addEventListener("input", handleChangeFontSize);
textInputEl.style.fontSize = `${inputEl.value}px`;

function handleChangeFontSize(event) {
  
  textInputEl.style.fontSize = `${event.currentTarget.value}px`;
}