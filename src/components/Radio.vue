<template>
  <div>
    <span>
      <input type="radio" :name="name"  :id="id" :checked="checked" :value="value" :required="required" @click="sss"/>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
    name: {
      type: String,
      required: true
    },
    
    id: {
      type: Number,
    },
    value: {
      type: Number,
    },
    required:{
       type: Boolean,
    },
    checked:{
      type: Boolean,
    },
  },
  methods:{
    sss(e){
       this.$emit('changeValue',e)
    }
  }
  }
</script>