<template>
    <div class="field" >
        <label for="filiere">Filière : </label>
        <select name="filiere" id="filiere" class="input select" v-model="eleve.filiere">              
        </select>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'filiereField',
    props: {
        eleve: Object
    },
    data() {
        return {
            
        }
    },
    mounted() {
        let select = document.getElementById("filiere")

        axios.get(`http://localhost:7000/all/brancheFilieres`)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    console.log('res', i, res.data[i].nom_branche.toLowerCase());
                    select.innerHTML+= `
                        <optgroup label="${res.data[i].nom_branche}" id="${res.data[i].idBranche}">
                        </optgroup>
                    ` 
                    axios.get(`http://localhost:7000/filiere/lists/${res.data[i].nom_branche}`)
                        .then(response => {
                            for (let j = 0; j < response.data.length; j++) {
                                console.log(response.data[j]);
                                document.getElementById(`${res.data[i].idBranche}`).innerHTML+= `
                                    <option value="${response.data[j].nom_filiere}">${response.data[j].nom_filiere}</option>
                                `
                            }
                        })
                }
            })
        
    },
}
</script>