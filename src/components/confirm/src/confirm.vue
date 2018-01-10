<template>
<transition name="mei-modal-fade">
    <div v-show="show" class="mei-modal" tabindex="-1" role="dialog" aria-labelledby="bombConfirmLabel" aria-hidden="false">
        <div class="mei-modal-mask"></div>
        <div class="mei-modal-wrap">
            <div class="mei-modal-content">
                <i class="mei-icon-close" @click="onClosed">2222</i>
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