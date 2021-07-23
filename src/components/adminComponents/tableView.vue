<template>
    <div class="tableView">
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
                    <td>{{index}}</td>
                    <td>{{etude.nom_filiere}}</td>
                    <td>12</td>
                    <td><button class="button is-link is-small">Voir plus   </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'tableView',
    props: {
        etudes: Array
    }
}
</script>