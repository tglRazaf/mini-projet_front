<template>
    <div>
        <div class="modal">
            <div class="modal-content">
                <div class="modal-card">
                    <div class="modal-card-head ">
                        <h2 class="modal-card-title">texte</h2>
                        <div class="delete" @click="_toggleModal"></div>
                    </div>
                    <div class="modal-card-body">
                        <div class="field">
                            <label for="nomFiliere">Nom du filière</label>
                            <input class="input is-small" type="text" name="nomFiliere" placeholder="Entrer le nom du filière" v-model="nameToAdd">
                        </div>
                    </div>
                    <div class="modal-card-foot">
                        <a href="#" class="button is-small is-success" @click="_addNewFiliere">Ajouter</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h2 class="subtitle">{{nom}}</h2>
            </div>
            <div>
            <div class="card-body" v-for="(branche, index) in branches" :key="index">
                <h2>{{branche.nom_filiere}}</h2>
                <a href="#" class="button is-small is-danger is-outlined" @click="_removeFiliere(branche.idFiliere)"><i class="fa fa-trash"></i></a>
            </div>
            </div>
            <div class="card-footer">
                <div class="buttons">
                    <button class="button is-small is-success" @click="_toggleModal">Ajouter</button>
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
            nameToAdd: ''
        }
    },
    methods: {
        _toggleModal(){
            document.querySelector('.modal').classList.toggle('is-active')
        },
        _addNewFiliere(){
            console.log(this.nom);
        },
        _removeFiliere(id){
            let ok = confirm('vous voulez vraiment supprimer')
            if (ok) console.log(id);
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
</style>
