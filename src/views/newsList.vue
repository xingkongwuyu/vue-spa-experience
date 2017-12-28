<template>
<div>
    <div class="infinite-con" v-infinitescroll="loadMore">
    <ul class="newslist-con">
       <li v-for="(news,index) in newsList" @click="goDetail(news.id)"> 
           <div class="detail-con">
               <h2>{{news.title}}</h2>
               <div>{{news.create_time}}</div>    
            </div>
            <div class="img-con">
              <img :src="news.title_img"/>
           </div>
       </li>
   </ul>
   <loading loading="loading"></loading>
   </div>
   <!-- <paragraph :pageno="page.page_current" url="/Jyh/article/index" :pagesize="page.page_size"></paragraph> -->
</div>
</template>
<script>
 import infinitescroll from './../directives/infiniteScroll.js'
 import loading from './../components/Loading'
  export default{
      data(){
          return {
              newsList:[],
              page:{},
              loading:false,
          }
      },
      components: {loading},
      methods:{
          loadMore(){
              var vm=this;
               if (this.loading) {
                  return
               }   
               this.loading=true; 
              var url='/api/news';
              console.log(url);
               vm.$http({
                   method: "GET",
                   url: url
               }).then(function (res) {
                   vm.loading=false;
                   vm.newsList = vm.newsList.concat(res.data.data);

                   vm.page = res.data.page;
               })
          },
          goDetail(id){
              this.$router.push({path:'/index/main/newsDetail/'+id})
          }
      },
      mounted(){
          console.log(this.$route.matched)
          var vm=this;
          vm.$http({
              method:"GET",
              url:"/api/news"
          }).then(function(res){
              vm.newsList=res.data.data;
              vm.page=res.data.page;
          })  
      },
      directives: {
        infinitescroll
      },
  }
</script>
<style lang="scss" rel="stylesheet" scoped>
    .infinite-con{
      height:100%;
      overflow:scroll;
    }
  .newslist-con{
      background-color:#F2F7FC;
      li{
          display:-webkit-box;
          border-bottom:1px solid #ccc;
          width:9rem;
          margin:0 auto;
          .detail-con{
            -webkit-box-flex: 1;
            display:-webkit-box;
            -webkit-box-orient: vertical;
            padding:.46875rem;
            min-height:3rem;
            -webkit-box-pack: justify;
            .detail{
                padding-top:.15625rem;
            }
          }
          .img-con{
            width: 3.046875rem;
            height:2rem;
            margin-left: .08rem;
            position: relative;
            display: block;
            background: #f2f7fc url(./../../static/images/img-con.png) no-repeat 50% 50%;
            -webkit-border-radius: 1px;
            border-radius: 1px;
            background-size:1rem 1rem;
            img{
                width:100%;
            }
          }
      }
  }
</style>