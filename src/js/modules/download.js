export default class Download {
  constructor(triggerSelector) {
    this.btns = document.querySelectorAll(triggerSelector);
    this.path = "./assets/img/Bitmap.jpg";
  }
  setDownload(path) {
    const link = document.createElement("a");
    link.setAttribute("download", "picture_1");
    link.setAttribute("href", path);
    link.style.display = "none";
    document.body.append(link);
    link.click();
    link.remove();
  }
  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.setDownload(this.path);
      });
    });
  }
}
