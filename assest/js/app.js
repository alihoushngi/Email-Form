// varibels
//get send btn from HTML
const sendBtn = document.querySelector("#sendBtn"),
  fullName = document.querySelector("#name"),
  email = document.querySelector("#email"),
  number = document.querySelector("#number"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form");

// eventListenres
eventListeners();
function eventListeners() {
  //app initializetion
  document.addEventListener("DOMContentLoaded", appInit);

  fullName.addEventListener("blur", validateField);
  email.addEventListener("blur", validateField);
  number.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  // reset btn
  resetBtn.addEventListener("click", resetForm);

  form.addEventListener("submit", submitForm);
}

//function

function appInit() {
  //disable send button on loaded
  sendBtn.disabled = true;
}

function submitForm(e) {
  e.preventDefault();
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "block";

  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "../../assest/images/mail-unscreen.gif";
  sendEmailImg.width = 150;
  sendEmailImg.style.display = "block";

  setTimeout(function () {
    spinner.style.display = "none";

    const loader = document.querySelector("#loaders");
    loader.appendChild(sendEmailImg);

    setTimeout(() => {
      resetForm();
      sendEmailImg.remove();
    }, 5000);
  }, 3000);
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

function resetForm(e) {
  form.reset();
}
