/// <reference types="./global" />

import { Deck } from "./controllers/deck.js";
import { Game } from "./controllers/game.js";


// mesa saca dos cartas
// y al mismo tiempo se le da al jugador dos cartas

// si el jugador con sus dos cartas ya llego 21, es un blackjack, es decir gano
// y acaba el juego


// si se pasa de 21 las dos primeras cartas, pierdo el juego

// en cualquier caso, acaba el juego, sino


// jugador tiene dos opciones: pedir o parar

// si el jugador decide parar, enotnces la mesa saca cartas una a una
// hasta que gane al puntaje del jugador o pase de 21

const [ 
  buttonPullCard,
  buttonStop,
  pointsTable,
  pointsPlayer,
  status,
  restartButton
] = [
  '[data-button="pull-card"]',
  '[data-button="stop"]',
  '[data-text="points-table"]',
  '[data-text="points-player"]',
  '[data-text="status"]',
  '[data-button="restart"]'
].map( selector => document.querySelector(selector))

let game = new Game(
  Deck.defaultDeck(), 
  [pointsPlayer, pointsTable]
)

window.game = game

game.start()
  .then(()=>{
    status.textContent = game.status
  })


buttonPullCard?.addEventListener("click", ()=>{
  if(game.isOver)
    return 

  game.playerPlays()

  status.textContent = game.status
})


buttonStop?.addEventListener("click", async ()=>{
  if(game.isOver)
    return

  await game.tablePlays()

  status.textContent = game.status
})


restartButton?.addEventListener("click", ()=>{
  game = new Game( 
    Deck.defaultDeck(), 
    [pointsPlayer, pointsTable]
  )

  game.start()
    .then(()=>{
      status.textContent = game.status
    })
})

