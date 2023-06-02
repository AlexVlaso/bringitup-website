import Slider from "./slider";

export default class MiniSlider extends Slider {
  decorizeSlide() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = 0.4;
        slide.querySelector(".card__controls").style.opacity = 0.4;
      }
    });
    this.slides[this.curSlide].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[this.curSlide].querySelector(
        ".card__title"
      ).style.opacity = 1;
      this.slides[this.curSlide].querySelector(
        ".card__controls"
      ).style.opacity = 1;
    }
  }
  getNextSlide() {
    this.curSlide++;
    if (this.curSlide >= this.slides.length) {
      this.curSlide = 0;
    }
    const prev =
      this.curSlide === 0 ? this.slides.length - 1 : this.curSlide - 1;
    this.mainBlock.append(this.slides[prev]);
    this.decorizeSlide();
  }
  getPrevSlide() {
    this.curSlide--;
    if (this.curSlide < 0) {
      this.curSlide = this.slides.length - 1;
    }
    this.mainBlock.insertAdjacentElement(
      "afterbegin",
      this.slides[this.curSlide]
    );
    this.decorizeSlide();
  }

  bindTriggers() {
    this.nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.getNextSlide();
      });
    });
    this.prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.getPrevSlide();
      });
    });
  }
  bindAutoplayPause() {
    this.mainBlock.addEventListener("mouseover", () => {
      clearInterval(this.autoplayInterval);
    });
    this.mainBlock.addEventListener("mouseout", () => {
      this.autoplayInterval = setInterval(() => {
        this.getNextSlide();
      }, 5000);
    });
  }
  init() {
    this.mainBlock.style.cssText = `
    display:flex;
    flex-wrap:wrap;
    overflow:hidden;
    `;
    this.decorizeSlide();
    this.bindTriggers();

    if (this.autoplay) {
      this.autoplayInterval = setInterval(() => {
        this.getNextSlide();
      }, 5000);
      this.bindAutoplayPause();
    }
  }
}
