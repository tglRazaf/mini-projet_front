<template >
    <div class="section">
        <div class="section-title">
          <h1 class="title">Section {{$route.params.id}}</h1>
        </div>
        <br/>
        <h2 class="subtitle is-3">Niveau 1</h2>
            <tableView :etudes="filieres"/>
        <hr>
        <h2 class="subtitle is-3">Niveau 2</h2>
            <tableView :etudes="filieres"/>
        <hr>
        <h2 class="subtitle is-3">Niveau 3</h2>
            <tableView :etudes="filieres"/>
        <hr>
        <h2 class="subtitle is-3">Niveau 4</h2>
            <tableView :etudes="filieres"/>
        <hr>
        <h2 class="subtitle is-3">Niveau 5</h2>
            <tableView :etudes="filieres"/>
    </div>
</template>

<script>
import tableView from './tableView.vue'
import axios from 'axios'
export default {
    name: 'Section2',
    components: {tableView},
    data() {
        return {
            routeId: this.$route.params.id,
            filieres: ''
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/filiere/lists/${this.routeId}`)
            .then(res => {
                this.filieres= res.data
            })
    },
}
</script>
<style src="./admin.css">

</style>