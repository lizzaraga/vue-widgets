<template>
  <div id="app"  >
    <!-- <tabbar-vue :vm="tabbarVM">
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
     -->
     <div>
       <form ref="form" @submit.prevent="onSubmit" novalidate style="width: 350px; margin: 1.5rem">
         
        <MatInput name="email"  label="Birthday" placeholder="Your birthday" type="email"/>
        <div style="margin-top: 1rem"></div>
        <MatInput inline label="Password" name="password" placeholder="Your password" type="password"/>
        <div style="margin-top: 1rem"></div>
        <MatInput inline label="Description" placeholder="Enter the description" :rows="4" textarea/>
        <div style="margin-top: 1rem"></div>
        <input type="text" v-model="email">
        <div style="margin-top: 1rem"></div>
        <MatFile  inline label="file" v-model="file" name="file" placeholder="Select file"/>
        {{file}}
        <div style="margin-top: 1rem"></div>
        <MatSelect inline v-model="selectedFruit" label="Choose your fruit" :items="fruits" />
        {{selectedFruit}}
        <div style="margin-top: 1rem"></div>
        <button type="submit" class="x-button curve light">Submit</button>
       </form>
     </div>
  </div>  
</template>
<script lang="js">
import Vue from 'vue'
import MatInput from './components/mat-input/MatInput.vue'
import MatSelect from './components/mat-select/MatSelect.vue'
import MatFile from './components/mat-file/MatFile.vue'
import { TabbarVM } from './components/tabbar/tabbar.vm'
// import TabbarVue from './components/tabbar/Tabbar.vue'
// import TabbarItemVue from './components/tabbar/TabbarItem.vue'
import { SliderVM } from './components/slider/slider.vm'
// import SliderVue from './components/slider/Slider.vue'
// import SliderItemVue from './components/slider/SliderItem.vue'
// import ToastVue from './components/toast/Toast.vue'
import { ToastVM } from './components/toast/toast.vm'



export default {
  directives:{
    material(el, binding){
      el.classList.add('x-material')
      console.log(binding)

      const rootEl = el
      const focusHandler = () => {
        rootEl.classList.add('focus')
        rootEl.classList.add('active')
      }
      const blurHandler = (e) => {
        if(e.target.value.trim() == ""){
          rootEl.classList.remove('active')
          rootEl.classList.remove('focus')
        }else rootEl.classList.remove('focus')
      }
      const changeHandler = (e) => {
        if(e.target.value.trim() != ""){
          if(rootEl.classList.contains('active') == false){
            rootEl.classList.add('active')
          }
        }
      }
      const invalidHandler = () => {
        rootEl.classList.add('invalid')
      }
      el.children[1].addEventListener('focus', focusHandler)
      el.children[1].addEventListener('blur', blurHandler)
      el.children[1].addEventListener('change', changeHandler)
      el.children[1].addEventListener('invalid', invalidHandler)
    }
  },
  components:{
    // TabbarVue,
    // TabbarItemVue,
    // SliderVue, SliderItemVue,
    // ToastVue
    MatInput, MatSelect, MatFile
  },
  data(){
    return {
      materialTheme:{
        error: 'red',
        default: 'blue'
      },
      selectedFruit: '6',
      file: null,
      fruits:[
        {
          displayValue: "Banana",
          value: '1'
        },
        {
          displayValue: "Orange",
          value: '2'
        },
        {
          displayValue: "Tomato",
          value: '3'
        }
      ],
      email: 'maael',
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
      .error('Please fill "Password" field')
      .warn('Attention ')
      .info('Info')
      .success('Success')
      .show()
    }, 
    onSubmit(){
      if(this.$refs.form.checkValidity() == false){
        this.$refs.form.querySelector('.x-field-input').focus()
      }
    }
  },
  created(){
    // this.tabbarVM.setChildBoundsListener((parentBounds, bounds) => {
    //   // this.indicatorStyle = `width: ${bounds.width}px; height: ${bounds.height}px; left: ${bounds.left}px`
    
    // })
    // // this.tabbarVM.addIndexChangedListener(index => this.sliderVM.index = index)
    // // this.sliderVM.setChildBoundsListener((parentBounds, childBounds) => {
    // //   console.log('child bounds', childBounds.height, parentBounds.height)
    // //   //this.sliderStyle = `height: ${childBounds.height}px;`
    // // })
    // this.tabbarVM.tabbarClasses.push('my-tabbar')
    // this.sliderVM.sliderClasses.push('my-slider')
    // this.sliderVM.forceIndexUpdate(this.tabbarVM.index!)
    
  }, 
  destroyed(){
    this.tabbarVM.dispose()
  }
  
}
</script>
<style lang="scss">


#app {
  font-family: Product Sans,  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
