<template>
    <div :class="vm.tabbarClasses">
        <slot/>
        <slot name="indicator"/>
    </div>
</template>
<script>
import { TabbarVM } from "./tabbar.vm";
import PropTypes from '@znck/prop-types'
export default{
    props:{
        vm: PropTypes.instanceOf(TabbarVM)
    },
    methods:{
        onResize(){
            this.vm.setParentBounds(this.$el.getBoundingClientRect())
        }
    },
    destroyed(){
        this.vm.dispose()
        window.removeEventListener('resize', this.onResize)
    },
    mounted(){
        this.vm.childrenCount = this.$children.length
        this.vm.setParentBounds(this.$el.getBoundingClientRect())
        window.addEventListener('resize', this.onResize)
    }
}

</script>
