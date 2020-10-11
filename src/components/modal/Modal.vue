<template>
    <transition :name="vm.backdropTransitionName">
        <div class="x-modal-backdrop" v-show="vm.isOpen" :class="vm.position" @click.self="close">
            <transition :name="vm.modalTransitionName">
                <div :class="vm.modalClasses" v-show="vm.isOpen">
                    <header v-if="vm.hasHeader" class='x-modal__header'>
                        <slot name="title">
                            <span class="x-modal__header-title">{{vm.title}}</span>
                        </slot>
                        <slot name="close">
                            <span @click="close" class="x-modal__header-close"></span>
                        </slot>
                    </header>
                    <main class="x-modal__main">
                        <slot/>
                    </main>
                    <footer class="x-modal__footer" v-if="vm.hasFooter">
                        <slot name="footer"/>
                    </footer>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
import PropTypes from '@znck/prop-types'
import { ModalVM } from './modal.vm'
export default {
    props:{
        vm: PropTypes.instanceOf(ModalVM).isRequired,
    },
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss">
.x-modal-backdrop{
    position: fixed;
    overflow: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4rem 0;
    background-color: #0007;
    display: flex;
    align-items: center;
    justify-content: center;

    &.top{
        align-items: flex-start;
    }
}
.x-modal{
    background-color: #fff;
    margin: 0 1rem;
    width: 450px;
    
    &>.x-modal__header{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>.x-modal__header-title{
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 0.75rem;
            font-weight: bold;
        }
        &>.x-modal__header-close{
            display: inline-block;
            position: relative;
            cursor: pointer;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background-color: #999;
            transform-origin: center;
            transform: rotate(45deg);
            &:hover{
                background-color: crimson;
            }
            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: inherit;
                transform: rotate(90deg);
                border-radius: inherit;
            }
        }
    }

    &>.x-modal__main{
        padding: 1rem;
        overflow: auto;
        max-height: 60vh;
    }

    &>.x-modal__footer{
        padding: 1rem;
    }
}

.x-modal-backdrop-fade-enter-active{
    animation: backdropFadeEnter 0.3s ease;
}
.x-modal-backdrop-fade-leave-active{
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

.x-modal-slide-up-enter-active{
    animation: modalSlideUpEnter 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.x-modal-slide-up-leave-active{
    animation: modalSlideUpLeave 0.3s ease-in-out;
}

@keyframes modalSlideUpEnter {
    from{
        opacity: 0;
        transform: translateY(4em);
    }
    to{opacity: 1; transform: translateY(0);}
}
@keyframes modalSlideUpLeave {
    from{
        opacity: 1;
        transform: translateY(0);
    }
    to{opacity: 0; transform: translateY(4em);}
}

</style>