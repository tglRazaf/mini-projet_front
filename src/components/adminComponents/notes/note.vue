<template>
    <div class="notes">
        <h1>Notes</h1>
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'notes',
    data() {
        return {
            // route: $route.params.id
        }
    },
    // mounted() {
    //     axios.get(`http://localhost:7000/`)
    // },
}
</script>

<style lang="css" src="../admin.css">
    
</style>