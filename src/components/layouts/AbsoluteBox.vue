<template>
    <div class="x-absolute-box" :style="style">
        <slot/>
    </div>
</template>
<script>
import object2Style from '../../utils/object2Style'
export default {
    props:{
        height: {
            type: String,
            default: 'initial'
        },
        width: {
            type: String,
            default: 'initial'
        },
        left: {
            type: String,
            default: 'initial'
        },
        right: {
            type: String,
            default: 'initial'
        },
        top: {
            type: String,
            default: 'initial'
        },
        bottom: {
            type: String,
            default: 'initial'
        },
        bgColor: {
            type: String,
            default: "transparent"
        },

    },
    computed:{
        style(){
            return object2Style({
                width: this.width,
                height: this.height,
                left: this.left,
                right: this.right,
                top: this.top,
                bottom: this.bottom,
                "background-color": this.bgColor,
            })
        }
    }
}
</script>
<style lang="scss">
.x-absolute-box{
    position: absolute
}
</style>