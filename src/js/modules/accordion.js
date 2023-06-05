export default class Accordion {
  constructor(triggerSelector) {
    this.btns = document.querySelectorAll(triggerSelector);
  }
  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.closest(".module__info-show").nextElementSibling;
        content.style.display = "block";
      });
    });
  }
}
