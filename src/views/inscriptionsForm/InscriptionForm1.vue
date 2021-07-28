'<template>
    <div class="inscriptionForm">
        <div class="sidebar">
            <img src="../../assets/XOsX.gif" alt="animation">
        </div>
        <div class="section">
            <h1 class="subtitle is-3">Informations personnelles</h1>
            <form>
                <div class="field">
                    <label for="nom">nom</label>
                    <input class="input" type="text" name="nom" id="nom" placeholder="Votre nom" v-model="eleve.nom">
                </div>
                <div class="field">
                    <label for="prenom">prénom</label>
                    <input class="input" type="text" name="prenom" id="prenom" placeholder="Votre prenom" v-model="eleve.prenom">
                </div>
                <div class="field">
                    <label for="age">Date de naissance</label>
                    <input class="input" type="date" name="date_de_naissance" id="date_de_naissance" v-model="eleve.date_de_naissance">
                </div>
                <filiereFormField :eleve="eleve"/>
                <div class="field">
                    <label for="niveau">Niveau </label>
                    <select name="niveau" id="niveau" class="input" v-model="eleve.niveau">
                        <option value="1">1 ère</option>
                        <option value="2">2 ème</option>
                        <option value="3">3 ème</option>
                        <option value="4">4 ème</option>
                        <option value="5">5 ème</option>
                    </select>
                </div>
                <div class="field">
                    <label for="past_ecole">Ecole anterieur</label>
                    <input class="input" type="text" name="pat_ecole" id="past_ecole" placeholder="Votre école d'origine" v-model="eleve.past_ecole">
                </div>
            </form>
            <br>
            <button class="button is-link is-loadind" @click="setNewStoreValue">
                <router-link to="/inscription/2">
                    Suivant
                </router-link>
            </button>
        </div>
    </div>
</template>


<script>
import Store from '@/store/index.js'
import filiereFormField from '@/components/filiereFormField.vue'
export default {
    sore: Store,
    name: 'inscriptionForm1',
    components: {filiereFormField},
    data() {
        return{
            eleve:  {
                nom: '',
                prenom: '',
                date_de_naissance: '',
                filiere: '',
                niveau: 0,
                past_ecole: '',
            },
        }
    },
    computed: {
        getEleveFromStore(){
            return this.$store.state.eleve;
        },
    },
    methods: {
        setNewStoreValue(){
            this.$store.commit('mutationOne', this.eleve)
        },
    },

}
</script>

<style src="../../../public/style/bulma.min.css"></style>
<style src="./inscription.css"></style>