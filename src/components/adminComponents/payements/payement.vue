<template>
    <div class="section">
        <h1 class="title has-text-success-dark">Payement</h1>
        <br><br>
        <div class="payement">
            <div class="form">
                <div class="field">
                    <label for="nom" class="label">Nom du payement</label>
                    <div class="control">
                        <input type="text" class="input" placeholder="Ex: versement 1" v-model="payement.nom">
                    </div>
                </div>
                <div class="field">
                    <label for="somme_paye" class="label">Somme payée</label>
                    <div class="control">
                        <input type="number" name="somme_paye" class="input" placeholder="somme payé" v-model="payement.somme_payee">
                    </div>
                </div>
                <div class="field">
                    <label for="somme_restate" class="label">Somme restante</label>
                    <div class="control">
                        <input type="number" name="somme_restante" class="input" placeholder="somme restante à payée" v-model="payement.somme_restante">
                    </div>
                </div>
                <div class="field">
                    <label for="matricule" class="label">Matricule de l'élève</label>
                    <div class="control">
                        <input type="number" name="matricule" class="input" placeholder="matricule de l'élève" v-model="payement.matricule_eleve">
                    </div>
                </div>
                <div class="field">
                    <label for="annee_scolaire" class="label">Année Scolaire</label>
                    <div class="control">
                        <input type="text" name="annee_scolaire" class="input" placeholder="Année scolaire" v-model="payement.annee_scolaire">
                    </div>
                </div>
                <div class="buttons">
                    <a href="/admin/payement" class="button is-success" @click="_post">Valider</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'payement',
    data() {
        return {
            payement: {
                nom: '',
                somme_payee: null,
                somme_restante: null,
                matricule_eleve: null,
                annee_scolaire: ''
            }
        }
    },
    methods: {
        _post(){
            axios({
                method: 'POST',
                url: 'http://localhost:7000/eleve/payement',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                data: this.payement
            }).then(res => {
                if (res.data.err) {
                    alert(res.data.err)
                }
            })
        }
    },
}
</script>

<style src="../admin.css"></style>
<style lang="css">
    /* .payement{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: stretch;
    } */
</style>