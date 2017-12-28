<template>
<div>
  <div class="personal-center">
     <div class="detailinfo">
        <div class="img-con">
            <img src="../../static/images/defaultimg.jpg"/>
        </div>
        <div class="phone-name">
            <p class="name">李三</p>
            <p class="phone">15957111111</p>
        </div>
        <div class="toseemoredetail">修改</div>
     </div>
     <div class="person-list">
         <ul>
             <li>这只是一个静态页。嘻嘻</li>
             <li>我的订单</li>
             <li>购物车</li>
         </ul>
     </div>
     
    <button class="btn-loginout" type="button" @click="loginOut">登出</button>
     
     
  </div>
   
</div>
</template>
<script>
  export default{
      data(){
          return {
             value:false
          }
      },
      methods:{
        loginOut(){
            localStorage.clear();
            this.$router.push({path:'/login'})
        }
      }
     
  }
</script>
 <style lang="scss" rel="stylesheel">
  .personal-center{
        background-color:#fff;
        width:10rem;
        margin:0 auto;
        .detailinfo{
          display:flex;
          height:3.53125rem;
          background-color:#ff5000;
          padding:1.3125rem 0.390625rem 0;
          box-sizing: border-box;
          .img-con{
            width:1.6875rem;
            height:1.6875rem;
            border-radius:.03125rem;
            border:2px solid #6baee2;
            img{
                width:100%;
            }
          }
          .phone-name{
            padding-left:.421875rem;
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            height:1.6875rem;
            -webkit-box-pack: justify;
            color:#fff;
          }
          .toseemoredetail{
              width:2rem;
              height: 2rem;
              color:#fff;
          }
      }
      .person-list{
          margin-top:.46875rem;
          width:10rem;
          background-color:#fff;
          ul{
              margin:0 0.390625rem ;
              padding:0 .3125rem;
              li{
               height:1.34375rem;
               line-height:1.34375rem;
               color:#666;
               border-bottom:1px solid #ebebeb;
              }
          }
      }
  }
  .btn-loginout{
   
    text-align:center;
    margin: 0 0.6625rem;
    margin-top: .890625rem;
    height: 1.171875rem;
    width: 8.6875rem;
    border-radius: 1.171875rem;
    background: -webkit-gradient(linear, 0 center, right center, from(#ff9000), to(#ff5000));
    outline: none;
    border: none;
    color: #fff;
  }

</style>