<template>
  <transition name="mei-message-fade">
    <div v-if="show" :class="[
        'mei-message',
        type? `mei-message-${ type }` : '']"
      >
      <i :class="iconClass"></i>
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
        show:true,
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
.mei-message-fade-enter-active {
  transition: all 2s ease;
}
.mei-message-fade-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.mei-message-fade-enter, .mei-message-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  top:0px;
}
</style>
