export class Player {
  deck 
  points = 0
  cards = []
  /**
   * 
   * @param {Deck} deck 
   */
  constructor(deck){
    this.deck = deck
  }

  pullCard(){
    const currentCard = this.deck.randomCard
    this.cards.push(currentCard)

    // this.points = this.points + currentCard.value
    this.points += currentCard.value
  }
}

export class PlayerHTML extends Player{
  pointsContainer

  constructor(pointsContainer, deck){
    super(deck)

    this.pointsContainer = pointsContainer
  }

  // override
  pullCard(){
    super.pullCard()

    this.pointsContainer.textContent = this.points
  }
}
