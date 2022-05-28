import createElement from '../../assets/lib/create-element.js'

const table = createElement(`
        <div id="holder" class="container_half">
        <div class="card">
          <div class="card__top">
            <img src="" class="card__image" alt="product">
            <span class="card__price"></span>
          </div>
          <div class="card__body">
            <div class="card__title"></div>
            <button type="button" class="card__button">
              <img src="" alt="icon">
            </button>
          </div>
        </div>
        </div>
`)

export default class ProductCard {
  constructor(product) {
    this.product = product
    this.elem = this.render()
  }

  render () {
    this.elem = document.createElement('div')
    this.elem.innerHTML = table;
    this.elem.innerHTML = `
    <div id="holder" class="container_half">
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">${`€` + this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button" onclick = ''>
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    </div>
    `
  
    let btn = this.elem.querySelector('.card__button');
    
    btn.addEventListener('product-add', function(){
      
    })

      let customEvent = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true
      });

      btn.addEventListener('click', (event) => {
        event.target.dispatchEvent(customEvent)
      })

    return this.elem
  }
}