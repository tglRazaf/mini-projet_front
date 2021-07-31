<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/ispm.jpg" />
      <center>
        <h2 class="subtitle is-3 has-text-light">Ispm Mada</h2>
      </center>
    </div>
    <hr class="hr" />
    <div class="sidebar-content">
      <ul class="menu-list has-text-white">
        <li>
          <router-link to="/admin/payement"><i class="fa fa-money-o"></i>Payements</router-link>
        </li>
        <li><router-link to="/admin/filiere/add">Ajouter des filieres</router-link></li>
        <li>
          <router-link to="/admin/branche/create">Créer une branche</router-link>
        </li>
        <li><router-link to="/admin/apropos">A propos</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>

<style lang="css">
.container .sidebar {
  padding-top: 7%;
  width: 17%;
  height: 100vh;
  position: fixed;
  background-color: rgb(51, 50, 51);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
    .sidebar .sidebar-header img {
  margin: 10px 0px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.sidebar .sidebar-content .menu-list li {
  font-size: 20px;
  padding: 3px 0px;
  border-bottom: 1px solid rgba(197, 196, 196, 0.651);
}
.menu-list li a {
  color: rgb(221, 219, 219);
}
.menu-list li a:hover {
  color: rgb(51, 50, 51);
  transition: 0.5s color;
}
</style>