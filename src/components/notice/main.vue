<template>
<div>
  <transition name="el-loading-fade" @after-leave="handleAfterLeave">
      <div v-if="show">hello<input v-model="aaa"></div>
  </transition>
  </div>
</template>

<script>
export default {
   data(){
       return{
           aaa:12212,
           show:false
       }
   },
   methods:{
       alert(){
           console.log('1111')
       },
       handleAfterLeave(){
            //关闭后事件进行触发
            this.$emit('after-leave');
       }
   },
   
   mounted(){
   
   }
}
</script>

<style>
  .el-loading-fade-enter,.el-loading-fade-leave-to{
       transform: scale(0);
  }
  .el-loading-fade-enter-active{
       animation: bounce-in 1s;
  }
   .el-loading-fade-leave-active{
       animation: bounce-in 1s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
