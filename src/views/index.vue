<template>
<div class="index-swrapper">
    <div class="swrapper">
    <router-view></router-view>
    </div>
    <footer>
          <ul class="footer">
            <li :class="{'active':$route.matched[1].path=='/index/main'}"><router-link to="/index/main/course" >首页</router-link></li>
            <li :class="{'active':$route.matched[1].path=='/index/me'}"><router-link to="/index/me" >我的</router-link></li>
        </ul>
    </footer>
</div>
</template>
<style lang="scss" rel="stylesheet/scss">
.index-swrapper{
    width:100%;
    height:100%;
}
.swrapper{
    padding-bottom:1.30666667rem;

}
footer {
    width: 100%;
    height: 1.30666667rem;
    line-height:1.30666667rem;
    position: fixed;
    bottom: 0;
    box-shadow: 0 0 10px 1px rgba(7,17,27,.1);
    z-index: 99997;
    box-sizing: border-box;
    background-color: #fff;
}
footer .footer {
    height: 100%;
    color: #93999f;
    text-align: center;
    li{
       width:50%;
       height:100%;
       float:left;
       color: inherit;
       box-sizing: border-box;
    }
    .active{
        a{
         color:#fff;
        }
        background-color:#ff5000;
    }
}

</style>
