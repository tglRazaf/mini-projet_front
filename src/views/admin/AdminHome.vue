<template>
  <div id="admin_home">
    <div class="header">
      <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-start">
        <h2 class="subtitle is-5 navbar-item">
          XXXschool--<i class="fab fa-xing"></i>
        </h2>
      </div>
      <div class="navbar-end">
        <router-link to="/admin" class="navbar-item">Acceuil</router-link>
        <a href="#" class="navbar-item has-dropdown is-hoverable">
          <a href="#" class="navbar-link">
            Filière
          </a>
          <div class="navbar-dropdown">
            <a href="/admin/section/informatique" class="navbar-item">Informatiques</a>
            <a href="/admin/section/industrielle" class="navbar-item">Industrielles</a>
            <a href="/admin/section/tertiaire" class="navbar-item">Tertiaires</a>
          </div>
        </a>
        <router-link to="/admin/section/2" class="navbar-item">A propos</router-link>
      </div>
    </nav>
    </div>
    <div class="container">
      <Sidebar/>
      <div class="main"> 
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>



<script>
import Sidebar from '@/components/adminComponents/sidebar.vue'

export default {
  name: "AdminHome",
  components: {
    Sidebar,
  },
  data() {
    return {
      showModal: false,
    }
  },

};
</script>
<style src="../../../public/style/bulma.min.css"></style>
<style lang="css" scoped>
</style>