const textoNome = "Olá, meu nome é João Lucas";
const element = document.querySelector(".text");
const h1 = document.createElement("h1");
element.appendChild(h1);
const writeTime = 100;
console.log(element);
let indexChar = 0;
function writeText() {
  h1.textContent = textoNome.substring(0, indexChar);
  indexChar++;
  setTimeout(writeText, writeTime);
}

document.addEventListener("DOMContentLoaded", () => {
  writeText();
  console.log(element);
});
