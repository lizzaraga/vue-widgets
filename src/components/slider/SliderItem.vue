<template>
    <transition :name="transitionName">
        <div class="x-slider-item" v-show="isActive">
            <slot v-bind="{isActive}"></slot>
        </div>
    </transition>
</template>
<script>
import { SliderVM } from "./slider.vm"
import PropTypes from '@znck/prop-types'

export default {
    props: {
        vm: PropTypes.instanceOf(SliderVM).isRequired,
        index: PropTypes.number.isRequired,  
    },
    data:()=>{
        return {
            timeoutId: 0
        }
    },
    watch:{
        isActive(n){
            if(n == true){
                this.timeoutId = window.setTimeout(() => {
                    this.onResize()
                    window.clearTimeout(this.timeoutId)
                }, 100);
            }
                
        }
    },
    computed:{
        isActive() {
            return this.vm.index == this.index
        },
        transitionName() {
            return this.vm.animationName
        },
    },
    methods:{
        onResize(){
            this.bounds = this.$el.getBoundingClientRect()
            if(this.vm.index == this.index) this.vm.updateChildBounds(this.bounds)
        },
    },
    mounted(){
        this.onResize()
    },
    
}
</script>