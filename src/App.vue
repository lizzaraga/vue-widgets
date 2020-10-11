<template>
  <div id="app" :class="classes">
   <modal-vue  :vm="modalVM" @close="modalVM.closeModal()">
     <div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque architecto corporis delectus, ea molestiae nesciunt vel odit quam in?
     </div>
   </modal-vue>
   <sidebar-vue :vm="sidebarVM" @close="sidebarVM.closeSidebar()">
     <h2 style="text-align: center">iOS Updates</h2>
     <p style="text-align: justify; padding: 1em">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Necessitatibus, tempora placeat assumenda perferendis, aut
        non distinctio fugit molestias sunt sint laboriosam. Ea repellendus vitae 
       accusantium dicta doloremque repudiandae, ab nesciunt?
     </p>
   </sidebar-vue>
   <button @click="modalVM.openModal()">Open modal</button>
   <button @click="sidebarVM.openSidebar()">Open sidebar</button>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import ModalVue from './components/modal/Modal.vue'

import { ModalVM, ModalPosition } from './components/modal/modal.vm'
import SidebarVue from './components/sidebar/Sidebar.vue'
import { SidebarVM, SidebarPosition } from './components/sidebar/sidebar.vm'

export default Vue.extend({
  components: {
    ModalVue, SidebarVue
  },
  data(){
    return {
      classes: ["Helo", "world"],
      modalVM: new ModalVM("Getting Started"),
      sidebarVM: new SidebarVM(SidebarPosition.right)
    }
  },
  mounted(){
    this.modalVM.modalClasses.push('my-modal')
    this.modalVM.position = ModalPosition.top
    this.sidebarVM.sidebarClasses.push('my-sidebar')
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
    background-color: rgb(16, 16, 16);
  }
  .x-modal__header-title{
    color: rgb(171, 169, 255);
    
   
  }
  .x-modal__header-close{
    background-color: rgb(171, 169, 255);
  }
}

.x-sidebar.my-sidebar{
  background-color: rgb(22, 21, 22);
  color: rgb(218, 219, 245);
  box-shadow: 1px 1px 8px 1px #555;
}

</style>
