var form = document.querySelector(".special-offer");
var firstName = document.querySelector("#first-name");
var secondName = document.querySelector("#second-name");
var email = document.querySelector("#email");
var submitBtn = document.querySelector("#submit-form");
var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var closeSuccessBtn = document.querySelector("#close-success-popup");
var closeFailureBtn = document.querySelector("#close-failure-popup");
var overlay = document.querySelector(".overlay");

function changeInputColor(element, color) {
  element.style.backgroundColor = color;
}

function formCheckOnSubmit () {
  if ((firstName.checkValidity() !== true ) || (secondName.checkValidity() !== true) || (email.checkValidity() !== true)) {
    changeInputColor(firstName, "red");
    changeInputColor(secondName, "red");
    changeInputColor(email, "red");
    popupFailure.classList.toggle("visually-hidden");
    overlay.classList.toggle("visually-hidden");
  } else {
    changeInputColor(firstName, "white");
    changeInputColor(secondName, "white");
    changeInputColor(email, "white");
    popupSuccess.classList.toggle("visually-hidden");
    overlay.classList.toggle("visually-hidden");
    //form.submit();
  }
}

function closePopup (element) {
  element.classList.toggle("visually-hidden");
  overlay.classList.toggle("visually-hidden");
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    formCheckOnSubmit();
  }
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  formCheckOnSubmit();
});
closeSuccessBtn.addEventListener("click", function(event){
  event.preventDefault();
  closePopup(popupSuccess);
});
closeFailureBtn.addEventListener("click", function(event) {
  closePopup(popupFailure);
});
