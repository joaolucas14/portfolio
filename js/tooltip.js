const tooltip = document.querySelectorAll("[data-tooltip]");

tooltip.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const tooltipBox = criarToTipBox(this);
  tooltipBox.style.top = event.pageY + "px";
  tooltipBox.style.left = event.pageX + "px";

  onMouseLeave.toolTipBox = tooltipBox;
  this.addEventListener("mouseleave", onMouseLeave);
}

function criarToTipBox(element) {
  const toolTipBox = document.createElement("div");
  const texto = element.getAttribute("aria-label");
  toolTipBox.classList.add("tooltip");
  toolTipBox.innerText = texto;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}

const onMouseLeave = {
  toolTipBox: "",
  element: "",
  handleEvent() {
    this.toolTipBox.remove();
    this.removeEventListener("mouseleave", onMouseLeave);
  },
};
