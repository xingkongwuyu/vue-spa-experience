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
 import loading from './../components/Loading';
 import {mapGetters} from 'vuex';
  export default{
      data(){
          return {
          }
      },
     computed:{
    ...mapGetters({
      'newsList':'newsList',
       'page':'page',
       'loading':'newsloading',
       'isFirstLoading':'isFirstLoading',
    }),
     },
      components: {loading},
      methods:{
          loadMore(){
              var vm=this;
               if (this.loading) {
                  return
               }   
               this.$store.commit('CHANGELOADING',true)
               this.$store.dispatch('getnews',true)
          },
          goDetail(id){
              this.$router.push({path:'/newsDetail/'+id})
          }
      },
      mounted(){
          console.log(this.$route.matched)
          var vm=this;
          if(vm.isFirstLoading==0){
             this.$store.dispatch('getnews',false);
          }
          
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
          border-bottom:1px solid #eee;
          width:9rem;
          margin:0 auto;
          cursor:pointer;
          .detail-con{
            -webkit-box-flex: 1;
            padding:.46875rem;
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
                height:100%;
            }
          }
          &:hover{
              background-color:#f5f5f5;
          }
      }
  }
</style>