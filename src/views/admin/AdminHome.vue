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
            <div v-for="(branche, index) in branches" :key="index">
              <a :href="'/admin/section/'+branche.nom_branche" class="navbar-item">{{branche.nom_branche.toUpperCase()}}</a>
            </div>
          </div>
        </a>
        <router-link to="/admin/apropos" class="navbar-item">A propos</router-link>
      </div>
    </nav>
    </div>
    <div class="container">
      <Sidebar/>
      <div class="main"> 
        <transition name="bouncing" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import Sidebar from '@/components/adminComponents/sidebar.vue'

export default {
  name: "AdminHome",
  components: {
    Sidebar,
  },
  data() {
    return {
      showModal: false,
      branches: []
    }
  },
  mounted() {
    axios.get(`http://localhost:7000/all/brancheFilieres`)
      .then(res => {
          this.branches= res.data
      })
  },

};
</script>
<style src="../../../public/style/bulma.min.css"></style>
<style lang="css">
  .bouncing-enter-active {
    transition: 2s;
  }
  .bouncing-leave-active {
    transition: 0.5s;
  }
  .bouncing-leave-to, .bouncing-enter {
    opacity: 0;
    transform: translateX(50px);
  }
</style>