const textInputValidatorEl = document.querySelector("#validation-input");
const textInputValidatorLength =
	textInputValidatorEl.getAttribute("data-length");
console.log(Number(textInputValidatorLength));

// textInputValidatorEl.addEventListener("blur", (event) => {
// 	if (event.currentTarget.value.trim().length === Number(textInputValidatorLength)) {
// 		event.target.style.borderColor =
// 			textInputValidatorEl.classList.add("valid");
// 		event.target.style.borderColor =
// 			textInputValidatorEl.classList.remove("invalid");
// 	} else {
// 		event.target.style.borderColor =
// 			textInputValidatorEl.classList.remove("valid");
// 		event.target.style.borderColor =
// 			textInputValidatorEl.classList.add("invalid");
// 	}
// });

const classToggle = (first, second) => {
	inputEl.classList.add(first);
	inputEl.classList.remove(second);
};

inputEl.addEventListener("blur", () => {
	inputEl.value.trim().length === Number(inputEl.getAttribute("data-length"))
		? classToggle("valid", "invalid")
		: classToggle("invalid", "valid");
});