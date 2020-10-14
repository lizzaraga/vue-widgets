<template>
    <div class="x-tabbar-item" @click="jumpTo">
        <slot v-bind="{isActive}"/>
    </div>
</template>
<script>
import PropTypes from '@znck/prop-types'
import { TabbarVM } from './tabbar.vm'
export default {
    props:{
        vm: PropTypes.instanceOf(TabbarVM),
        index: PropTypes.number.isRequired,
        alwaysUpdate: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            bounds: null
        }
    },
    watch: {
        isActive(n){
            if(n == true){
                this.vm.updateChildBounds(this.bounds)
            }
        }
    },
    computed:{
        isActive(){
            return this.vm.index == this.index
        }
    },
    methods:{
        jumpTo(){
            if(this.alwaysUpdate || this.vm.index != this.index){
                this.vm.jumpTo(this.index)
                this.vm.updateChildBounds(this.bounds)
            }
        }, 
        onResize(){
            this.bounds = this.$el.getBoundingClientRect()
            if(this.vm.index == this.index) this.vm.updateChildBounds(this.bounds)
        }
    },
    mounted(){
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    destroyed(){
        window.removeEventListener('resize', this.onResize)
    }
}
</script>
<style lang="scss">
.x-tabbar-item{
    cursor: pointer;
}
</style>