var email = document.getElementById("email");
var button = document.getElementById("button");
var errorP = document.getElementById("error-p");
var signUp = document.getElementById("sign-up");
var image = document.getElementById("image");
var success = document.getElementById("success");
var successButton = document.getElementById("success-btn");
var mail = document.getElementById("mail");

button.addEventListener("click", function () {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    email.classList.add("input-error");
    errorP.innerText = "Valid email required";
  } else {
    signUp.style.display = "none";
    image.style.display = "none";
    success.style.display = "block";

    mail.innerText = email.value;
  }
});

successButton.addEventListener("click", function () {
  signUp.style.display = "block";
  image.style.display = "block";
  success.style.display = "none";
});
