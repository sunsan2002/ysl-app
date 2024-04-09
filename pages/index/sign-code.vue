<!-- 二维码签到页面 -->
<template>
	<view class="content">
		<view class="top">
			<image src="http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg" />
			<view class="text">
				<p class="name">sunsan</p>
				<p>AI引领 智启新程</p>
			</view>
		</view>
		<view class="sign-in">
			<view class="btn" @click="scan()">
				<uni-icons type="scan" size="30" color="#fff"></uni-icons>
				<p class="h1">点击扫描二维码</p>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
function scan() {
	uni.scanCode({
		onlyFromCamera: true,
		success: function (res) {
			uni.showToast({
				title: '签到成功',
				icon: 'success', // 弹出框图标，可选值："success"、"loading"、"none"，默认为"success"
				duration: 2000, // 弹出框持续时间，单位为毫秒，默认为1500ms
			});
			uni.navigateTo({
				url: '/pages/index/offline',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
			console.log('条码类型：' + res.scanType);
			console.log('条码内容：' + res.result);
		}
	});
}
</script>

<style lang="scss" scoped>
.active {
	background-color: #15ba11;
	border-radius: 50%;
	border: 0;
	padding: 0rpx;
	border-radius: 50%;
	border: 2rpx solid #a8a8a8;
	height: 23rpx;
	width: 23rpx;
	line-height: 27rpx;
}
.content {
	background-color: #f3f4f6;
	min-height: 100vh;
	padding: 30rpx;
}
.top {
	background-color: #fff;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	padding: 30rpx;
	display: flex;
	flex-direction: row;
	border-radius: 30rpx;
	gap: 30rpx;
	color: #999999;
	font-size: 25rpx;
	image {
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
	}
	.name {
		color: black;
		font-size: 40rpx;
		margin-bottom: 10rpx;
	}
}
.sign-in {
	margin-top: 30rpx;
	background-color: #fff;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	border-radius: 30rpx;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 50rpx;
}
.btn {
	background-image: linear-gradient(120deg, #7db5fe 0%, #4681ff 100%);
	box-shadow: 0px 10px 15px -3px #94e6fe;
	height: 100rpx;
	width: 350rpx;
	padding: 10rpx 50rpx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #fff;
	border-radius: 100rpx;
	gap: 10rpx;
	font-size: 27rpx;
	font-weight: 200;
	color: #ececec;
	.h1 {
		font-weight: bold;
		font-size: 38rpx;
		color: #fff;
	}
}
.select {
	display: flex;
	flex-direction: row;
	margin-top: 30rpx;
	gap: 5rpx;
	color: #5a5a5a;
	font-size: 22rpx;
}

.popup-container {
	position: fixed;
	top: 10rpx;
	left: 20rpx;
	padding: 20rpx;
	box-sizing: broder-box;
	right: 20rpx;
	border-radius: 20rpx;
	color: #649eff;
	height: 45px; /* 调整弹出框高度 */
	background-color: #fff;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	// border-bottom: 1px solid #ccc;
	transition: transform 0.3s ease-in-out;
	transform: translateY(0%);
	z-index: 999;
}

.popup-content {
	padding: 10px;
}

button {
	margin-top: 20px;
}
</style>
