<template>
    <div class="x-carousel-slider" @mouseover="stopTimer" @mouseout="startTimer">
        <slot/>
    </div>
</template>
<script lang="ts">
import CarouselVM from './carousel.vm'
import PropTypes from '@znck/prop-types'

export default{
    props: {
        vm: PropTypes.instanceOf(CarouselVM)
    },
    methods:{
        startTimer(){
            this.vm.startTimer()
        },
        stopTimer(){
            this.vm.stopTimer()
        }
    },
    mounted(){
        const children = this.$children
        this.vm.childrenCount = children.length
        this.vm.index = 0
        this.vm.startTimer() 
    },

    destroyed(){
        this.vm.stopTimer()
    }
}


</script>
<style lang="scss">

</style>