<template>
    <div :class="vm.sliderClasses">
        <slot/>
    </div>
</template>
<script>
import PropTypes from '@znck/prop-types'
import { SliderVM } from './slider.vm'
export default {
    props:{
        vm: PropTypes.instanceOf(SliderVM)
    },
    mounted(){
        this.vm.childrenCount = this.$children.length
        this.vm.setParentBounds(this.$el.getBoundingClientRect())
    }
}
</script>