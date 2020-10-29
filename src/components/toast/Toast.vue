<template>
    <transition :name="vm.transitionName" @afterLeave="afterLeave" @afterEnter="afterEnter">
        <div v-html="message" v-show="isActive" class="x-toast" :class="type"></div>
    </transition>
</template>
<script>
import { ToastVM } from './toast.vm'
export default {
    props:{
        vm: {
            type: Object,
            required: true,
            validator(value){
                return value instanceof ToastVM
            }
        }
    },
    data(){
        return {
            timeoutId: 0
        }
    },
    computed:{
        type(){
            return this.vm.message.type
        },
        isActive(){
            return this.vm.message.isActive
        },
        message(){
            return this.vm.message.message
        }
    },
    methods:{
        afterEnter(){
            this.timeoutId = window.setTimeout(() => {
                this.vm.message.isActive = false
                window.clearTimeout(this.timeoutId)
            }, ToastVM.VISIBLE_WAITING_TIME)
        },
        afterLeave(){

            this.timeoutId = window.setTimeout(() => {
                this.vm.finish()
                window.clearTimeout(this.timeoutId)
            }, ToastVM.WAITING_TIME_BETWEEN_MESSAGE)
        }
    }
}
</script>
<style lang="scss">
.x-toast{
    padding: 0.6rem;
    bottom: 3rem;
    border-radius: 5px;
    text-align: center;
    font-size: 0.8rem;
    color: #fffd;
    box-shadow: 0 0 18px #0002;
     &.error{
        background-color: crimson;
    }
    &.success{
        background-color: rgb(43, 199, 95);
        color: #000;
    }
    &.warn{
        background-color: rgb(240, 220, 39);
        color: #000;
    }
    &.info{
        background-color: rgb(20, 113, 220);
    }
}
</style>