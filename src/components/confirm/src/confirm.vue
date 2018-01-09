<template>
    <div v-show="show" style="display: block;" id="bombConfirm" class="modal fade in ng-scope" tabindex="-1" role="dialog" aria-labelledby="bombConfirmLabel"
        aria-hidden="false">
        <div class="modal-backdrop fade in"></div>
        <div class="modal-dialog modal-sm modal-confirm" style="margin-top: -230px;">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="btn-close" data-dismiss="modal">
                        <i class="icon-close" id="bombCloseBtn" @click="show=false">2222</i>
                    </div>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body text-center">
                    <div class="status-icon-box">
                       
                    </div>
                    <div class="status-text">{{text}}</div>
                </div>
                <div class="modal-footer full-btn-box">
                    <button type="button" class="btn btn-blue full-btn" id="confirmButtons1" @click="button[0].ontap">{{button[0].text}}</button>
                    <button type="button" class="btn btn-blue full-btn" id="confirmButtons1" @click="button[1].ontap">{{button[1].text}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                show:true,
                title:'1212',
                text:'12121111112',
                button:[{
                text: '确定',
                ontap: function () {
                    
                }
            }]
            }
        }
    }
</script>

<style>
.modal {
    display: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.modal-backdrop.in {
    opacity: 0.5;
    filter: alpha(opacity=50);
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
}
.modal-sm {
    width: 708px;
    margin-left: -354px;
}
.modal-dialog {
    width: auto;
    margin: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 0px;
    z-index: 9999;
}
</style>