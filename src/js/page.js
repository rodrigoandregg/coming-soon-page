const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const emailInput = document.querySelector(".page__input");
const alertMsg = document.querySelector(".page__alert");
const btn = document.querySelector(".page__submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

const validateEmail = () => {
  if (validEmail.test(emailInput.value)) {
    alertMsg.style.opacity = "1";
    alertMsg.style.color = "green";
    alertMsg.textContent = "Email is valid, thank you!";
    return true;
  } else {
    alertMsg.style.opacity = "1";
    return false;
  }
};
