const nameInput = document.getElementById("player-name");
const diceSelect = document.getElementById("dice-select");
const startButton = document.getElementById("start-button");
const playerCol = document.querySelector(".col.player");
const computerCol = document.querySelector(".col.computer");
startButton.addEventListener("click", function () {
  playerCol.innerHTML = "";
  computerCol.innerHTML = "";
  nameInput.classList.remove("is-invalid");
  diceSelect.classList.remove("is-invalid");

  if (!nameInput.value) {
    nameInput.classList.add("is-invalid");
  } else {
    const maxNumber = parseInt(diceSelect.value);
    console.log(maxNumber);
    if (isNaN(maxNumber)) {
      diceSelect.classList.add("is-invalid");
    } else {
      const computerScore = Math.floor(Math.random() * (maxNumber + 1));
      const playerScore = Math.floor(Math.random() * (maxNumber + 1));
      const playerCard = document.createElement("div");
      playerCard.classList.add("card", "align-items-center");
      const playerName = document.createElement("div");
      playerName.classList.add("card-title");
      playerName.textContent = nameInput.value;
      const computerCard = document.createElement("div");
      computerCard.classList.add("card", "align-items-center");
      const computerName = document.createElement("div");
      computerName.classList.add("card-title");
      computerName.textContent = "Agent Smith";
      const playerSubtitle = document.createElement("div");
      playerSubtitle.classList.add("card-subtitle");
      const computerSubtitle = document.createElement("div");
      computerSubtitle.classList.add("card-subtitle");
      const playerImg = document.createElement("img");
      playerImg.classList.add("card-img");
      const computerImg = document.createElement("img");
      computerImg.classList.add("card-img");
      const playerText = document.createElement("div");
      playerText.classList.add("card-text");
      playerText.textContent = playerScore;
      const computerText = document.createElement("div");
      computerText.classList.add("card-text");
      computerText.textContent = computerScore;

      if (playerScore === computerScore) {
        computerSubtitle.textContent = "DEUCE";
        computerImg.src = "img/computer-win.jpeg";
        playerSubtitle.textContent = "DEUCE";
        playerImg.src = "img/player-win.jpeg";
      } else if (playerScore > computerScore) {
        computerSubtitle.textContent = "LOSER";
        computerImg.src = "img/computer-lost.jpg";
        playerSubtitle.textContent = "WINNER";
        playerImg.src = "img/player-win.jpeg";
      } else {
        playerSubtitle.textContent = "LOSER";
        playerImg.src = "img/player-lost.jpeg";
        computerSubtitle.textContent = "WINNER";
        computerImg.src = "img/computer-win.jpeg";
      }

      playerCard.appendChild(playerName);
      playerCard.appendChild(playerImg);
      playerCard.appendChild(playerSubtitle);
      playerCard.appendChild(playerText);
      computerCard.appendChild(computerName);
      computerCard.appendChild(computerImg);
      computerCard.appendChild(computerSubtitle);
      computerCard.appendChild(computerText);

      computerCol.appendChild(computerCard);
      playerCol.appendChild(playerCard);
    }
  }
});
