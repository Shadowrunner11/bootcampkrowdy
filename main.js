// Black jack

// Tener una baraja de 52 cartas que son 4 grupos que van del 1 al 13


// defincion de la funcion
function getRandomInteger(maxLimit, minLimit = 1){
  const randomNumber = Math.random()*(maxLimit - minLimit) + minLimit

  return Math.round(randomNumber)
}

const cardSuits = [ 
  "💗",
  "♦️",
  "♠️",
  "♣️" 
]

function getRandomCard(){
  const randomValue = getRandomInteger(13)

  const randomIndexOfSuit = getRandomInteger(0, 3) // 0 - 3

  const suit = cardSuits[randomIndexOfSuit]

  return "Tu carta es " + randomValue + " de " + suit
}


// api del navegador
const buttonChangeCard = document.querySelector('[data-button="create-card"]')
const textPrompt = document.querySelector('[data-text="card-result"]')

buttonChangeCard?.addEventListener('click', () => {
  const cardText = getRandomCard()

  textPrompt.textContent = cardText

})

