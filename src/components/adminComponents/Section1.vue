<template >
    <div class="section">
        <div class="home-admin">
          <div class="clock">
            <h1 class="title is-2 timer">
              <span id="hour"></span>:<span id="minute"></span>
            </h1>
            <p id="date"></p>
          </div>
          <h2 class="title is-3">Historiques</h2>
        </div>
        <br/>
    </div>
</template>

<script>

export default {
  name: 'Section1',
  data() {
    return {
      
    }
  },
  methods: {
    startTimer(){
      let  date= new Date()
      let i = date.getHours()
      let j = date.getMinutes()
      document.getElementById('hour').innerHTML= date.getHours()
      document.getElementById('minute').innerHTML= date.getMinutes()
      document.getElementById('date').innerHTML= date.getDay() +'/'+ date.getDate() + '/' + date.getMonth()
      setInterval(function () {
        j++
        date.setMinutes(j)
        if (j==60) {
          (i==24)? i=0: i++
          date.setHours(i)
          j=0;
        }
        document.getElementById('hour').innerHTML= date.getHours()
        document.getElementById('minute').innerHTML= date.getMinutes()
      }, 60000)
    }
  },
  mounted() {
    this.startTimer()
  },
}
</script>
<style src="./admin.css">
  
</style>
<style lang="css" scoped>
  .clock{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 100px;
    top: 50%;
    left: 90%;
    border: 1px solid;
  }
</style>