<template>
  <transition name="mei-message-fade">
    <div v-show="show" :class="[
        'mei-message',
        type? `mei-message-${ type }` : '']"
      >
      <i :class="iconClass" v-if="iconClass"></i>
      <span>{{text}}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  
  };
  export default {
    data() {
      return {
        show:false,
        text:'',
        type:''
      };
    },
    computed: {
      iconClass() {
        return this.type
          ? `mei-message-icon mei-icon-${ typeMap[this.type] }`
          : '';
      }
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss" >
   .mei-message{
          position: fixed;
          min-width: 380px;
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid #ebeef5;
          position: fixed;
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
          background-color: #edf2fc;
          transition: opacity .3s,transform .4s;
          overflow: hidden;
          padding: 15px 15px 15px 20px;
          background-color:#ccc;
         
    }
    .mei-message-success{
        background-color:green; 
    }
    .mei-message-error{
        background-color:orange; 
    }
   .mei-message-fade-enter,.mei-message-fade-leave-to{
      opacity:0.5;
   }
  .mei-message-fade-enter-active{
       animation: bounce-in 1s;
  }
   .mei-message-fade-leave-active{
      animation: bounce-in 1s reverse;
  }
@keyframes bounce-in {
  0% {
       opacity: 0;
  }
   50% {
      opacity:0.5; 
  }
  100% {
      opacity:1
  }
}
</style>
</style>
