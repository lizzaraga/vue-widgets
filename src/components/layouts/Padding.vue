<template>
    <div class="x-padding" :style="style">
        <slot/>
    </div>
</template>
<script>
import object2Style from '../../utils/object2Style'
export default {
    props: ["left", "right", "top", "bottom"],
    computed:{
        style(){
            return object2Style({
                "padding-top": this.top,
                "padding-left": this.left,
                "padding-right": this.right,
                "padding-bottom": this.bottom,
            })
        }
    }
}
</script>