import Vue from 'vue';
import messageVue from './message.vue';
const defaults = {
    show:false,
    text:'',
    duration:'5000',
    type:''
};
let messageVueInstances;
const messageVueConstructor = Vue.extend(messageVue);
messageVueConstructor.prototype.close = function() {
    var vm=this;
    messageVueInstances=null;
    if (vm.$el && vm.$el.parentNode) {
        vm.$el.parentNode.removeChild(vm.$el);
    }
    vm.$destroy();
    vm.show = false;

};
const messageBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    console.log(options);
    options = Object.assign({}, defaults, options);
    console.log(options)
    let parent = document.body ;
    if(messageVueInstances){
      return messageVueInstances
    }
    let instance = new messageVueConstructor({
      el: document.createElement('div'),
      data: options
    });
  
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.show = true;
    });
    messageVueInstances=instance
    setTimeout(function(){
      instance.close();
    },options.duration)
   
    return instance;
  };
  
  export default messageBox;