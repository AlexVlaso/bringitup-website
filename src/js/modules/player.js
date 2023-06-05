export default class Player {
  constructor(triggerSelector, overlaySelector) {
    this.btns = document.querySelectorAll(triggerSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.close = this.overlay.querySelector(".close");
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  bindBtns() {
    this.btns.forEach((btn, i) => {
      try {
        const closeBlock = btn.closest(
          ".module__video-item"
        ).nextElementSibling;
        if (i % 2 === 0) {
          closeBlock.setAttribute("data-disabled", "true");
        }
      } catch (e) {}

      btn.addEventListener("click", () => {
        this.activeBtn = btn;
        if (
          !btn.closest(".module__video-item") ||
          btn.closest(".module__video-item").dataset.disabled !== "true"
        ) {
          if (document.querySelector("iframe#frame")) {
            this.overlay.style.display = "flex";
            if (this.path !== btn.dataset.url) {
              this.path = btn.dataset.url;
              this.player.loadVideoById({ videoId: this.path });
            }
          } else {
            this.path = btn.dataset.url;
            this.setPlayer(this.path);
            this.overlay.style.display = "flex";
          }
        }
      });
    });
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }
  onPlayerStateChange(state) {
    try {
      const closeBlock = this.activeBtn.closest(
        ".module__video-item"
      ).nextElementSibling;
      const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);
      if (state.data === 0) {
        closeBlock.querySelector(".play__circle").classList.remove("closed");
        closeBlock.querySelector("svg").remove();
        closeBlock.querySelector(".play__circle").append(playBtn);
        closeBlock.querySelector(".play__text").classList.remove("attention");
        closeBlock.querySelector(".play__text").textContent = "play video";
        closeBlock.style.opacity = 1;
        closeBlock.style.filter = "none";
        closeBlock.setAttribute("data-disabled", "false");
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindBtns();
    }
  }
  setPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "360",
      width: "640",
      videoId: url,
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });
  }
}
