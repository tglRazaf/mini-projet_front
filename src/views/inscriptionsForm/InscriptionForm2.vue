<template>
    <div class="inscriptionForm">
        <div class="sidebar">
            <img src="../../assets/3BBF.gif" alt="animation">
        </div>
        <div class="section">
            <h1 class="subtitle is-3">Contacts et addresse</h1>
            <form action="#" class="form">
                <div class="field">
                    <label for="tel_eleve">téléphone(1)</label>
                    <input class="input" type="tel" name="tel_eleve" id="tel_eleve" placeholder="Votre numero de téléphone" v-model="eleve.tel_eleve">
                </div>
                <div class="field">
                    <label for="tel_eleve2">téléphone(2)</label>
                    <input class="input" type="tel" name="tel_eleve2" id="tel_eleve2" placeholder="Votre 2ème numero(facultatif)" v-model="eleve.tel_eleve2">
                </div>
                <div class="field">
                    <label for="address_eleve">Addresse actuelle</label>
                    <input class="input" type="text" name="address_eleve" id="address_eleve" placeholder="ex: lot 12-plle 31/11 Tanambao II " v-model="eleve.address_eleve">
                </div>
                <div class="field">
                    <label for="e-mail">E-mail</label>
                    <input class="input" type="e-mail" name="e_mail" id="e_mail" placeholder="ex: example@gmail.com" v-model="eleve.e_mail">
                </div>
            </form>
            <br>
            <button class="button is-warning">
                <router-link to="/inscription/1">
                    Revenir
                </router-link>
            </button>
            <button class="button is-link" @click="setNewStoreValue">
                <router-link to="/inscription/3">
                    Suivant
                </router-link>
            </button>
            {{getEleveFromStore.nom}}
        </div>
    </div>
</template>


<script>
import Store from '@/store/index.js'
export default {
    store: Store,
    name: 'inscriptionForm2',
    data() {
        return {
            eleve:  {
                tel_eleve: '',
                tel_eleve2: '',
                address_eleve: '',
                e_mail: '',
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
        setNewStoreValue(){
            this.$store.commit('mutationTwo', this.eleve)
        }
    },
}
</script>

<style src="../../../public/style/bulma.min.css"></style>
<style src="./inscription.css"></style>