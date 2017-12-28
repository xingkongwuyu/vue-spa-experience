<template>
	<div class='App-jyhLogin'>
		<img class="logo" src='static/images/logo_login.png' />
		<div>用户登录</div>
		<form class="login-box" name="_form" method="" novalidate>
			<div class="login-wrap">
				<input id="mobile" v-model="mobile" ref='mobile' type="tel" placeholder="手机号" @focus="showClear" @blur="hideClear" @keyup="showClear" maxlength="11">
				<i class="clear" v-show='clear' @click="delectPhone"></i>
			</div>
			<div class="login-wrap login-wrap_p">
				<input id="password" type="password" name="password" :type="type" v-model="password" ref='password' placeholder="请输入密码" autocomplete="off"
				  novalidate>
				<i class="tosee" @click="changePW"></i>
			</div>

			<div class="forget-registration">
				<router-link to="/forgetPwd" class="forget" >忘记密码</router-link>
				<router-link to="/register" class="registration" >免费注册</router-link>
			</div>
			<button class="btn-login" type="button" @click.stop="loginIn">登录</button>
		</form>
		
		<alert :alert="alert" :message="message" @hideAlert='hideAlert'></alert>
	</div>
</template>
<script>
    import alert from './../components/Alert'
	export default {
		data() {
			return {
				type: "password",
				phonePage: true,
				mobile: '',
				password: '',
				clear: false,
				alert: false,
				message:''
			}
		},
		components: {alert},
		methods: {
			changePW() {
				this.type = this.type == 'password' ? "text" : "password"
			},
			showClear() {
				if (this.mobile) {
					this.clear = true;
				}
			},
			hideClear(e) {
				if (!e.target.previousSibling == this.$refs.mobile) {
					this.clear = false;
				}
			},
			delectPhone() {
				this.mobile = "";
				this.clear = false;
			},
			hideAlert() {
				this.alert = false
			},
			loginIn() {
				var vm=this;
				if (!this.mobile) {
					this.message = "手机号不得为空";
					this.alert = true;
					return
				} else if (!this.password) {
					this.message = "密码不得为空";
					this.alert = true;
					return
				}
			
				this.$http({
					method: 'post',
					url: '/api/hello',
					data: {
						phone: vm.mobile,
						password: vm.password,
                     }
                }).then(function(res){
					console.log(res)
					if(res.data.success){
						window.localStorage.setItem('userInfo',JSON.stringify(res));
						vm.$router.push({path: '/index/main/course'});
					}else{
						vm.message = res.data.message;
					    vm.alert = true;
					}
				
				})
			}
		},
		mounted(){
			console.log(this)
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	.App-jyhLogin {
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
		.login-box {
			padding-top: 1.015625rem;
			.login-wrap {
				width: 8.6875rem;
				padding: .25rem 0;
				margin: 0 auto;
				border-bottom: 2px solid #ff5000;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				input {
					width: 7.733333rem;
					height: 0.48rem;
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
			}
			.login-wrap_p {
				padding-top: 1.25rem;
			}
			.forget-registration {
				padding-top: .609375rem;
				width: 8.6875rem;
				margin: 0 auto;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				a {
					color: #555;
				}
			}
			.btn-login {
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