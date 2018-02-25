<template>
    <div>
        <header>
            <div class="header">
                 <a class="back" @click="goBack()" >返回</a>
                 <div>标题111111</div>
            </div>
        </header>
        <div class="new-detail" v-html="content" >
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newsDetail: '',
                content:''
            }
        },
        methods:{
           goBack(){
               this.$router.go(-1)
           } 
        },
        mounted() {
            console.log(this.$route.params.id)
            var vm = this;
             var url='/api/newdetail';
            vm.$http({
                method: "GET",
                url: url
            }).then(function (res) {
                var normalizeCode = function(code){
                    code = code.replace(/&lt;/g,'<');
                    code = code.replace(/&gt;/g,'>');
                    code = code.replace(/&amp;/g,'&');
                    code = code.replace(/&quot;/g,'"');
                    return code;
                };
                vm.newsDetail=res.data.data;
                vm.content = normalizeCode(res.data.data.content);
            })
        }
    }
</script>
<style lang="scss" rel="stylesheet">
   .new-detail{
       padding:.46875rem;
       box-sizing: border-box;

       p{
          line-height:2;
          color:#666;
       }
       img{
           max-width:100%;
       }
   }
</style>