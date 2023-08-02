const container = document.querySelector(".container");
const signupBtn = document.querySelector(".signup-btn");
const signinBtn = document.querySelector(".signin-btn");
const headingSpan2 = document.querySelector(".heading-span-2");
const form = document.querySelector(".form");

const clearForm = () => {
  document.querySelectorAll(".form-input-wrapper").forEach((item) => {
    item.className = "form-input-wrapper";
  });
  form.reset();
};

signupBtn.addEventListener("click", () => {
  container.classList.add("change");
  setTimeout(() => {
    headingSpan2.textContent = "Up";
  }, 200);
  form.className = "form sign-up";
  clearForm();
});

signinBtn.addEventListener("click", () => {
  container.classList.remove("change");
  setTimeout(() => {
    headingSpan2.textContent = "In";
  }, 200);
  form.className = "form sign-in";
  clearForm();
});

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const error = (input, message) => {
  const inputWrapper = input.parentElement;
  inputWrapper.classList = "form-input-wrapper error";
  inputWrapper.querySelector(".message").textContent = message;
};

const success = (input) => {
  const inputWrapper = input.parentElement;
  inputWrapper.classList = "form-input-wrapper success";
};

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      if (input.id === "password2") {
        error(input, "Password confirmation is required");
      } else {
        error(input, `${input.id} is required`);
      }
    } else {
      success(input);
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.classList[1] === "sign-up") {
    checkRequiredFields([username, email, password, password2]);
  } else {
    checkRequiredFields([email, password]);
  }
});
