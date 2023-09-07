const subscribeBtn = document.querySelector(".subscribe-btn");
const emailInput = document.getElementById("email");
const newsletterContainer = document.querySelector(".newsletter-container");
const successContainer = document.querySelector(".success-container");

subscribeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const errorMessage = document.querySelector(".error-message");

  const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value === "") {
    errorMessage.textContent = "Email address is required";
    errorMessage.style.display = "block";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.background = "hsla(4, 100%, 67%,0.25)";
  } else if (!emailInput.value.match(emailFormat)) {
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.style.display = "block";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.background = "hsla(4, 100%, 67%,0.25)";
  } else {
    const emailSaved = document.querySelector(".email-saved");
    errorMessage.style.display = "none";
    emailInput.style.border = "1px solid hsl(231, 7%, 60%)";
    emailInput.style.background = "transparent";
    newsletterContainer.style.display = "none";
    successContainer.style.display = "flex";
    emailSaved.textContent = emailInput.value;
    emailInput.value = "";
  }
});

const dismissBtn = document.querySelector(".dismiss-btn");
dismissBtn.addEventListener("click", () => {
  successContainer.style.display = "none";
  newsletterContainer.style.display = "flex";
});
