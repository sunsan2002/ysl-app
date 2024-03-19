<template>
	<view>
		<tabbar :current="4"></tabbar>
		<view class="myself-content">
			<image src="../../static/images/myself-top.png" mode="aspectFill"></image>
			<button class="sign-btn" @click="messageToggle()">
				<uni-icons color="#fff" type="calendar" size="20"></uni-icons>
				立即签到
			</button>
			<view  v-show="popupShow">
				<!-- 提示信息弹窗 -->
				<uni-popup>
					<uni-popup-message type="success" message="签到成功!" :duration="2000"></uni-popup-message>
				</uni-popup>
			</view>
			<view class="bottom-box">
				<view class="btn-box">
					<view class="btn-content">
						<button class="btn1"><uni-icons type="staff-filled" size="35"></uni-icons></button>
						<span class="btn-text">个人资料</span>
					</view>
					<view class="btn-content">
						<button class="btn1"><uni-icons type="cloud-download-filled" size="35"></uni-icons></button>
						<span class="btn-text">海报下载</span>
					</view>
					<view class="btn-content">
						<button class="btn1"><uni-icons type="redo-filled" size="35"></uni-icons></button>
						<span class="btn-text">邀请好友</span>
					</view>
					<view class="btn-content">
						<button class="btn1"><uni-icons type="notification-filled" size="35"></uni-icons></button>
						<span class="btn-text">我的订阅</span>
					</view>
				</view>
				<view class="my-subscription"></view>
			</view>
		</view>
	</view>
</template>

<script setup>
import tabbar from '/components/tabbar.vue';
import { ref, defineEmits } from 'vue'

const popupShow = ref(false)

const messageToggle = () => {
	console.log(11)
	popupShow.value = true
	console.log(popupShow.value)
};
</script>

<style lang="scss" scoped>
.myself-content {
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	image {
		width: 100%;
		height: 26vh;
	}
}
.btn-box {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 1rem 1.5rem;
	align-items: center;
	background-color: #fff;
	gap: 40rpx;
	height: 5.5rem;
	border-radius: 30rpx 30rpx;
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.1);
	// margin-top: -100rpx;
}
.bottom-box {
	// padding: 0.5rem;
	margin-top: -100rpx;
	z-index: 999;
}
.btn1 {
	height: 110rpx;
	width: 110rpx;
	border-radius: 30rpx 30rpx;
	line-height: 110rpx;
	display: flex;
	background-color: #00c6d2;
	align-items: center;
	justify-content: center;
	box-shadow: 8rpx 16rpx 25rpx -20rpx rgba(0, 0, 0, 0.4);
	uni-icon {
	}
}
.btn-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.btn-text {
	font-size: 18rpx;
}
.sign-btn {
	background-color: #ffb70f;
	position: fixed;
	top: 7%;
	right: 20rpx;
	color: #fff;
	height: 65rpx;
	line-height: 70rpx;
	font-size: 25rpx;
	display: flex;
	flex-direction: row;
	gap: 6rpx;
	border-radius: 60rpx 60rpx;
}
</style>
