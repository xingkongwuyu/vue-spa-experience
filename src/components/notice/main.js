import Vue from 'vue';
import msgboxVue from './main.vue';
const defaults = {
    aaa: 12,
    show:false,
    one:true
};
let oneLoading;
const LoadingConstructor = Vue.extend(msgboxVue);
LoadingConstructor.prototype.close = function() {
  
  this.$on('after-leave', _ => {
    const target =document.body
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$destroy();
  });
  this.show = false;
};
const MessageBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    options = Object.assign({}, defaults, options);
    console.log(options)
    let parent = document.body ;
    if(options.one&&oneLoading){
      return oneLoading
    }
    let instance = new LoadingConstructor({
      el: document.createElement('div'),
      data: options
    });
  
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.show = true;
    });
    if(options.one){
      oneLoading=instance
    }
    return instance;
  };
  
  export default MessageBox;