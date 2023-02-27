const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (event) => {
	textOutputEl.textContent = event.currentTarget.value.trim();
	if (event.currentTarget.value.trim() === "") {
		textOutputEl.textContent = "Anonymous";
	}
});
