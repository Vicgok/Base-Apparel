"use strict";

const errorIcon = document.querySelector(".error-icon");
const emailID = document.querySelector("#email");
const message = document.querySelector(".message");
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+[.]+[a-zA-Z+]+$/;

function validateEmail() {
  emailRegex.test(emailID.value) ? success() : error();
}

function error() {
  errorIcon.classList.remove("hide");
  message.classList.remove("hide");
}

function success() {
  errorIcon.classList.add("hide");
  message.classList.add("hide");
}
