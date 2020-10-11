<template>
    <div class="x-line-placeholder" :style="style"></div>
</template>
<script>
import object2Style from '../../utils/object2Style'
export default {
    props:{
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "8px"
        },
        bgColor: {
            type: String,
            default: "#eee"
        },
        radius:{
            type: String,
            default: "8px"
        }
    },
    computed:{
        style(){
            return object2Style({
                width: this.width,
                height: this.height,
                "border-radius": this.radius,
                "background-color": this.bgColor,
            })
        }
    }
}
</script>

