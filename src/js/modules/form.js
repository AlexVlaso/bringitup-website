export default class Form {
  constructor(formSelector) {
    this.forms = document.querySelectorAll(formSelector);
    this.messages = {
      loading: "Loading...",
      ok: "Success",
      error: "Error",
    };
    this.path = "./assets/question.php";
  }
  async postData(data) {
    const res = await fetch(this.path, {
      method: "POST",
      body: data,
    });
    return await res.text();
  }
  clearInputs(inputs) {
    inputs.forEach((input) => {
      input.value = "";
    });
  }
  validatePhoneNumber() {
    document.querySelector("#phone").addEventListener("input", function (e) {
      const x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2]
        ? "+" + x[1]
        : "+" + x[1] + "(" + x[2] + ") " + x[3] + (x[4] ? "-" + x[4] : "");
    });
  }
  validateEmail() {
    document.querySelectorAll("[name='email'").forEach((email) => {
      email.addEventListener("keypress", (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }
  onSubmit(form) {
    const data = new FormData(form);
    const status = document.createElement("div");
    status.style.cssText = `
    margin-top:20px;
    color:grey;
    font-size:30px`;
    form.parentNode.append(status);
    status.textContent = this.messages.loading;
    this.postData(data)
      .then((res) => {
        status.textContent = this.messages.ok;
        console.log(res);
      })
      .catch(() => {
        status.textContent = this.messages.error;
      })
      .finally(() => {
        const inputs = form.querySelectorAll("input");
        this.clearInputs(inputs);
        setTimeout(() => {
          status.remove();
        }, 6000);
      });
  }
  init() {
    try {
      this.validateEmail();
      this.validatePhoneNumber();
      this.forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.onSubmit(form);
        });
      });
    } catch (e) {}
  }
}
