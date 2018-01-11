<template>
<transition name="mei-modal-fade">
    <div v-show="show" class="mei-modal" tabindex="-1" role="dialog" aria-labelledby="bombConfirmLabel" aria-hidden="false">
        <div class="mei-modal-mask"></div>
        <div class="mei-modal-wrap">
            <div class="mei-modal-content">
                <i class="mei-icon-close" @click="onClosed">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1515657730389" class="icon" style="" 
                    viewBox="0 0 1024 1024" version="1.1" p-id="2915" width="40" height="40"><path d="M557.311759 513.248864l265.280473-263.904314c12.54369-12.480043 12.607338-32.704421 0.127295-45.248112-12.512727-12.576374-32.704421-12.607338-45.248112-0.127295L512.127295 467.904421 249.088241 204.063755c-12.447359-12.480043-32.704421-12.54369-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.280796l262.975407 263.775299-265.151458 263.744335c-12.54369 12.480043-12.607338 32.704421-0.127295 45.248112 6.239161 6.271845 14.463432 9.440452 22.687703 9.440452 8.160624 0 16.319527-3.103239 22.560409-9.311437l265.216826-263.807983 265.440452 266.240344c6.239161 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.311759 513.248864z" p-id="2916"/></svg>
                </i>
                   <div class="mei-modal-header">
                    <p>{{title}}</p>
                </div>
                <div class="mei-modal-body">
                    <div class="mei-status-icon-box">
                    </div>
                   <p v-if="!dangerouslyUseHTMLString">{{ text }}</p>
                   <p v-else v-html="text"></p>
                </div>
                <div class="mei-modal-footer">
                    <button type="button" class="mei-btn mei-btn-primary" id="confirmButtons1" @click="button[0].ontap">{{button[0].text}}</button>
                    <button type="button" class="mei-btn mei-btn-text" id="confirmButtons1" @click="button[1].ontap">{{button[1].text}}</button>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                title: '1212',
                text: '12121111112',
                button: [],
                dangerouslyUseHTMLString:false
            }
        },
         methods:{
                onClosed(){
                    this.close();
                }
        }

    }
</script>

<style lang="scss" rel="stylesheet">
  @import "./../../../css/component.scss";
  .mei-modal-fade-enter,.mei-modal-fade-leave-to{
       transform: scale(0);
  }
  .mei-modal-fade-enter-active{
       animation: bounce-in 2s;
  }
   .mei-modal-fade-leave-active{
       animation: bounce-in 2s reverse;
  }
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>