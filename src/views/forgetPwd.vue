<template>
	<div class='App-jyhForgetPwd'>
		<img class="logo" src='static/images/logo_login.png' />
		<div>忘记密码</div>
		<form class="forgetPwd-box" name="_form" method="" novalidate v-show='next==0'>
			<div class="forgetPwd-wrap">
				<input v-model="phone" ref='mobile' type="tel" placeholder="手机号" @focus="showClear" @blur="hideClear" @keyup="showClear()"
				  autocomplete="off" novalidate>
				<i class="clear" v-show='clear' @click="delectPhone"></i>
			</div>
			<div class="forgetPwd-wrap forgetPwd-wrap_p">
				<input type="number"   v-model="code"  placeholder="请输入验证码">
				<i class="disbled" v-if="!showOtherBtn" :class="{'orange':showButton}" @click="second==59&&showButton&&getCode()">获取验证码</i>
				<i class="disbled" v-if="showOtherBtn" @click="">{{second}}后重新获取</i>
			</div>

			<div class="login">
				已有账号?<a href="/login" class="login-href">登录</a>
			</div>
			<button class="btn-next" type="button" @click="verify">下一步</button>
		</form>
		<form class="forgetPwd-box" name="_form" method="" novalidate v-show='next==1'>
			<div class="forgetPwd-wrap">
				<input  v-model="password" placeholder="密码" type="password">
			</div>
			<div class="forgetPwd-wrap forgetPwd-wrap_p">
				<input   v-model="newpassword" type="password"  placeholder="重新输入密码">
			</div>

			<div class="login">
				已有账号?<a href="/login" class="login-href">登录</a>
			</div>
			<button class="btn-next" type="button" @click="resetPassword">下一步</button>
		</form>
	</div>
</template>
<script>
	import clickoutside from './../directives/clickoutside.js'
	export default {
		data() {
			return {
				phone: '',
				clear: false,
				alert: false,
				showButton:false,
				second:59,
				timer:null,
				showOtherBtn:false,
				code:'',
				next:0
			}
		},
		components: {},
		methods: {
			changePW() {
				this.type = this.type == 'password' ? "text" : "password"
			},
			showClear() {
				if (this.phone) {
					this.clear = true;
				}
				this.toshowbutton();
			},
			hideClear(e) {
				if (!e.target.previousSibling == this.$refs.phone) {
					this.clear = false;
				}
			},
			delectPhone() {
				this.phone = "";
				this.clear = false;
			},
			toshowbutton() {
            var len = this.phone.length;
            var exp = /^1[3|4|5|7|8][0-9]{9}$/;
            if (len == 11 && exp.test(this.phone) == true) {
               this.showButton=true
            }
        },
			hideAlert() {
				this.alert = false
			},
			getCode() {
				var vm=this;
				this.$http({
					method: 'post',
					url: '/api/getcode',
					data: {
						phone: vm.phone,
						type: 2,
                     }
                }).then(function(res){
					//alert(res.message)
					if(res.data.success){
					vm.showOtherBtn=true;
					vm.timer=setInterval(function(){
						 if(vm.second > 0) {
                           vm.second--;
                         }else{
							 clearInterval(vm.timer);
							
							 vm.second=59;
						 } 
					},1000)
					}
				})
			},
			verify() {
				var vm=this;
				this.$http({
					method: 'post',
					url: '/api/verify',
					data: {
						phone: vm.phone,
						code: vm.code,
                     }
                }).then(function(res){
					if(res.data.success){
                      vm.next=1;
					}
					
				})
			},
			resetPassword() {
			var vm=this;
			this.$http({
				method: 'post',
				url: '/api/resetpassword',
				data: {
					phone: vm.phone,
					code: vm.code,
					password:vm.password
					}
			}).then(function(res){
				if(res.data.success){
                  vm.$router.push({path: '/login'});
				}	
			})
		}
		},
		directives: {
			clickoutside
		},
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	.App-jyhForgetPwd {
		width: 10rem;
		height: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding-top: 1.296875rem;
		text-align: center;
		margin:0 auto;
		.logo {
			width: 2.1875rem;
			height: auto;
		}
		.forgetPwd-box {
			padding-top: 1.015625rem;
			.forgetPwd-wrap {
				width: 8.6875rem;
				padding: .25rem 0;
				margin: 0 auto;
				border-bottom: 2px solid #ff5000;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				input {
					width: 6rem;
					border: none;
					outline: none;
					color: #333;
					font-size: inherit;
				}
				.clear {
					width: .390625rem;
					height: .390625rem;
					background: url(./../../static/images/icon_tableclear.png) no-repeat 0 0;
					background-size: 100% 100%;
				}
				.tosee {
					width: .390625rem;
					height: .234375rem;
					background: url(./../../static/images/eye.png) no-repeat 0 0;
					background-size: 100% 100%;
				}
				.disbled{
				    font-style:normal;
					color:#555
				}
				.orange{
                   color:#ff5000
				}
			}
			.forgetPwd-wrap_p {
				padding-top: 1.25rem;
			}
			.login{
				padding-top: .609375rem;
				width: 8.6875rem;
				margin: 0 auto;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-end;
				color: #555;
				.login-href {
					color: #ff5000;
				}
			}
			.btn-next {
				margin-top: .90625rem;
				height: 1.171875rem;
				width: 8.6875rem;
				margin: 0 auto;
				border-radius: 1.171875rem;
				background: -webkit-gradient(linear, 0 center, right center, from(#ff9000), to(#ff5000));
				outline: none;
				border: none;
				color: #fff;
				margin-top: .890625rem;
			}
		}
	}
</style>