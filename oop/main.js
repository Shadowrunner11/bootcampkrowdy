import { Deck } from "./controllers/deck.js";
import { Player } from "./controllers/player.js";
// sacar una carta
// si la cantidad total en la mesa del jugador es mator, perdio
// si la cantidad no es mayor q 21, aun no pierde
// y se le pueda dar la opcion de quedar ahi y seguir sacando
// si decide parar, se compara su total con el de la mesa
// si la mesa tiene mas, entonces pierde
// la mesa tambien saca en cada turno

const legalDeck = Deck.defaultDeck()

const [ table, player ] = [ 
  new Player(legalDeck), 
  new Player(legalDeck) 
]

const [ buttonPullCard, pointsTable, pointsPlayer, status ] = [
  '[data-button="pull-card"]',
  '[data-text="points-table"]',
  '[data-text="points-player"]',
  '[data-text="status"]'
].map(selector => document.body.querySelector(selector))

console.log(buttonPullCard)

buttonPullCard?.addEventListener("click", ()=>{
  pullLocalCard(table, pointsTable)
  pullLocalCard(player, pointsPlayer)

  if(table.points > 21 || player.points === 21){
    status.textContent = 'ganaste';

    return; 
  }

  if(player.points > 21 || table.points === 21){
    status.textContent = 'perdiste';

    return; 
  }
})

function pullLocalCard(player, textElement){
  player.pullCard()
  textElement.textContent = player.points
}
