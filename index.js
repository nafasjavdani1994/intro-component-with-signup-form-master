const form = document.getElementById("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  // Prevent the default behavior of submitting a form
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = fName.value.trim();
  const lastNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (firstNameValue === "") {
    setErrorFor(fName, "First Name cannot be empty");
  } else {
    setSuccessFor(fName, "First Name submitted successfully");
  }

  if (lastNameValue === "") {
    setErrorFor(lName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lName, "Last Name submitted successfully");
  }

  if (emailValue == "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email, "Email submitted successfully");
  }

  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
} else {
    setSuccessFor(password, "Password submitted successfully");
}
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "input-container error";

  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "input-container success";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
