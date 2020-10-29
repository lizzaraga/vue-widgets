<template>
    <div :class="vm.sliderClasses">
        <slot/>
    </div>
</template>
<script>

import { SliderVM } from './slider.vm'
export default {
    props:{
        vm: {
            type: Object,
            required: true,
            validator(value){
                return value instanceof SliderVM
            }
        }
    },
    mounted(){
        this.vm.childrenCount = this.$children.length
        this.vm.setParentBounds(this.$el.getBoundingClientRect())
    }
}
</script>