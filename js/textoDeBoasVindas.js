const textoNome = "Olá, meu nome é João Lucas";
const element = document.querySelector(".text");
const writeTime = 100;
let indexChar = 0;

const h1 = document.createElement("h1");
element.appendChild(h1);

function writeText() {
  h1.textContent = textoNome.substring(0, indexChar);
  indexChar++;
  setTimeout(writeText, writeTime);
}

document.addEventListener("DOMContentLoaded", () => {
  writeText();
});
