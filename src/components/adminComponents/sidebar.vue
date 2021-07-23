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
          <a href="#histoire"><i class="fa fa-edit"></i>Notes</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-money-o"></i>Payements</a>
        </li>
        <li><a href="#">Absences</a></li>
        <li>
          <a href="#"><i class="fa fa-rank"></i>Créer une branche</a>
        </li>
        <li><a href="#">Concours</a></li>
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