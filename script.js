const mobileNav = document.querySelector("ul")
const burger = document.querySelector(".hamburger")
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");
const form = document.querySelector("#submit-form");

burger.addEventListener("click", function() {
    mobileNav.classList.toggle('active')
    burger.classList.toggle('active')
})

function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const companyName = companyNameEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
       document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
          "Wypełnij to pole!";
    } else {
      if (!letters.test(name)) {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
          "Wpisz tylko litery!";
      } else {
        
      }
    }
    if (email === "") {
       document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
          "Wypełnij to pole!";
    } else {
      if (!letters.test(name)) {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
          "Wpisz tylko litery!";
      } else {
        
      }
    }
  }
  
  function reset() {
    nameEl = "";
    emailEl = "";
    companyNameEl = "";
    messageEl = "";
    document.querySelector(".name-error").innerText = "";
  }