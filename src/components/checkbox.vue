<template>
    <label class="app">
        <input type="checkbox"  style="display:none" :disabled="disabled"  :value="nativeValue" @change="handleChange" v-model="inputValue"/>
         <span class="icon"></span>
         <span>{{labelText}}</span>
    </label>
</template>
<script>
 export default{
     data(){
         return {
             inputValue:this.value
         }
     },
     props:{
         labelText:{
             type:String,
             required: true
         },
         value:{
             type:Boolean,
         },
         disabled:{
             type:Boolean,
         },
         nativeValue: {
             type: String
        },
     },
 watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleClick () {
      // 阻止事件冒泡，放置外部控制的时候触发两次 click
    },
     handleChange () {
      this.$emit('elChangeInput',this.inputValue)
    }
  },
 }

</script>
<style>
    .app .icon{
        display: inline-block;
        width:20px;
        height:20px;
        border:2px solid #333;
        cursor: pointer;
    }
    .app input[type=checkbox]:checked+ .icon{
        border:2px solid red;
        background-color:red;
    }
</style>