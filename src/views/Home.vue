<template>
  <div id="home">
    <div class="header">
      <nav class="navbar is-dark is-fixed-top">
        <div class="navbar-start">
          <h2 class="subtitle is-5 navbar-item">
            XXXschool--<i class="fab fa-xing"></i>
          </h2>
        </div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Acceuil</router-link>
          <a class="navbar-item" href="#contact">Contact</a>
          <router-link to="/inscription/1" class="navbar-item">S'inscrire</router-link>
        </div>
      </nav>
    </div>
    <transition name="fade" appear mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.fade-enter-active {
  transition: 2s;
}
.fade-leave-active {
  transition: 0.5s;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
  transform: translateY(50px);
}
</style>