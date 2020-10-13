<template>
  <div id="app" >
    <tabbar-vue :vm="tabbarVM">
      <tabbar-item-vue :index="0" :vm="tabbarVM" v-slot="{isActive}"><div :class="{'active': isActive}" class="tab-item">One</div></tabbar-item-vue>
      <tabbar-item-vue :index="1" :vm="tabbarVM" v-slot="{isActive}"><div :class="{'active': isActive}" class="tab-item">Two</div></tabbar-item-vue>
      <template #indicator>
        <div :style="indicatorStyle" class="tabbar-indicator"></div>
      </template>
    </tabbar-vue>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import { TabbarVM } from './components/tabbar/tabbar.vm'
import TabbarVue from './components/tabbar/Tabbar.vue'
import TabbarItemVue from './components/tabbar/TabbarItem.vue'

export default Vue.extend({
  components:{
    TabbarVue,
    TabbarItemVue
  },
  data(){
    return {
      tabbarVM: new TabbarVM(1),
      indicatorStyle: ""
    }
  },
  created(){
    this.tabbarVM.setChildBoundsListener((parentBounds, bounds) => {
      this.indicatorStyle = `width: ${bounds.width}px; height: ${parentBounds.height}px; left: ${bounds.left}px`
      console.log(parentBounds, bounds, this.indicatorStyle)
    })
    this.tabbarVM.tabbarClasses.push('my-tabbar')
  }, 
  destroyed(){
    this.tabbarVM.dispose()
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
*{
  box-sizing: border-box;
}
html, body{
  background-color: rgb(240, 162, 66);
  overflow: hidden;
  margin: 0;
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

.tab-item{
  
  padding: 1rem;
  position: relative;
  z-index: 1;

  &.active{
    background-color: transparent;
    color: #fff;
  }
}

.x-tabbar.my-tabbar{
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 100%;
  background-color: white;
}
.tabbar-indicator{
  height: 2px;
  background-color: #000;
  position: absolute;
  transition: all 0.3s linear;
  bottom: 0;
  z-index: 0;
  
}
</style>
