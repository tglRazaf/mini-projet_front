<template >
    <div class="section">
        <div class="section-title">
            <h1 class="title">Branche {{$route.params.id}}</h1>
        </div>
        <br/>
        <tableView :etudes="filieres[0]" :niveau="1" id="1">
            <!-- le niveau n'est pas necessaire pour cette route mais pour la section 3 -->
        </tableView>
        <tableView :etudes="filieres[1]" :niveau="2" id="2">
        </tableView>
        <tableView :etudes="filieres[2]" :niveau="3" id="3">
        </tableView>
        <tableView :etudes="filieres[3]" :niveau="4" id="4">
        </tableView>
        <tableView :etudes="filieres[4]" :niveau="5" id="5">
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
            filieres: [],

        }
    },
    mounted() {
        let tableView = document.querySelectorAll('.tableView')
        for (let i = 0; i < tableView.length; i++) {
            axios.get(`http://localhost:7000/filiere/lists/${this.routeId}/${tableView[i].id}`)
                .then(res => {
                    console.log(res.data);
                    this.filieres.push(res.data)
                })
        }
        

    },
}
</script>
<style src="./admin.css">

</style>