<template>
    <div class="x-circle-loader" :style="style">
    </div>
</template>
<script>
import styleConverter from '../../utils/object2Style'
export default {
    props:{
        radius:{
            type: Number,
            default: 30
        },
        bgColor: {
            type: String,
            default: "#fafafa"
        },
        
    },
    computed:{
        style(){
            return styleConverter({
                height: this.radius+"px",
                width: this.radius+"px",
                "background-color": this.bgColor
            })
        }
    }
}
</script>
<style lang="scss">
.x-circle-loader{
    border-radius: 50%;
    //border : 4px solid #000;
    position: relative;
    box-shadow: 0px 2px 3px #aaa;
    
    &::after{
        content: '';
        position: absolute;
        left: 6px;
        right: 6px;
        top: 6px;
        bottom: 6px;
        border: 4px solid #000;
        border-color: transparent;
        border-top-color: #273e50;
        border-radius: inherit;
        animation: turn 0.6s linear infinite;
    }
}

@keyframes turn {
     
     from{
         transform: rotate(0deg);
     }
     to{
         transform: rotate(360deg);
     }
}
</style>