<template>
    <div class="x-stack" :style="style">
        <slot/>
    </div>
</template>
<script>
import object2Style from '../../utils/object2Style'
export default {
    name: "Stack",
    props:{
        height: {
            type: String,
            default: 'inherit'
        },
        width: {
            type: String,
            default: 'inherit'
        },
        bgColor: {
            type: String,
            default: "#eee"
        },
        overflow:{
            type: Boolean,
            default: false
        }
    },
    computed:{
        style(){
            return object2Style({
                width: this.width,
                height: this.height,
                "background-color": this.bgColor,
                "overflow-y": this.overflow ? "auto": "hidden"
            })
        }
    }
}
</script>
<style lang="scss">
.x-stack{
    position: relative;
    overflow-x: hidden;
}
</style>