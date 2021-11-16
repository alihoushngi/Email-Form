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
  validator(this);

  if (this.type === "email") {
    emailvalidate(this);
  }

  let error = document.querySelectorAll(".error");
  if (
    fullName.value !== " " &&
    email.value !== " " &&
    number.value !== " " &&
    message.value !== " "
  ) {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

function validator(filed) {
  if (filed.value.length > 0) {
    filed.style.borderBottomColor = "#73c34f";
    filed.classList.remove("error");
  } else {
    filed.style.borderBottomColor = "#ec3b6f";
    filed.classList.add("error");
  }
}

function emailvalidate(filed) {
  const emailtext = filed.value;
  if (emailtext.includes("@")) {
    filed.style.borderBottomColor = "#73c34f";
    filed.classList.remove("error");
  } else {
    filed.style.borderBottomColor = "#ec3b6f";
    filed.classList.add("error");
  }
}
