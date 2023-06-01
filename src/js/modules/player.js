export default class Player {
  constructor(triggerSelector, overlaySelector) {
    this.btns = document.querySelectorAll(triggerSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.close = this.overlay.querySelector(".close");
  }
  bindBtns() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (document.querySelector("iframe#frame")) {
          this.overlay.style.display = "flex";
        } else {
          const path = btn.dataset.url;
          this.setPlayer(path);
          this.overlay.style.display = "flex";
        }
      });
    });
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }
  init() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindBtns();
  }
  setPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "360",
      width: "640",
      videoId: url,
    });
  }
}
