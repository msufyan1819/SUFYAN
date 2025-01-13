// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.querySelector(".game-board");
    const moveCountElement = document.getElementById("move-count");
    let cardValues = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
    let flippedCards = [];
    let matchedCards = [];
    let moveCount = 0;
  
    // Shuffle the card values
    function shuffleCards() {
      for (let i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]]; // Swap
      }
    }
  
    // Create the card elements and add them to the game board
    function createCards() {
      shuffleCards();
      cardValues.forEach(value => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="card-value">${value}</div>`;
        card.addEventListener("click", () => flipCard(card, value));
        gameBoard.appendChild(card);
      });
    }
  
    // Flip the card and check if it matches with another card
    function flipCard(card, value) {
      if (flippedCards.length === 2 || card.classList.contains("flipped") || card.classList.contains("matched")) return;
  
      card.classList.add("flipped");
      flippedCards.push(card);
  
      if (flippedCards.length === 2) {
        moveCount++;
        moveCountElement.textContent = moveCount;
  
        const [card1, card2] = flippedCards;
        if (card1.querySelector(".card-value").textContent === card2.querySelector(".card-value").textContent) {
          card1.classList.add("matched");
          card2.classList.add("matched");
          matchedCards.push(card1, card2);
          flippedCards = [];
  
          if (matchedCards.length === cardValues.length) {
            setTimeout(() => alert("You won!"), 500);
          }
        } else {
          setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
          }, 1000);
        }
      }
    }
  
    createCards();
  });
  