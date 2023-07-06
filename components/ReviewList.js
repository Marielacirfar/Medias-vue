app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Comentario:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} le dio {{ review.rating }} estrellas
                <br/>
                "{{ review.review }}"
            </li>
        </ul>
    
    
    </div>
    `
})