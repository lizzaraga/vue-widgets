<template>
    <div class="x-mat-select" @click.stop>
        <mat-input-vue :inline="inline"
        ref="input"
        :value="inputValue"
        :label="label"
        :placeholder="placeholder"
        @focus="onClick" readonly/>
        <select 
        @change="updateValue($event.target.value)"
        :name="name" :id="id">
            <option :selected="current.value == item.value"
            :value="item.value"
            :key="item.value+''+index"
            v-for="(item, index) in items">
            {{item.displayValue}}
            </option>
        </select>
        <transition :name="transitionName">
            <div v-show="isOpen" class="x-mat-select__items">
                <div class="item" 
                :class="{'active': current.value == item.value}"
                @click="onItemSelected(item)" :key="item.value+'x-mat-select__items'+index"
                v-for="(item, index) in items"
                >{{item.displayValue}}
                </div>
            </div>
        </transition>
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
        items:{
            type: Array,
            default(){
                return []
            }
        },
        value: {
            type: String
        },
        transitionName:{
            type: String,
            default: 'fade'
        },
        inline: {
            type: Boolean,
            default: false
        },
    },
    components:{
        MatInputVue
    },
    data(){
        return {
            current: {value: '', displayValue: ''},
            isOpen: false
        }
    },
    watch:{
        value: {
            immediate: true,
            handler(value){
                const index = this.items.findIndex(i => i.value == value)
                if(index >= 0){
                    this.current = this.items[index]
                }else{
                    this.current = this.items[0]
                }
            }
        }
    },
    computed:{
        inputValue(){
            return this.current.displayValue
        }
    },
    methods:{
        onClick(){
            this.isOpen = true
        },
        updateValue: function (value) {
            const item = this.items.find(i => i.value == value)
            console.log("Item", item, this.items, value)
            this.current = item
            this.$emit('input', value.trim())
        },
        onItemSelected(item){
            this.current = item
            this.closeChooser()
            this.$emit('input', item.value.trim())
        },
        closeChooser(){
            this.isOpen = false
        }
    },
    destroyed(){
        document.removeEventListener('click', this.closeChooser)
    },
    mounted(){
        document.addEventListener('click', this.closeChooser)
    }
}
</script>
<style lang="scss">
.x-mat-select{
    position: relative;
    &>select{
        display: none;
    }
}
.x-mat-select__items{
    position: absolute;
    z-index: 4;
    box-shadow: 0 0 10px #0001;
    background-color: #fff;
    
    top: 0;
    left: 0;
    right: 0;
    max-height: 600px;
    overflow: auto;
    .item{
        cursor: pointer;
        font-size: 0.85rem;
        padding: 0.65rem 0.6rem;
        border-bottom: 1px solid #eee;
        &.active{
            background-color: #f8f8f8;
            font-weight: 600;
        }
    }
}
</style>