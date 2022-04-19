"Use strict";


const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");
const background = document.getElementById("form-container");
const disppaly = document.getElementById("welcome");

button.addEventListener("click", (e) => {
  e.preventDefault();
  !background.classList.contains("bg-color")
    ? background.classList.add("bg-color")
    : background.classList.remove("bg-color");
  disppaly.textContent = `Welcome ${name.value} Please check your email ${email.value}`;

  name.value = email.value = password.value = "";
  console.log(name.value, email.value, password.value);
});
