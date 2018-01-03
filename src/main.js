// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import Axios from './utils/diyaxios';
import './css/normalize.css';
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'
import vueNotice from './components/notice'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(vueNotice)

if(process.env.NODE_ENV=="production"){

}else{

}

Vue.prototype.$http = Axios;
// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  routes,
  mode: 'history',
});

function guardRoute (to, from, next) {
  if (window.confirm(`Navigate to ${to.path}?`)) {
    next()
  } else if (window.confirm(`Redirect to /baz?`)) {
    next('/register')
  } else {
    next(false)
  }
}

router.beforeEach((to, from, next) => {
  if (to.path=='/login'||to.path=='/register'||to.path=='/forgetPwd') {
    next()
  }else{
    if(!window.localStorage.getItem('userInfo')){
      next({
        path:'/login'
      })
    }else{
      next()
    }
  }
})



const app= new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// 输入框在虚拟键盘弹出时，自动滚动到可见位置
/*
document.body.addEventListener('click', function (event) {
  var element = event.target;
  var tags = {
    'INPUT': 1,
    'TEXTAREA': 1,
  }
  if ((element.tagName in tags) ) {
    setTimeout(function(){
      element.scrollIntoViewIfNeeded();
      // console.log('scrollIntoViewIfNeeded');
    }, 400);
  }
}, false);*/
