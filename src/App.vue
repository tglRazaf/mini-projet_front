<template>
  <div id="app">
    <!-- <div class="loader-container">
      <img class="loader-image" src="./assets/pikatchu.gif" alt="">
    </div> -->
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // setInterval(function () {
    //   document.querySelector('.loader-container').classList.add('stop')
    // }, 1000)
    // setInterval(() => {
    //   document.querySelector('.loader-container').style.display= 'none'
    // }, 2000);
  },
}
</script>
<style>
#app{
  /*background-image: url('./assets/bg.png');
  background-size: cover;*/
}

.loader-container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: navy;
  z-index: 9999;
}

.loader-container .loader-image{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.loader-container.stop{
  transition: opacity 1s, visibility 1s;
  visibility: hidden;
  opacity: 0;
}

.section{
flex: 3;
}
.fade-enter-active{
    transition: 2s;
}
.fade-leave-active{
    transition: 0.5s;
}
.fade-leave-to, .fade-enter{
    opacity: 0;
    transform:  translateX(-50px);
}
</style>