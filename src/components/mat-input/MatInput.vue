<template>
    <div class="x-field x-material" :class="{'date': isDate, 'textarea': textarea, 'inline': inline}">
        <label ref="label" class="x-field-label">{{label}}</label>
        <textarea v-if="textarea" ref="input"
         :cols="cols" 
         :rows="rows"
         :id="id"
         :value="value"
         :name="name"
         :required="required"
         :readonly="readonly"
         @focus="onFocus"
         @blur="onBlur"
         @input="updateValue($event.target.value)"
         class="x-field-input"
         >
         </textarea> 
        <input v-else ref="input"
         :type="type"
         :id="id"
         :value="value"
         :name="name"
         :required="required"
         :pattern="pattern"
         :readonly="readonly"
         @focus="onFocus"
         @blur="onBlur"
         @input="updateValue($event.target.value)"
         class="x-field-input">
         <slot/>
    </div>
</template>
<script>
export default {
    props: {
    
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ""
      },
      value: {
        type: String
      },
      required: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      pattern: {
        type: String,
      },
      textarea: {
        type: Boolean,
        default: false
      },
      cols: {
        type: Number,
        default: 30
      },
      rows: {
        type: Number,
        default: 10
      }
    },
    data(){
        return {
            innerValue: "",
            isActive: false,
            isFocused: false,
        }
    },
    watch:{
        value: {
            immediate: true,
            handler(value){
                this.innerValue = value == null ? "" : value.trim()
                const isActive = this.innerValue.length > 0
                this.isActive = isActive
                /**
                 * When you set / modify value from outside
                 */
                this.$nextTick(()=>{
                    //console.log('Next tick')
                    if(isActive == false){
                        this.$el.classList.remove("active")
                    }else this.addActiveClass()
                })
            }
        },
        isActive:{
            handler(value){
               if(value || this.label.trim() == ""){
                   this.$refs.input.setAttribute('placeholder', this.placeholder)
               }else {
                   this.$refs.input.setAttribute('placeholder', "")
               }
            }
        }
    },
    computed:{
        isDate(){
            return this.type == "date"
        },
    },
    methods: {
      addActiveClass(){
          if(this.$el.classList.contains('active') == false)
            this.$el.classList.add('active')
      },
      updateValue: function (value) {
        this.innerValue = value
        console.log('Update')
        this.addActiveClass()
        this.$emit('input', value.trim())
      },
      onFocus(e){
        this.isFocused = true
        this.isActive = true
        this.$el.classList.add('focus')
        this.$el.classList.add('active')
        this.$emit('focus', e)

      },
      onBlur(e){
          this.isFocused = false
          this.$el.classList.remove("focus")
          if(this.innerValue.trim() == ""){
              this.isActive = false
              this.$el.classList.remove("active")
              /**
               * Fix value change behaviour
               */
              this.$nextTick(()=> {
                  if(this.value != undefined && this.value.trim() != "") {
                      this.isActive = true
                      this.$refs.input.value = this.innerValue =this.value
                      this.addActiveClass()
                  }
              })
          }
          this.$emit('blur', e)
      },
      
    },
    mounted(){
        this.$nextTick(()=>{
            if(this.isActive || this.label.trim() == ""){
                this.$refs.input.setAttribute('placeholder', this.placeholder)
            }else {
                this.$refs.input.setAttribute('placeholder', "")
            }
        })
    }
}
</script>