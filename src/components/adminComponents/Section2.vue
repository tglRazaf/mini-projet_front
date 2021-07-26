<template >
    <div class="section">
        <div class="section-title">
            <h1 class="title">Section {{$route.params.id}}</h1>
        </div>
        <br/>
        <tableView :etudes="filieres" :niveau="1">
        </tableView>
        <tableView :etudes="filieres" :niveau="2">
        </tableView>
        <tableView :etudes="filieres" :niveau="3">
        </tableView>
        <tableView :etudes="filieres" :niveau="4">
        </tableView>
        <tableView :etudes="filieres" :niveau="5">
        </tableView>
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
            filieres: []
        }
    },
    methods: {
        getFiliereParAnnee: function (annee) {
            axios.get(`http://localhost:7000/filiere/lists/${this.routeId}/${annee}`)
                .then(res => res.data)
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