<template>
    <div class="section">
        <div class="section-title">
            <h1 class="title is-danger">{{$route.params.nom}} {{$route.params.id}}</h1>
        </div>
        <br><br>
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <td>Matricule</td>
                    <td>Nom</td>
                    <td>Prénom</td>
                    <td>Payement</td>
                    <td>Téléphone</td>
                    <td>actions</td>
                </tr>
            </thead>
            <tbody v-for="(eleve, index) in eleves" :key="index">
                <tr>
                    <td>{{eleve.matricule}}</td>
                    <td>{{eleve.nom}}</td>
                    <td>{{eleve.prenom}}</td>
                    <td>{{eleve.nombre_payement}}</td>
                    <td>{{eleve.tel_eleve}}/{{eleve.tel_eleve2}}</td>
                    <td>
                        <a href="#" class="button is-small is-link">Editert</a>
                    </td>
                    <td><router-link class="button is-small is-link" :to="'/admin/notes/'+eleve.matricule">notes</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'section3',
    data() {
        return {
            nom: this.$route.params.nom,
            annee: this.$route.params.id,
            eleves: []
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/filiere/count/${this.nom}/${this.annee}`)
            .then(res => {
                this.eleves= res.data
            })
    },
}
</script>

<style src="../../../public/style/bulma.min.css"></style>
<style src="./admin.css"></style>