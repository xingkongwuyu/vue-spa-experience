
## 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。
1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. 然后安装 cnpm 命令：

        npm install -g cnpm --registry=https://registry.npm.taobao.org


## 快速开始

    git clone https://github.com/xingkongwuyu/vue-spa-experience
    cd vue-spa-experience
    cnpm install
    npm run dev

## 命令列表：

    #开启本地开发服务器，监控项目文件的变化，实时构建并自动刷新浏览器，浏览器访问 http://localhost:8081
    npm run dev

    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录，
    npm run build

    #运行构建服务器，可以查看构建的页面
    npm run build-server

    #运行单元测试
    npm run unit

## 项目功能的介绍
   #目前项目的数据使用的是模拟数据

   #vue-router 的使用
   使用导航守卫  当未登入的时候进行拦截直接跳到登录页

   #axios的使用
   使用axios 对返回数据进行统一管理   返回数据code的统一处理

   #vue directive
   clickoutside.js  弹出层外层点击隐藏
   infiniteScroll.js  无效滚动加载

   #vue components
   提示信息 alert.vue;
   加载中  loading.vue



