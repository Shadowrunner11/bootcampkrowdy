export class Player {
  deck 
  points = 0

  /**
   * 
   * @param {Deck} deck 
   */
  constructor(deck){
    this.deck = deck
  }

  pullCard(){
    const currentCard = this.deck.randomCard

    // this.points = this.points + currentCard.value
    this.points += currentCard.value
  }

}
