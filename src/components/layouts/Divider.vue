<template>
    <div class="x-divider" :style="style"></div>
</template>
<script>
import object2Style from '../../utils/object2Style'
export default {
    props:{
        thickness: {
            type: Number,
            default: 1
        },
        horizontal:{
            type: Boolean,
            default: true
        },
        bgColor:{
            type: String,
            default: "#eee"
        }
    },

    computed:{
        style(){
            if(this.horizontal)
                return object2Style({
                    width: '100%',
                    height: this.thickness+"px",
                    "background-color": this.bgColor
                })
            else 
                return object2Style({
                    height: '100%',
                    width: this.thickness+"px",
                    "background-color": this.bgColor
                })
        }
    }
}
</script>