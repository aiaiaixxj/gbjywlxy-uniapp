<template>
	<view>
		<view class="container" style="">
			<el-image class="bg-image" style="" :src="url"></el-image>
			<el-image class="title-image" src="../../static/images/title.png" style=""></el-image>
			<view class="input-row border">
				<!-- <text class="title">账号：</text> -->
				<el-input class="el-input" type="text" clearable focus v-model="username" @change="GetUserAccountInfo"
					maxlength="18" placeholder="请输入账号">
				</el-input>
			</view>
			<view class="input-row border">
				<!-- <text class="title">密码：</text> -->
				<el-input type="password" displayable v-model="password" @change="GetUserSecretInfo"
					placeholder="请输入密码"></el-input>
			</view>
			<!-- <view v-if="false" class="input-row">
				<text class="title">验证码：</text>
				<el-input type="text" v-model="captchaText" placeholder="请输入验证码"></el-input>
				<view class="send-code-btn captcha-view" @click="captcha('refreshCaptcha')">
					<i v-if="captchaing" class="uni-icon_toast uni-loading"></i>
					<img v-if="!captchaing" :src="captchaBase64" width="100%" height="100%"></img>
				</view>
			</view> -->
			<view class="input-row  input-row-login">
				<button type="primary" class="primary" :loading="loginBtnLoading" @tap="bindLogin">登录</button>

			</view>
			<view class="footer-text">
				<text>主办：武汉市委组织部干部教育处</text>
				<text>承办：武汉市工程科学技术研究院</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		Toast
	} from 'mint-ui';
	export default {
		name: "login",
		data() {
			return {
				loginBtnLoading: false,
				input: '',
				username: uni.getStorageSync("username"),
				password: uni.getStorageSync("password"),
				fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
				url: '../../static/images/bg_login.png'
			}
		},

		methods: {
			GetUserAccountInfo(e) {
				console.log(e);
				this.username = e;
				uni.setStorageSync("username", e)
				console.log("this.username=>", this.username);
				console.log("getStorageSyncusername=>", uni.getStorageSync("username"))

			},
			GetUserSecretInfo(e) {
				console.log(e);
				this.password = e;
				uni.setStorageSync("password", e)
				console.log("this.password=>", this.password);
				console.log("getStorageSyncpassword=>", uni.getStorageSync("password"))
			},
			bindLogin() {
				// uni.request({
				// 	url: 'http://192.168.0.107:8080/whce_new/applets/login.jspx',
				// 	data: {
				// 		username: '420103197804063213',
				// 		password: '1qaz2x3c'
				// 	}

				// 	,
				// 	method: 'POST', //get、post、delete
				// 	header: {
				// 		'content-type': 'application/x-www-form-urlencoded'
				// 	} //请求头的信息
				// }).then((result) => {
				// 	let [error,res]=result;  //ES6对数组的解构
				// 	console.log("res=>", res)
				// 	console.log("this.username=>", this.username)
				// 	console.log("this.password=>", this.password)
				// }).catch((error) => {
				// 	console.log("error=>", error)
				// })
				// POST
				this.$axios({
						method: 'POST',
						url: '/applets/login.jspx',
						params: {
							username: this.username,
							password: this.password
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						} //请求头的信息
					})
					.then(function(res) {
						console.log(res);
						uni.setStorageSync("userInfo", res);
						if (res.status == 1) {
							uni.redirectTo({
								url: '../../pages/index/index',
								success: res => {
									console.log("res=>", res)
								},
								fail: (Error) => {
									console.log("Error=>", Error)
								},
								complete: () => {}
							})
							
						} else if (res.status == -1) {
							console.log('用户被禁用！')
							Toast({
								message: '用户被禁用！',
								duration: 1000
							})
						} else if (res.status == -2) {
							console.log('用户名错误！')
							Toast({
								message: '用户名错误！',
								duration: 1000
							})
						} else if (res.status == 0) {
							console.log('密码错误！')
							Toast({
								message: '密码错误！',
								duration: 1000
							})
						} else {
							console.log('请重新核对账号或密码！')
							Toast({
								message: '请重新核对账号或密码！',
								duration: 1000
							})
						}
					})
					.catch((error) => {
						// console.log(error);
					});
			},

		}
	}
</script>

<style>
	image {
		position: fixed;
	}

	.container {
		display: flex;
		flex-direction: column;

	}

	.input-row {
		position: relative;
		width: 88vw;
		margin-left: 6vw;
		top: 35vh;
		margin-top: 20px;
	}

	.input-row-login {}

	.primary {
		background-color: red;
	}

	.title-image {
		position: absolute;
		width: 25%;
		height: 14%;
		left: 37%;
		top: 15%;
	}

	.bg-image {
		width: 100vw;
		height: 100vh;
		position: fixed;
	}

	.footer-text {
		position: absolute;
		display: flex;
		flex-direction: column;
		bottom: 20rpx;
		left: 23vw;
	}

	.footer-text text {
		/* font-family: sans-serif; */
		font-size: 25rpx;
		color: white;
		letter-spacing: 5rpx;
	}
</style>
