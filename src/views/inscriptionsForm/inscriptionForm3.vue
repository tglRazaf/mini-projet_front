<template>
    <div class="inscriptionForm">
        <div class="sidebar">
            <img src="../../assets/ZLnU.gif" alt="animation">
        </div>
        <div class="section">
            <h1 class="subtitle is-3">Information sur vos parents</h1>
            <form action="#" class="form">
                <div class="field">
                    <label for="nom_pere">Nom et prénom du père</label>
                    <input class="input" type="text" name="nom_pere" id="nom_pere" placeholder="Nom et prenom" v-model="eleve.nom_pere">
                </div>
                <div class="field">
                    <label for="tel_pere">téléphone(1)</label>
                    <input class="input" type="tel" name="tel_pere" id="tel_pere" placeholder="ex: +261340000100" v-model="eleve.tel_pere">
                </div>
                <div class="field">
                    <label for="nom_mere">Nom et prénom du mère</label>
                    <input class="input" type="text" name="nom_mere" id="nom_mere" placeholder="nom et prénom" v-model="eleve.nom_mere">
                </div>
                <div class="field">
                    <label for="tel_mere">téléphone(2)</label>
                    <input class="input" type="tel" name="tel_mere" id="tel_mere" placeholder="ex: +261340000100" v-model="eleve.tel_mere">
                </div>
                <div class="field">
                    <label for="address_parent">Addresse des parents</label>
                    <input class="input" type="text" name="address_parent" id="address_parent" placeholder="ex: lot 12-plle 31/11 Tanambao II" v-model="eleve.address_parent">
                </div>
            </form>
            <br>
            <button class="button is-warning">
                <router-link to="/inscription/2">
                    Revenir
                </router-link>
            </button>
            <button class="button is-success" @click="setNewStoreValue">
                <router-link to="/">
                    S'incrire
                </router-link>
            </button>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import Store from '@/store/index.js'
export default {
    store: Store,
    name: 'inscriptionForm2',
    data() {
        return {
            eleve:  {
                nom_pere: '',
                tel_pere: '',
                nom_mere: '',
                tel_mere: '',
                address_parent: ''
            }
        }
    },
    computed: {
        getEleveFromStore(){
            return this.$store.state.eleve;
        }
    },
    mounted() {
        console.log(this.getEleveFromStore);
    },
    methods: {
        
        _post: function(data){
        try {
            axios({
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            url: `http://localhost:7000/inscription`,
            data: data
            }).then(response => console.log(response.body))
        } catch (error) {
            console.log(error)
        }
        },
        setNewStoreValue(){
            this.$store.commit('mutationFree', this.eleve);
            this._post(this.getEleveFromStore);
        },
  },
}
</script>

<style src="../../../public/style/bulma.min.css"></style>
<style src="./inscription.css"></style>