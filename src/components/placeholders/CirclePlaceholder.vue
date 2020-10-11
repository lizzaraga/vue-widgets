<template>
    <div class="x-circle-placeholder" :style="style">
        <slot></slot>
    </div>
</template>
<script>
import styleConverter from '../../utils/object2Style'
export default {
    props:{
        radius: {
            type: Number,
            default: 50
        },
        bgColor:{
            type: String,
            default: '#000'
        }
    },

    computed:{
        style (){
            return styleConverter({
                "background-color": this.bgColor,
                "height" : this.radius+"px",
                "width" :  this.radius+"px",
                
            })
        }
    }
}
</script>

<style lang="scss">
.x-circle-placeholder{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    //box-shadow: inset 0px 1px 3px #bbb, inset 0px -1px 3px #ccc,  0px 2px 5px rgb(230, 230, 230);
}
</style>