app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
          <div class="product-container">
            <div class="product-image">
              <img v-bind:src="image">
            </div>
            <div class="product-info">
              <h1>{{ title }}</h1>

              <p v-if="inStock">En Stock</p>
              <p v-else="inStock">Agotado</p>
              <p>Envío {{shipping}}</p>
              <ul>
                <li v-for="detail in details">{{ detail }}</li>
              </ul>
             <div v-for="(variant, index) in variants" 
             :key="variant.id" 
             @mouseover="updateVariant(index)"
             class="color-circle"
             :style="{backgroundColor: variant.color}">
            
            </div>
             <button 
             class="button" 
             :class="{disabledButton: !inStock}"
             :disabled="!inStock"
             v-on:click="addToCart">Agregar</button>
            </div>
          </div>
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview"></review-form>
        </div>`,
        data(){
            return{
                product: 'Medias',
                brand:'Las mejores',
                selectdVariant: 0,
                details: ['50% algodón', '30% lana', '20% poliéster'],
                variants:[
                    {id: 2234, color:'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                    {id: 2235, color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
                ],
                reviews: []
            }
        },
        methods:{
            /*recibe el evento que esta en el index para agregar unidades al carrito*/
            addToCart(){
                this.$emit('add-to-cart', this.variants[this.selectdVariant].id)
            },
            updateVariant(index){
                this.selectdVariant = index

            },
            addReview(review){
                this.reviews.push(review)
            }

        },
        computed:{
            title(){
                return this.brand + ' ' + this.product
            },
            image(){
                return this.variants[this.selectdVariant].image
            },
            inStock(){
                return this.variants[this.selectdVariant].quantity
            },
            shipping(){
                if (this.premium) {
                    return 'Gratis'
                }
                return 2.99
            },
        }
})