<template>
    <transition :name="transitionName">
        <div class="x-carousel-slider-item" v-show="isActive">
            <slot>{{index}}</slot>
        </div>
    </transition>
</template>
<script>
import CarouselVM from './carousel.vm'
import PropTypes from '@znck/prop-types'
export default {
    props: {
        vm: PropTypes.instanceOf(CarouselVM).isRequired,
        index: PropTypes.number.isRequired
    },

    methods:{
        isActive() {
            return this.vm.index == this.index
        },
        transitionName() {
            return this.vm.animationName
        }
    }
}

</script>