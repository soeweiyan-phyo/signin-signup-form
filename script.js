const container = document.querySelector(".container");
const signupBtn = document.querySelector(".signup-btn");
const signinBtn = document.querySelector(".signin-btn");

if (container && signupBtn && signinBtn) {
  signupBtn.addEventListener("click", () => {
    container.classList.add("change");
  });
  signinBtn.addEventListener("click", () => {
    container.classList.remove("change");
  });
}
