export class Card {
  value
  suit
  imageURL
  
  constructor(value, suit, imageURL){
    if(!Card.isValidValue(value))
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
  static isValidValue(value){
    if(typeof value !== "number")
      throw new Error("no es un numero")
    
    return Number.isInteger(value) && value > 0 && value < 14
  }
}
