<template>
    <div class="card-filiere">
        <div class="card">
            <div class="card-header">
                <h2 class="subtitle">{{nom}}</h2>
            </div>
            <div>
            <div class="card-body" v-for="(branche, index) in branches" :key="index">
                <h2>{{branche.nom_filiere}}</h2>
                <a :href="'/admin/filiere/add'" class="button is-small is-danger is-outlined" @click.prevent="_removeFiliere(branche.idFiliere)"><i class="fa fa-trash"></i></a>
            </div>
            </div>
            <div class="card-footer">
                <div class="field is-grouped is-centered">
                    <div class="control">
                        <input class="input is-small" type="text" placeholder="ajouter un filiere" v-model="filiereToAdd">
                    </div>
                    <div class="control">
                        <a href="/admin/filiere/add" class="button is-small is-success" @click.prevent="_addNewFiliere(nom)">Ajouter</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'cardFiliere',
    props: {
        nom: String,
    },
    data() {
        return {
            branches: [],
            nameToAdd: '',
            filiereToAdd: ''
        }
    },
    methods: {
        _addNewFiliere(nom){
            axios.get(`http://localhost:7000/filiere/lists/${nom}`)
                .then(res => {
                    axios({
                        method: 'POST',
                        url: 'http://localhost:7000/add/filiere',
                        data:{
                            nom_filiere: this.filiereToAdd,
                            idBranche: res.data[0].idBranche
                        }
                    }).then(response => console.log(response))
                })
        },
        _removeFiliere(id){
            let ok = confirm('vous voulez vraiment supprimer')
            if(ok){
                axios({
                    method: 'POST',
                    url: 'http://localhost:7000/delete/filiere',
                    data:{
                        idFiliere: id
                    }
                    }).then(response => console.log(response))
            }
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/filiere/lists/${this.nom}`)
            .then(res => {
                this.branches= res.data
            })
    },
}
</script>
<style src="./admin.css"></style>
<style src="../../../public/style/all.css"></style>
<style src="../../../public/style/fontawesome.css"></style>

<style lang="css" scopped>
    .column.is-4 .card{
        padding: 10px;
    }
    .card-body{
        display: flex;
        justify-content: space-between;
    }
    .field.is-grouped.is-centered{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
