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

              <p v-if="inStock">In Stock</p>
              <p v-else="inStock">Out of Stock</p>
              <p>shipping {{shipping}}</p>
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
             v-on:click="addToCart">Add to Cart</button>
            </div>
          </div>
        </div>`,
        data(){
            return{
                product: 'Socks',
                brand:'Vue Mastery',
                selectdVariant: 0,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants:[
                    {id: 2234, color:'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                    {id: 2235, color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
                ]
            }
        },
        methods:{
            addToCart(){
                this.cart +=1
            },
            updateVariant(index){
                this.selectdVariant = index
                
    
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
                    return 'Free'
                }
                return 2.99
            },
        }
})