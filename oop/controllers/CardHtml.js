export class CardHtml extends HTMLElement {
  card

  constructor(card){
    super()
 
    this.card = card
  }
  
  render(node = document.body ){
    this.textContent = 'Esta es una carta'
    node.appendChild(this)
  }
}

customElements.define('card-html', CardHtml)
