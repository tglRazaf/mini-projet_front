<template lang="html">
    <div>
        <transition name="bounce">
          <div class="modale has-background-light" v-if="showModal">
            <slot></slot>
            <div class="modale-content">
              <div class="modale-card">
                <ul class="has-text-dark">
                  <li class="father">
                    <h1 @click="showChild" class="father-title subtitle is-4">
                      <i class="fa fa-chevron-right"></i> Informatique
                    </h1>
                    <ul class="child">
                      <li></li>
                    </ul>
                  </li>
                  <li class="father">
                    <h1 @click="showChild" class="father-title subtitle is-4">
                      <i class="fa fa-chevron-right"></i> Tertiaire
                    </h1>
                    <ul class="child">
                      <li>Fic</li>
                      <li>Emp</li>
                    </ul>
                  </li>
                  <li class="father">
                    <h1 @click="showChild" class="father-title subtitle is-4">
                      <i class="fa fa-chevron-right"></i> Indistrielle
                    </h1>
                    <ul class="child">
                      <li>Icmp</li>
                      <li>Emii</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        showModal: Boolean,
    },
    data() {
        return {
            showModalLocal: this.showModal,
            titre: '',
        }
    },
    methods: {
        showChild: function () {
        const fathers = document.querySelectorAll(".father");
        fathers.forEach((father) => {
            father.addEventListener("click", function () {
                this.children[1].classList.toggle("show");
                this.children[1].children.forEach((secondChildren) => {
                    secondChildren.addEventListener('click', function(){
                        
                    })
                })
            });
        });
        this.titre= 'cool'
        },
    },
    
}
</script>

<style lang="css">
.modale {
    position: absolute;
  padding: 10px;
  border-radius: 5px;
  margin: auto;
  width: 50%;
  left: 30%;
  animation: bouncing 1s ease-in-out;
}
@keyframes bouncing {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
.father h1 {
  cursor: pointer;
}
.father .child {
  display: none;
}
.father .show {
  display: block;
}
.modale .delete {
  padding: 10px;
  float: right;
}
.bounce-enter-active {
  transition: 2s;
}
.bounce-leave-active {
  transition: 0.5s;
}
.bounce-leave-to,
.bounce-enter {
  opacity: 0;
  transform: translateY(-50px);
}
</style>