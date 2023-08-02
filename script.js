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

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    error(input, `${input.id} must be less than ${max} characters`);
  } else {
    success(input);
  }
};

const passwordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    error(input2, "Passwords do not match");
  }
};

const checkEmail = (input) => {
  const regEx =
    /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  if (regEx.test(input.value.trim())) {
    success(input);
  } else {
    error(input, "Email is not valid");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.classList[1] === "sign-up") {
    checkRequiredFields([username, email, password, password2]);
    checkLength(username, 2, 15);
    checkLength(password, 8, 25);
    passwordsMatch(password, password2);
  } else {
    checkRequiredFields([email, password]);
  }
  checkEmail(email);
});
