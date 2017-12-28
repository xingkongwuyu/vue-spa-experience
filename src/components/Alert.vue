<template>
	<div class='dialog-alert' v-show="alert">
        <div class='dialog-content'v-clickoutside="hideAlert">
            <div class="dialog-body">{{message}}</div>
            <a href="javascript:;" class="dialog-button" @click="hideAlert">确定</a>
        </div>
        <div class="dialog-mask"></div>
    </div>
</template>
<script>
import clickoutside from'./../directives/clickoutside.js'
 export default{
     props:{
         alert:{
             type:Boolean,
             required: true
         },
         message:{
             type:String,
             required: true
         }
     },
     methods:{
        hideAlert() {
            this.$emit('hideAlert');
        }
     },
    directives: {
        clickoutside
    },

 }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
   .dialog-alert {
        z-index: 21px;
        .dialog-content {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -4.6875rem;
            margin-top: -1.734375rem;
            z-index: 21;
            border-radius: .3125rem;
            background-color: #fff;
        }
        .dialog-body,
        .dialog-button {
            width: 9.375rem;
            height: 1.734375rem;
            margin: 0 auto;
            line-height: 1.734375rem;
        }
        .dialog-body {
            border-bottom: 1px solid #999;
            color: #6c6c6c
        }
        .dialog-button {
            color: #ff5000
        }
	}
    .dialog-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 20;
        background: rgba(0, 0, 0, .6)
    }
</style>