const app= Vue.createApp({
    data(){
        return{
            /*relacionanndo componente- ahhora hacemos el cart un array[]*/
            cart:[],
            premium: true,
        }
    },
    methods:{
        /*emite el evento fuera del componente*/
        updateCart(id){
            this.cart.push(id)
        }
    }

})
