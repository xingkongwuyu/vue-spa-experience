<template>
<div>
    <div @click="handleFormatError">11111</div>
    <div @click="handleFormatError3">11111</div>
    <div @click="handleFormatError4">弹出确认框</div>
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
     handleFormatError3 () {
       const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true,
        });
     },
       confirm () {
          var content = ` <div class="title">11111</div>`
          var vm=this
         const confirm = this.$confirm({
          show:false,
          title:'23232',
          text:content,
          dangerouslyUseHTMLString:true,
          button:[{
                text: '确定',
                ontap: function () {
                    confirm.close().then(function(res){
                     console.log(111233233231)
                   });
                }},
                {
                text: '取消',
                ontap: function () {
                  
                   confirm.close().then(function(res){
                       console.log('close')
                   });
                }
            }]
    
        });
     },
      handleFormatError5 () {
         this.$message({
          type:'success',
          text:11111,
        });
     },
    }
  }
</script>