<template>
<div>
    <div @click="handleFormatError">11111</div>
    <div @click="handleFormatError2">11111</div>
    <div @click="handleFormatError3">11111</div>
    <div @click="handleFormatError4">312121</div>
    <div @click="handleFormatError5">3122112121</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        notice:'',
        aaa:111
      }
    },
    methods: {
      handleFormatError () {
        this.notice=this.$Notice({aaa:'122122',one:true});
     },
      handleFormatError2 () {
        this.$Notice({aaa:'12121212121',one:false});
     },
     handleFormatError3 () {
      
       const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true,
        });
     },
       handleFormatError4 () {
          var content = ` <div class="title">11111</div>`
          var vm=this
         const loading = this.$confirm({
          show:false,
          title:'23232',
          text:content,
          dangerouslyUseHTMLString:true,
          button:[{
                text: '确定',
                ontap: function () {
                    loading.close().then(function(res){
                     console.log(111233233231)
                   });
                }},
                {
                text: '取消',
                ontap: function () {
                  console.log(loading.close())
                   loading.close().then(function(res){
                     console.log(1111111)
                   });
                }
            }]
    
        });
     },
      handleFormatError5 () {
         this.$message({
          show:true,
          type:'error',
          text:11111,
        });
     },
    }
  }
</script>