import Vue from 'vue';
import confirmVue from './confirm.vue';
const defaults = {
    show:false,
    title:'',
    text:'',
    button:[]

};
let confirmVueLoading;
const confirmVueConstructor = Vue.extend(confirmVue);
confirmVueConstructor.prototype.close = function() {
    var vm=this;
    confirmVueLoading=null;
    var promise=new Promise(function(resolve,reject){
            if (vm.$el && vm.$el.parentNode) {
                vm.$el.parentNode.removeChild(vm.$el);
            }
            resolve();
            vm.$destroy();
            vm.show = false;
    })
    return promise
};
const confirmBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    console.log(options);
    options = Object.assign({}, defaults, options);
    console.log(options)
    let parent = document.body ;
    if(confirmVueLoading){
      return confirmVueLoading
    }
    let instance = new confirmVueConstructor({
      el: document.createElement('div'),
      data: options
    });
  
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.show = true;
    });

    confirmVueLoading=instance
    return instance;
  };
  
  export default confirmBox;