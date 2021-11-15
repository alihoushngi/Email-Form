// varibels
//get send btn from HTML
const sendBtn = document.querySelector("#sendBtn"),
  fullName = document.querySelector("#name"),
  email = document.querySelector("#email"),
  number = document.querySelector("#number"),
  message = document.querySelector("#message");

// eventListenres
eventListeners();
function eventListeners() {
  //app initializetion
  document.addEventListener("DOMContentLoaded", appInit);

  fullName.addEventListener("blur", validateField);
  email.addEventListener("blur", validateField);
  number.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
}

//function

function appInit() {
  //disable send button on loaded
  sendBtn.disabled = true;
}

function validateField() {
  console.log("yes");
}
