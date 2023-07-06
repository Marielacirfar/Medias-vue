app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Deja tu comentario</h3>
        <label for="name">Nombre</label>
        <input id="name" v-model="name">

        <label for="review">Comentario</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Enviar">
    
    
    </form>`,
    data() {
        return{
            name:'',
            review:'',
            rating:null,
        }
    },
    methods: {
        onSubmit(){
            if (this.name === '' || this.review === '' || this.rating === null){
                alert('La revisión está incompleta. Por favor complete todos los campos.')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name= ''
            this.review= ''
            this.rating= null
        }
    }
    
    
})