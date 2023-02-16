import { defaultSuits } from '../config/constants.js'
import { getRandomInteger } from '../utils/index.js'
import { Card } from './card.js'

export class Deck {
  cards

  /**
   * 
   * @param {Card[]} cards 
   */
  constructor(cards){
    this.cards = cards
  }

  static defaultDeck(){
    const newCards = []

    for (const suit of defaultSuits) {
      Deck.createSuitOfCards(suit, newCards)
    }
  
    return new Deck(newCards)
  }

  static createSuitOfCards(suit, cardsArray = [], maxValue = 13){
    for(let value = 1; value <= maxValue; value++){
      cardsArray.push(new Card(value, suit))
    }

    return cardsArray
  }

  get randomCard(){
    const randomIndex = getRandomInteger(this.cards.length - 1, 0)
    
    const [ cardSliced ] = this.cards.splice(randomIndex, 1)

    return cardSliced
  }
}
