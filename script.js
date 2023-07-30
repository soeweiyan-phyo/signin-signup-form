const container = document.querySelector(".container");
const signupBtn = document.querySelector(".signup-btn");
const signinBtn = document.querySelector(".signin-btn");
const headingSpan2 = document.querySelector(".heading-span-2");

signupBtn.addEventListener("click", () => {
  container.classList.add("change");
  setTimeout(() => {
    headingSpan2.textContent = "Up";
  }, 200);
});

signinBtn.addEventListener("click", () => {
  container.classList.remove("change");
  setTimeout(() => {
    headingSpan2.textContent = "In";
  }, 200);
});
