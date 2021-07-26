<template>
    <div class="tableView">
        <h2 class="subtitle is-3">Niveau {{niveau}}</h2>
        <table class="table is-fullwidth is-hoverable">
            <thead class="">
                <tr>
                    <td>Id</td>
                    <td>Nom du filière</td>
                    <td>Nombre d'élève</td>
                </tr>
            </thead>
            <tbody v-for="(etude, index) in etudes" :key="index">
                <tr>
                    <td>{{etude.idFiliere}}</td>
                    <td>{{etude.nom_filiere}}</td>
                    <td :nombre="getFiliersCount(etude.nom, niveau)"></td>
                    <td><router-link :class="cls()" class="button is-small" :to="'/admin/section3/'+etude.nom_filiere+'/'+niveau">Voir plus</router-link></td>
                </tr>
            </tbody>
        </table>
        <hr>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'tableView',
    props: {
        etudes: Array,
        niveau: Number,
    },
    data() {
        return {
            count: []
        }
    },
    methods: {
        getFiliersCount: function(nom, annee){
            axios.get(`http://localhost:7000/filiere/count/${nom}/${annee}`)
            .then(res => {
                return res.data
            })
        },
        cls(){
            let r = ''
            switch (this.niveau) {
                case 1:
                    r= 'is-warning';
                    break;
                case 2:
                    r= 'is-link';
                    break;
                case 3:
                    r= 'is-danger';
                    break;
                case 4:
                    r= 'is-success';
                    break;
                case 5:
                    r= 'is-info';
                    break;
                default: 'is-light';
                    break;
            }
            return r;
        }       
    },
    mounted() {
        axios.get(`http://localhost:7000/filiere/count/isaia/2`)
            .then(res => {
                console.log(res.data);
            })
    },
}
</script>