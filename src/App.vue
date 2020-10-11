<template>
  <div id="app" :class="classes">
   <modal-vue  :vm="modalVM" @close="modalVM.closeModal()">
     <div>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus laboriosam recusandae est obcaecati incidunt consequatur iure deleniti et, accusantium optio velit nobis, vel quidem sequi accusamus quis quam officia necessitatibus?
     </div>
   </modal-vue>
   <button @click="modalVM.openModal()">Open modal</button>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import ModalVue from './components/modal/Modal.vue'
import { ModalVM, ModalPosition } from './components/modal/modal.vm'

export default Vue.extend({
  components: {
    ModalVue
  },
  data(){
    return {
      classes: ["Helo", "world"],
      modalVM: new ModalVM("Getting Started")
    }
  },
  mounted(){
    this.modalVM.modalClasses.push('my-modal')
    this.modalVM.position = ModalPosition.top
  }
})
</script>
<style lang="scss">
#app {
  font-family: 'Nunito Sans',  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.x-modal.my-modal{
  background-color: rgb(22, 21, 22);
  color: rgb(218, 219, 245);
  box-shadow: 0 1px 8px 1px #555;

  .x-modal__header{
    border-bottom: 1px solid #0003;
  }
  .x-modal__header-title{
    color: rgb(171, 169, 255);
   
  }
  .x-modal__header-close{
    background-color: rgb(171, 169, 255);
  }
}

</style>
