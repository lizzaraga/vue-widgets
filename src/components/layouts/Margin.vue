<template>
    <div class="x-margin" :style="style">
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
                "margin-top": this.top,
                "margin-left": this.left,
                "margin-right": this.right,
                "margin-bottom": this.bottom,
            })
        }
    }
}
</script>