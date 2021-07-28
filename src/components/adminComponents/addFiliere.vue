<template>
    <div class="addFiliere-conatiner">
        <center>
            <h1 class="title">Ajouter/Supprimer une filiere</h1>
        </center>
        <div class="columns">
            <div class="column is-4" v-for="(branche, index) in branches" :key="index">
                <cardFiliere :nom="branche.nom_branche"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cardFiliere from './cardFiliere.vue'
export default {
    name: 'addFiliere',
    components:{cardFiliere},
    data() {
        return {
            branches: []
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/all/brancheFilieres`)
            .then(res => {
                this.branches= res.data
            })
    },
}
</script>

<style src="./admin.css"></style>

