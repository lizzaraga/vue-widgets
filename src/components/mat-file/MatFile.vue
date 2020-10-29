<template>
    <div class="x-mat-file" @click="onClick">
         <mat-input-vue :inline="inline" :required="required"
        :value="inputValue"
        :label="label"
        :placeholder="placeholder"
         readonly/>
        <input hidden type="file" ref="inputFile" 
        @change="updateValue($event.target.files)"
        :name="name" :multiple="multiple" :id="id"

        >
    </div>
</template>
<script>
import MatInputVue from '../mat-input/MatInput.vue'

export default {
    props:{

        id: {
                type: String,
        },
        name: {
            type: String,
        },
        label: {
            type: String,
            default: ''
        },
        placeholder:{
            type: String,
            default: ''
        },
        value: {
            type: Object,
            validator(value){
                return value instanceof FileList
            }
        },
        inline: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        }, 
        text:{
            type: String,
            default: ""
        }
    },
    components:{MatInputVue},
    data(){
        return {
            inputValue: ''
        }
    },
    watch:{
        text:{
            immediate: true,
            handler(value){
                this.inputValue = value
            }
        }
    },
    methods:{
        onClick(){
            this.$refs.inputFile.click()
        },
        updateValue: function (files) {
            this.inputValue = ""
            files.forEach(file => {
                this.inputValue+=file.name+";"
            });
            this.$emit('input', files)
        },
    }
}
</script>