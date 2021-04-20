window.addEventListener("scroll", function () {
  let footer = document.querySelector(".icon-bar");
  let windowPosition = window.scrollY > 3000;

  footer.classList.toggle("scrolling-active", windowPosition);
});
let TopSrollBtn = document.querySelector(".top-sroll-btn");
window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 300;
  TopSrollBtn.classList.toggle("TopSrollBtn-active", windowPosition);
});
TopSrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Wrap every letter in a span

var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// Custom Script
const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const emaildata = document.querySelector(".email");
const messege = document.querySelector(".messege");
const input = document.querySelectorAll(".input");
const btn = document.querySelectorAll("#submit_btn");
const formGroup = document.querySelectorAll(".form-group");

function valdiate() {
  let nameVal = fullName.value.trim();
  let phoneVal = phone.value.trim();
  let emailVal = emaildata.value.trim();
  let messegeVal = messege.value.trim();

  var atSymbol = emailVal.indexOf("@");
  var dot = emailVal.lastIndexOf(".");
  // // validate name
  if (nameVal === "") {
    setErrMsg(fullName, "Name can not be blank");
  } else if (nameVal.length <= 3) {
    setErrMsg(fullName, "Name atleast 4 character");
  } else if (!isNaN(nameVal)) {
    setErrMsg(fullName, "Not Valid Formate");
  } else {
    setSuccessMsg(fullName);
  }

  // validate phone
  if (phoneVal === "") {
    setErrMsg(phone, "Phone Can not be blank");
  } else if (phoneVal.length != 10) {
    setErrMsg(phone, "Mobile number must have 10 digit");
  } else if (isNaN(phoneVal)) {
    setErrMsg(phone, "Not a Valid Mobile Number");
  } else {
    setSuccessMsg(phone);
  }

  // Validate Email
  if (emailVal === "") {
    setErrMsg(emaildata, "Email Can not be blank");
  } else if (atSymbol < 1) {
    setErrMsg(emaildata, "Not Valid Email");
  } else if (dot <= atSymbol + 2) {
    setErrMsg(emaildata, "Not Valid Email");
  } else if (dot === emailVal.length - 1) {
    setErrMsg(emaildata, "Not Valid Email");
  } else {
    setSuccessMsg(emaildata);
  }
  // validate Message
  if (messegeVal.length <= 20) {
    setErrMsg(messege, "Message more than 20 character");
  } else {
    setSuccessMsg(messege);
  }
}
function setErrMsg(input, errMsg) {
  let formGroup = input.parentElement;
  formGroup.className = "form-group error";
  let small = formGroup.querySelector("small");
  small.innerText = errMsg;
}
function setSuccessMsg(input) {
  let formgroup = input.parentElement;
  formgroup.className = "form-group success";
}

function ReadyToSend() {
  valdiate();
  let success = document.querySelectorAll(".success");
  if (success.length === 4) {
    return true;
  }
  return false;
}
