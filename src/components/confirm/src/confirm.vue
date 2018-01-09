<template>
    <div v-show="show" class="mei-modal" tabindex="-1" role="dialog" aria-labelledby="bombConfirmLabel" aria-hidden="false">
        <div class="mei-modal-mask"></div>
        <div class="mei-modal-wrap">
            <div class="mei-modal-content">
                <div class="mei-modal-header">
                    <div class="mei-btn-close">
                        <i class="mei-icon-close" @click="button[1].ontap">2222</i>
                    </div>
                    <h4 class="mei-modal-title">{{title}}</h4>
                </div>
                <div class="mei-modal-body">
                    <div class="mei-status-icon-box">
                    </div>
                    <div class="mei-status-text">{{text}}</div>
                </div>
                <div class="mei-modal-footer">
                    <button type="button" class="mei-btn mei-btn-primary" id="confirmButtons1" @click="button[0].ontap">{{button[0].text}}</button>
                    <button type="button" class="mei-btn mei-btn-text" id="confirmButtons1" @click="button[1].ontap">{{button[1].text}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                title: '1212',
                text: '12121111112',
                button: []
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet">
    .mei-modal {
        .mei-model-mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(55, 55, 55, .6);
            height: 100%;
            z-index: 1000;
        }
        
    }
</style>