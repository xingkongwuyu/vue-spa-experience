import Vue from 'vue';
import msgboxVue from './main.vue';
const defaults = {
    aaa: 12,
};
const LoadingConstructor = Vue.extend(msgboxVue);
const MessageBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    options = Object.assign({}, defaults, options);
    console.log(options)
    let parent = document.body ;
    let instance = new LoadingConstructor({
      el: document.createElement('div'),
      data: options
    });
  
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.visible = true;
    });
    return instance;
  };
  
  export default MessageBox;