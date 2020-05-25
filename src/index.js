import "./styles.css";

function freshlyOpenedDeck() {
  const deck = [];
  const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

  for (let suit in suits) {
    for (let value in values) {
      deck.push(`${values[value]} of ${suits[suit]}`);
    }
  }
  return deck;
}

let deck = freshlyOpenedDeck();

function render() {
  return `
  <h1>Hello Vanilla!</h1>
  <div class="container">
    <div class="deck">
    ${deck
      .map(card => renderCard({ card, faceDown: true, className: "in-deck" }))
      .join("")}
    </div>
    <div class="hand">
      ${renderCard({ card: deck[0] })}
      ${renderCard({ card: deck[0] })}
      ${renderCard({ card: deck[0] })}
      ${renderCard({ card: deck[0] })}
    </div>
  </div>
  `;
}

function renderCard({ card, faceDown, className = "" }) {
  return `
  <div class="card ${faceDown ? "facedown" : ""} ${className}">
    <div class="card__content">
      <div class="card__front">
        ${card}
      </div>
      <div class="card__back">
        back
      </div>
    </div>
  </div>
  `;
}

function mount() {
  let node = document.getElementById("app");
  node.innerHTML = render();
}

mount();
