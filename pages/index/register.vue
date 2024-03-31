<!-- 注册页面 -->
<template>
	<view class="content">
		<view class="skewed-box">
			<view class="top">
				<p>嗨，欢迎来到西湖论剑</p>
				<p>准备开启心得征程吧！</p>
			</view>
		</view>
		<view class="avatar-img"></view>
		<view class="form">
			<input class="text name" placeholder="请输入姓名" type="text" :value="name" />
			<input class="text number" placeholder="请输入身份证号" type="text" :value="number" />
			<button class="btn" @click="register">立即注册</button>
		</view>
		<view class="bottom-box">
			<span class="bottom">已有账号，</span>
			<navigator url="/pages/index/login">立即登录</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
// import permision from '/utils/js_sdk/permission.js';
import { mainLogin } from '/utils/faceLogin.js';

const name = ref('');
const number = ref('');



function register() {
	const certifyId = mainLogin();
	uni.startFacialRecognitionVerify({
		certifyId: certifyId,
		progressBarColor: '#CC0000', //刷脸圈的颜色
		screenOrientation: 'port', //认证界面UI朝向
		success: (e) => {
			console.log(JSON.stringify(e));
		},
		fail: (e) => {
			console.log(JSON.stringify(e));
		},
		complete: (e) => {
			console.log(JSON.stringify(e));
		}
	});
}

</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
}

.skewed-box {
	width: 100%; /* 盒子宽度 */
	height: 22vh; /* 盒子高度 */
	position: relative;
	.top {
		color: #fff;
		margin: 110rpx 50rpx;
		font-weight: bold;
		line-height: 60rpx;
	}
}

.skewed-box::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%; /* 控制倾斜部分的高度 */
	background-color: #00c6d2; /* 倾斜部分的背景色 */
	transform-origin: bottom; /* 以底部为倾斜的参考点 */
	transform: skewY(-7deg); /* 沿 Y 轴倾斜 -5 度 */
	z-index: -1;
}
.skewed-box::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 50%; /* 控制水平部分的高度 */
	background-color: #00c6d2; /* 水平部分的背景色 */
	z-index: -1;
}

.avatar-img {
	border-radius: 50% 50%;
	height: 150rpx;
	width: 150rpx;
	background: url('../../static/icon/user-icon.png');
	background-color: #efefef;
	background-position: center;
	background-size: cover;
	border: 6rpx solid #ffffff;
	box-sizing: bord;
	position: absolute;
	right: 40rpx;
	top: 15vh;
}
.form {
	margin-top: 120rpx;
	padding: 60rpx;
}
.text {
	border-bottom: 3rpx solid #dfdfdf;
	padding: 30rpx;
	margin-bottom: 50rpx;
}
.btn {
	border-radius: 50rpx;
	height: 80rpx;
	border: 0;
	background-color: #00c6d2;
	line-height: 80rpx;
	color: #fff;
	box-shadow: -8rpx 16rpx 38rpx -20rpx #00c6d2;
	margin-top: 200rpx;
}
.bottom-box {
	margin-top: 100rpx;
	// padding: 50vw;
	display: flex;
	justify-content: center;
	align-items: center;
	navigator {
		color: #00c6d2;
	}
}
</style>