html, body{
  background-color: #fdfdfd;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5em 1.8em;
  background-color: rgb(0, 0, 0);
  color: #2e3c50ee;
  font-size: 0.8em;
  height: 35px;
  text-align: center;
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



// Fade
.fade-enter-active {
    animation: fadeEnter 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-leave-active {
    animation: fadeLeave 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes fadeEnter {
    from {
      transform-origin: 0% 0%;
      opacity: 0;
      transform: scale(0);
    }
    60%{
      opacity: 0.4;
      
    }
    to {
      transform-origin: 0% 0%;
      opacity: 1;
      transform: scale(1);
    }
}

@keyframes fadeLeave {
    from {
      transform-origin: 0% 0%;
      opacity: 1;
      transform: scale(1);
    }
    40%{
      opacity: 0.6;
      
    }
    to {
        transform-origin: 0% 0%;
        opacity: 0;
        transform: scale(0);
    }
}

.slideup-enter-active{
  animation: slideUpEnter 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.slideup-leave-active{
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
  //min-width: 120px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.8rem;
  box-shadow: 0 0 18px #0002;
  

}

$invalid-color: crimson;
$focused-color: rgb(30, 71, 255);
$label-padding: 0.3rem;
$offset: 0.4rem + $label-padding; 
$field-radius: 4px;
$font-offset: 3px;
$field-height: 40px;
$field-input-size: 14px;
$field-label-size: 18px;
$field-label-size-focus: 13px;
$label-translate-y: ($field-height)/2 - $field-label-size / 2 - $font-offset;
$label-focus-translate-y: -($field-label-size-focus/2) - $font-offset;
$invalid-color: crimson;
$focused-color:rgb(6, 155, 105);
$label-padding: 0.3rem;
$offset: 0.4rem+$label-padding;
$field-radius: 4px;
$font-offset: 3px;
$field-height: 40px;
$field-input-size: 14px;
$field-label-size: 16px;
$field-label-size-focus: 13px;
$label-translate-y: ($field-height)/2 - $field-label-size / 2 - $font-offset;
$label-focus-translate-y: -($field-label-size-focus/2) - $font-offset;
.x-field.x-material {
    position: relative;
    height: $field-height;
    border: 1px solid #ccc;
    border-radius: $field-radius;
    &>*{
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &::after {
        content: '';
        position: absolute;
        left: -1px;
        right: -1px;
        bottom: -1px;
        top: -1px;
        border: 2px solid transparent;
        border-radius: inherit;
        z-index: 1;
       
    }
    &.inline{
      border: none;
      &::before, &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: unset;
        border: unset;
        height: 1px;
        background-color: #ccc;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      &.focus{
        
        &::after{
          transform: scaleX(1);
        }
        
      }
      &::after{
        background-color: $focused-color;
        height: 2px;
        transform: scaleX(0);
      }
      &>.x-field-label{
        background-color: transparent;
      }
      
    }
    &>.x-field-label {
        z-index: 2;
        display: flex;
        align-items: center;
        font-size: $field-label-size;
        position: absolute;
        background: #fdfdfd;
        transform: translateY($label-translate-y);
        padding: 0 $label-padding;
        margin-left: $offset;
        border-radius: $field-radius;
        color: #999;
        overflow: hidden;
        max-width: calc(100% - (2*10px));
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    &>.x-field-input {
        z-index: 2;
        padding: 0 $offset;
        position: relative;
        display: block;
        border: none;
        height: 100%;
        width: 100%;
        font-size: $field-input-size;
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        font-family: inherit;
        &:disabled {
            cursor: not-allowed;
            background-color: #ddd2;
        }
    }
    &.active {
        &>.x-field-label {
            transform: translateY($label-focus-translate-y);
            font-size: $field-label-size-focus;
            margin-left: $offset - $label-padding;
            max-width: unset
        }
    }
    &.focus {
        border-color: $focused-color;
        &::after {
            border-color: inherit;
        }
        &>.x-field-label {
            color: $focused-color;
            &.fill {
                background-color: $focused-color;
                color: #fdfdfd;
            }
        }
        &.fill {
            background-color: $focused-color;
            color: #fdfdfd;
            &>.x-field-label {
                font-weight: bold;
                color: inherit;
                background-color: inherit;
            }
            &>.x-field-input {
                color: inherit;
            }
        }
    }
    &.invalid {
        border-color: $invalid-color;
        &.focus {
            border-color: $invalid-color;
            &>.x-field-label {
                color: $invalid-color;
                &.fill {
                    color: #fdfdfd;
                    background-color: $invalid-color;
                }
            }
            &.fill {
                background-color: $invalid-color;
                &>.x-field-label {
                    color: #fdfdfd;
                }
            }
        }
    }
    &.textarea {
        height: initial;
        &>.x-field-input {
            padding-top: 0.6rem;
            padding-bottom: 0.6rem;
            resize: none;
        }
    }
    &.date {
        &>.x-field-input {
            opacity: 0;
            cursor: text;
        }
        &.active {
            &>.x-field-input {
                opacity: 1;
            }
        }
    }
}

.x-field.select {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
    &>.x-field-label {
        margin-bottom: 0.3rem;
    }
    &>.select-group {
        position: relative;
        height: $field-height;
        box-shadow: 0 0 8px #0001;
        border: 1px solid #aaa;
        border-radius: $field-radius;
        z-index: 1;
        &::after {
            content: '';
            position: absolute;
            left: -1px;
            right: -1px;
            bottom: -1px;
            top: -1px;
            border: 2px solid transparent;
            border-radius: inherit;
        }
        &:hover {
            &::after {
                border: 2px solid $focused-color;
            }
        }
        &>select {
            position: relative;
            appearance: none;
            border: none;
            width: 100%;
            height: 100%;
            padding: 0 $offset;
            outline-color: darkblue;
            outline-width: 2px;
            background: transparent;
            cursor: pointer;
            z-index: 2;
        }
    }
}

// Button
.x-button {
    border: none;
    cursor: pointer;
    padding: 0.5em 1.8em;
    background-color: rgb(0, 0, 0);
    color: #2e3c50ee;
    font-size: 0.85em;
    height: 36px;
    min-width: 60px;
    outline: none;
    &.light {
        color: #fff;
    }
    &.curve {
        border-radius: 0.4em;
    }
    &.round {
        border-radius: 18px;
    }
}
</style>
