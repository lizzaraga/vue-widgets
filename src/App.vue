<template>
  <div id="app" :class="classes">
   <modal-vue  :vm="modalVM" @close="modalVM.closeModal()">
     <div v-ripple>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque architecto corporis delectus, ea molestiae nesciunt vel odit quam in?
     </div>
     <template #footer>
       <button v-ripple class="x-button round light">After</button>
       <button v-ripple style="margin-left: 1em" class="x-button round light">Cancel</button>
     </template>
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
   <button class="x-button round light" style="margin-right: 1em" @click="modalVM.openModal()">Open modal</button>
   <button class="x-button light" @click="sidebarVM.openSidebar()">Open sidebar</button>
    <scheduler-vue :vm="schedulerVM"/>
    <form action="">
      <input type="text">
    </form>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import ModalVue from './components/modal/Modal.vue'
import { ModalVM, ModalPosition } from './components/modal/modal.vm'
import SidebarVue from './components/sidebar/Sidebar.vue'
import { SidebarVM, SidebarPosition } from './components/sidebar/sidebar.vm'
import SchedulerVue from './components/scheduler/Scheduler.vue'
import { SchedulerVM } from './components/scheduler/scheduler.vm'


export default Vue.extend({
  components: {
    SchedulerVue, SidebarVue, ModalVue
  },
  data(){
    return {
      classes: ["Helo", "world"],
      modalVM: new ModalVM("Getting Started"),
      sidebarVM: new SidebarVM(SidebarPosition.left),
      schedulerVM: new SchedulerVM(new Date())
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

html, body{
  background-color: rgb(240, 162, 66);
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


// Forms

.x-button{
  border: none;
  cursor: pointer;
  padding: 0.5em 1.8em;
  background-color: rgb(0, 0, 0);
  color: #2e3c50ee;
  font-size: 0.8em;
  height: 35px;
  min-width: 60px;
  font-weight: 500;
  &.light{
    color: #fff;
  }
  &.curve{
    border-radius: 0.4em;
  }
  &.round{
    border-radius: 18px;
  }
}

</style>
