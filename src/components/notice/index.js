import MessageBox from './main.js'
var vueNotice={}
vueNotice.install = function (Vue) {
    Vue.prototype.$Notice=MessageBox
};
export default vueNotice

