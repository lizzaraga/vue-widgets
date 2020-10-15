<template>
  <div id="app" >
    <tabbar-vue :vm="tabbarVM">
      <tabbar-item-vue :index="0" :vm="tabbarVM" v-slot="{isActive}"><div :class="{'active': isActive}" class="tab-item">One</div></tabbar-item-vue>
      <tabbar-item-vue :index="1" :vm="tabbarVM" v-slot="{isActive}"><div :class="{'active': isActive}" class="tab-item">Two</div></tabbar-item-vue>
      <tabbar-item-vue :index="2" :vm="tabbarVM" v-slot="{isActive}"><div :class="{'active': isActive}" class="tab-item">Three</div></tabbar-item-vue>
      <template #indicator>
        <div :style="indicatorStyle" class="tabbar-indicator"></div>
      </template>
    </tabbar-vue>
    <div style="margin: 2em"></div>
    <slider-vue :vm="sliderVM" :style="sliderStyle">
      <slider-item-vue :index="0" :vm="sliderVM">
        <div class="slider-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit, eaque, sint, reprehenderit
           deserunt facilis expedita enim et quis cumque libero consequuntur aliquid sed est assumenda 
           veniam possimus repellendus! Labore rerum nemo, consequuntur quidem quam in optio ipsam molestias est laudantium dignissimos assumenda consequatur magnam accusantium totam culpa dolorem. Vitae quia repellat eius a nostrum magni error iste consequuntur iusto obcaecati, neque perferendis quasi animi nihil voluptates autem aperiam dignissimos deserunt. Ab delectus repellendus beatae, iusto, aperiam harum animi voluptatum dolore autem velit laborum, ipsam consequuntur. Animi, et? Doloremque dolorum sapiente in, 
          perspiciatis expedita commodi eum molestias placeat nisi corporis.
        </div>
      </slider-item-vue>
      <slider-item-vue :index="1" :vm="sliderVM">
        <div class="slider-item black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur pariatur animi 
          officiis assumenda corporis, ipsam excepturi ipsum. Voluptate rerum consequuntur perferendis
           quidem iure explicabo laborum modi dolorum nam accusamus, fuga reiciendis magnam laboriosam non,
            hic nobis provident optio officia mollitia incidunt.
           Dolorum voluptatem nam asperiores officia ipsa? Aspernatur, quaerat!
        </div>
      </slider-item-vue>
    </slider-vue>

    <h2>Toast</h2>
    <toast-vue :vm="toastVM" class="my-toast"/>
    <button @click="showToastError">Show error</button>
    <!-- <div class="x-toast my-toast error">
      <span>Network Error</span>
    </div> -->
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import { TabbarVM } from './components/tabbar/tabbar.vm'
import TabbarVue from './components/tabbar/Tabbar.vue'
import TabbarItemVue from './components/tabbar/TabbarItem.vue'
import { SliderVM } from './components/slider/slider.vm'
import SliderVue from './components/slider/Slider.vue'
import SliderItemVue from './components/slider/SliderItem.vue'
import ToastVue from './components/toast/Toast.vue'
import { ToastVM } from './components/toast/toast.vm'



export default Vue.extend({
  components:{
    TabbarVue,
    TabbarItemVue,
    SliderVue, SliderItemVue,
    ToastVue
  },
  data(){
    return {
      tabbarVM: new TabbarVM(1),
      indicatorStyle: "",
      sliderVM: new SliderVM(),
      sliderStyle: "",
      toastVM: new ToastVM('fade')
    }
  },
  methods:{
    showToastError(){
      this.toastVM
      .error("Erreur")
      .warn('Attention')
      .info('Info')
      .success('Success')
      .show()
    }
  },
  created(){
    this.tabbarVM.setChildBoundsListener((parentBounds, bounds) => {
      this.indicatorStyle = `width: ${bounds.width}px; height: ${bounds.height}px; left: ${bounds.left}px`
    })
    this.tabbarVM.addIndexChangedListener(index => this.sliderVM.index = index!)
    this.sliderVM.setChildBoundsListener((parentBounds, childBounds) => {
      console.log('child bounds', childBounds.height, parentBounds.height)
      this.sliderStyle = `height: ${childBounds.height}px;`
    })
    this.tabbarVM.tabbarClasses.push('my-tabbar')
    this.sliderVM.sliderClasses.push('my-slider')
    this.sliderVM.forceIndexUpdate(this.tabbarVM.index!)
    
  }, 
  destroyed(){
    this.tabbarVM.dispose()
  }
  
})
</script>
<style lang="scss">
#app {
  font-family:   Helvetica, Arial, sans-serif;
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
  grid-template-columns: 1fr 2fr 3fr;
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

.x-slider.my-slider{
  width: 600px;
  background-color: rgb(240, 240, 192);
  transition: all 0.3s linear;
  .slider-item{
    //background-color: #fff;
    padding: 1em;

    
  }
}





.next-enter-active {
    animation: next-current-enter-animation 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.next-leave-active {
    animation: next-last-leave-animation 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.prev-enter-active {
    animation: prev-current-enter-animation 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.prev-leave-active {
    animation: prev-last-leave-animation 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes next-current-enter-animation {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes next-last-leave-animation {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-100%);
        opacity: 0;
    }
}

@keyframes prev-current-enter-animation {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes prev-last-leave-animation {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.fade-enter-active{
  animation: slideUpEnter 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.fade-leave-active{
  animation: slideUpLeave 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes slideUpEnter {
  from{
    bottom: -4rem;
    opacity: 0;
  }
  to{
    bottom: 3rem;
    opacity: 1;
  }
}

@keyframes slideUpLeave {
  from{
    bottom: 3rem;
    opacity: 1;
  }
  to{
    bottom: -4rem;
    opacity: 0;
  }
}

.x-toast.my-toast{
  position: fixed;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  bottom: 3rem;
  padding: 0.6rem 1.5rem;
  min-width: 120px;
  border-radius: 5px;
  color: #fffe;
  text-align: center;
  font-size: 0.8rem;
  box-shadow: 0 0 18px #0002;
  
  &.error{
    background-color: rgb(216, 70, 99);
    color: #000;
  }
  
}
</style>
