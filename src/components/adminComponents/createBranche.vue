<template>
    <div class="branche-container">
        <center>
            <h1 class="title">Créer une branche</h1>
        </center>
        <br>
        <div class="form-section">
            <form id="myForm"  @submit="_submit"> 
                <div class="card">
                    <div class="card-content">
                        <div class="field">
                            <label for="nomBranche">Nom du branche</label>
                            <input class="input is-small" type="text" name="nomBranche" id="nomBranche" placeholder="Entrer le nom du branche" v-model="nomBranche">
                        </div>
                        <div class="filiere-form">

                        </div>
                    </div>
                    <div class="card-footer buttons">
                        <a href="/admin/branche/create" type="submit" class="button is-success is-small" @click="_submit">Valider</a>                        
                    </div>
                </div>
                <br>                
            </form>
            <button type="button" class="button is-link is-small" @click.prevent="_addHtmlField">ajouter</button>
        </div>
        <h2>Tsy adino le manisy fanalavana nom branche ahh</h2>
        <h1>sy date de la creation</h1>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'createBranche',
    data() {
        return {
            nomBranche: '',
            nbrFil: 0,
            filieres: []
        }
    },
    methods: {
        _addHtmlField(){
            ++this.nbrFil
            document.querySelector('.filiere-form').innerHTML += `
                <div class="field">
                    <label for="filiere">Nom du filiere ${this.nbrFil}</label>
                    <input class="input is-small" type="text" name="filiere" id="filiere${this.nbrFil}" placeholder="Entrer le nom du filiere">
                </div>
            `
        },
        _addFieldValue(){
            for (let i = 0; i < this.nbrFil; i++) {
                this.filieres.push(`${document.getElementById(`filiere${i+1}`).value}`);
            }
        },
        _submit(){
            this._addFieldValue()
            axios({
                method: 'POST',
                url: 'http://localhost:7000/add/branche',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                data: {
                    nomBranche: this.nomBranche,
                    filieres: this.filieres
                }
            }).then(res => console.log(res))
        }
    },
}
</script>

<style src="./admin.css"></style>
<style lang="css" scoped>
    .card-footer{
        padding-left: 20px;
    }
</style>