export class Card {
  value
  suit
  imageURL
  
  constructor(value, suit, imageURL){
    if(!this.isValidValue(value))
      throw new Error("no es una carta valida")

    this.value = value
    this.suit = suit
    this.imageURL = imageURL
  }

  toString(){
    return this.value + " de " +  this.suit
  }

  /**
   * 
   * @param {number} value 
   */
  isValidValue(value){
    if(typeof value !== "number")
      throw new Error("no es un numero")

    return Card.isValidClassicValue(value)
  }

  static isValidClassicValue(value){
    return Number.isInteger(value) && value > 0 && value < 14
  }
}

