<template>
    <transition :name="vm.backdropTransitionName">
        <div v-show="vm.isOpen" @click.self="close" class="x-sidebar-backdrop" :class="vm.position">
            <transition :name="vm.sidebarTransitionName">
                <div v-show="vm.isOpen" :class="vm.sidebarClasses">
                    <slot/>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
import {SidebarVM} from './sidebar.vm'

export default{
    props: {
        vm: {
            type: Object,
            required: true,
            validator(value){
                return value instanceof SidebarVM
            }
        }
    },
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss">
.x-sidebar-backdrop{
    position: fixed;
    overflow: hidden;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0007;
    display: flex;
    padding-right: 2em;
    z-index: 9999;

    &.right{
        justify-content: flex-end;
        padding: 0;
        padding-left: 2em;
    }
    
}
.x-sidebar{
    width: 300px;
    background-color: #fff;
}

.x-sidebar-backdrop-fade-enter-active{
    animation: backdropFadeEnter 0.3s ease;
}
.x-sidebar-backdrop-fade-leave-active{
    animation: backdropFadeLeave 0.3s ease;
}
@keyframes backdropFadeEnter {
    from {opacity: 0;}
    to{opacity: 1;}
}
@keyframes backdropFadeLeave {
    from {opacity: 1;}
    to{opacity: 0;}
}


.x-sidebar-slide-left-enter-active{
    animation: sidebarSlideLeftEnter 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.x-sidebar-slide-left-leave-active{
    animation: sidebarSlideLeftLeave 0.3s ease-in-out;
}


.x-sidebar-slide-right-enter-active{
    animation: sidebarSlideRightEnter 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.x-sidebar-slide-right-leave-active{
    animation: sidebarSlideRightLeave 0.3s ease-in-out;
}


@keyframes sidebarSlideLeftEnter {
    from{
        opacity: 0;
        transform: translateX(-100%);
    }
    to{opacity: 1; transform: translateX(0);}
}
@keyframes sidebarSlideLeftLeave {
    from{
        opacity: 1;
        transform: translateX(0);
    }
    to{opacity: 0; transform: translateX(-100%);}
}
@keyframes sidebarSlideRightEnter {
    from{
        opacity: 0;
        transform: translateX(100%);
    }
    to{opacity: 1; transform: translateX(0);}
}
@keyframes sidebarSlideRightLeave {
    from{
        opacity: 1;
        transform: translateY(0);
    }
    to{opacity: 0; transform: translateX(100%);}
}
</style>