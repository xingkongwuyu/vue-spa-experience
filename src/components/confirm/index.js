import confirmBox from './src/index';
export default {
    install(Vue) {
      Vue.prototype.$confirm = confirmBox;
    },
  };