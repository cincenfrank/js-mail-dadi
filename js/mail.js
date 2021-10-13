const allowedEmails = [
  "test@test.test",
  "top@secret.it",
  "sasa@provamicrofono.com",
  "user@email.org",
];
const emailInput = document.getElementById("email-input");
const emailInvalidFeedback = document.querySelector(
  "#email-input~.invalid-feedback"
);
const submitButton = document.getElementById("check-email");
const card = document.getElementById("content-card");
submitButton.addEventListener("click", function () {
  emailInput.classList.remove("is-invalid");
  if (!emailInput.value) {
    emailInput.classList.add("is-invalid");
    emailInvalidFeedback.textContent = "Email can't be empty";
  } else if (!emailInput.value.includes("@")) {
    emailInput.classList.add("is-invalid");
    emailInvalidFeedback.textContent = "Email Address must contain @ symbol";
  } else if (!emailInput.value.includes(".", emailInput.value.search("@"))) {
    emailInput.classList.add("is-invalid");
    emailInvalidFeedback.textContent =
      "Email Address must contain a dot (.) after @ symbol";
  } else {
    const emailToSearch = emailInput.value;
    let emailFound = false;
    for (let i = 0; i < allowedEmails.length; i++) {
      if (allowedEmails[i] === emailToSearch.toLowerCase()) {
        emailFound = true;
        break;
      }
    }
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title", "fs-3");
    const cardSubtitle = document.createElement("p");
    cardSubtitle.classList.add("card-subtitle", "fs-4");
    if (emailFound) {
      cardTitle.textContent = "Welcome Back " + emailToSearch;
      cardSubtitle.textContent = "This is your daily premium content";
      const cardImage = document.createElement("img");
      cardImage.classList.add("card-img");
      const randomImgNumber = Math.floor(Math.random() * 6) + 1;
      cardImage.src = `img/mail-${randomImgNumber}.jpeg`;
      cardImage.alt = "premium image kitten cat";
      card.innerHTML = "";

      card.appendChild(cardTitle);
      card.appendChild(cardSubtitle);
      card.appendChild(cardImage);
    } else {
      cardTitle.textContent =
        'The email address "' + emailToSearch + '" is not registered';
      cardSubtitle.textContent =
        "If you want to have access to our premium contents, please subscribe using the following button";
      const subscribeButton = document.createElement("div");
      subscribeButton.classList.add("btn", "btn-info");
      subscribeButton.textContent = "Subscribe";
      subscribeButton.addEventListener("click", function () {
        allowedEmails.push(emailToSearch.toLowerCase());
        cardTitle.textContent =
          'The email address "' + emailToSearch + '" has been registered!';
        cardSubtitle.textContent =
          "click on check email button to access your premium content.";
        card.removeChild(subscribeButton);
      });
      card.innerHTML = "";
      card.appendChild(cardTitle);
      card.appendChild(cardSubtitle);
      card.appendChild(subscribeButton);
    }
  }
});
