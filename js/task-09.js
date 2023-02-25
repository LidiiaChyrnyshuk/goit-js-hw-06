function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector(".change-color");
const textBackgroundColorName = document.querySelector('.color');

bodyEl.addEventListener('click', handleChangeColorClick);

function handleChangeColorClick(event) {
  const currentColor = getRandomHexColor();
  textBackgroundColorName.textContent = currentColor;
  bodyEl.style.backgroundColor = currentColor;
};
