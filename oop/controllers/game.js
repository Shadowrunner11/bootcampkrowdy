/**
 * @typedef {import('./deck.js').Deck} Deck
 * @typedef {import('./player.js').PlayerHTML} PlayerHTML
 */

import { PlayerHTML } from './player.js'

export class Game {
  deck
  players
  isOver = false
  status = 'playing'
  
  /**
   * 
   * @param { Deck } deck 
   * @param { HTMLElement[] } pointsContainers
   */
  constructor(deck, pointsContainers){
    console.log(pointsContainers)
    this.deck = deck
    this.players = pointsContainers
      .map(container => new PlayerHTML(container, deck))
  
  }

  async start(){
    await Promise.all(this.players
        .map( player => this.pullInitialCards(player))
      )   
    this.verifyIfPlayerWins()
  }

  pullInitialCards(player){
    return new Promise((resolve, reject)=>{
      if(this.deck.cards.length === 0)
        reject()
  
      player.pullCard()
      player.pullCard()
    
      resolve()
    })
  }

  verifyIfPlayerWins(){
    const [ player1, table ] = this.players

    if(player1.points === 21){
      this.status = 'Black jack'
      this.isOver = true
      
      return
    }

    if(table.points > 21){
      this.status ='Ganaste'
      this.isOver = true

      return
    }

    if(player1.points > 21 || table.points === 21){
      this.status = 'Perdiste'
      this.isOver = true
    }
  }

  get player(){
    return this.players[0]
  }

  get table(){
    return this.players[1]
  }

  get playerWins(){
    return this.table.points > 21 
  }

  get tableWins(){
    return this.table.points > this.player.points && this.table.points < 22
  }


  tablePlays(){ 
    return new Promise((res, rej )=>{
      const intervalId = setInterval(()=>{ 
        this.verifyIfPlayerWins()

        if(this.tableWins){
          clearInterval(intervalId)
          this.status = 'Perdiste'
          return res()
        }

        if(this.isOver){
          clearInterval(intervalId)
          return res()
        }

        this.table.pullCard()
      }, 500)
    })
  }

  playerPlays(){
    this.player.pullCard()

    this.verifyIfPlayerWins()
  }
}
