<!-- 个人中心页面 -->
<template>
	<view>
		<tabbar :current="4"></tabbar>
		<view class="myself-content">
			<image src="../../static/images/myself-top.png" mode="aspectFill"></image>
			<button v-show="!isSign" class="sign-btn" @click="messageToggle()">
				<uni-icons color="#fff" type="calendar" size="20"></uni-icons>
				立即签到
			</button>
			<button v-show="isSign" class="nosign-btn">
				<uni-icons color="#fff" type="calendar" size="20"></uni-icons>
				已签到
			</button>
			<view class="avatar">
				<view class="avatar-img"></view>
				<view class="avatar-text">
					<p>sunsan</p>
					<view class="score">
						<img src="/static/icon/score-icon.png" />
						<p>400 </p>
						<uni-icons type="right" size="10" color="#fff"></uni-icons>
					</view>
					
				</view>
			</view>
			<view class="bottom-box">
				<view class="btn-box">
					<view class="btn-content">
						<button class="btn1" style="background-color: #50A9FF;"><uni-icons type="staff-filled" color="#fff" size="35"></uni-icons></button>
						<span class="btn-text">个人资料</span>
					</view>
					<view class="btn-content">
						<button class="btn1" style="background-color: #19e187;"><uni-icons type="cloud-download-filled" color="#fff"  size="35"></uni-icons></button>
						<span class="btn-text">海报下载</span>
					</view>
					<view class="btn-content">
						<button class="btn1" style="background-color: #FF9247;" @click="isShare()"><uni-icons  color="#fff" type="redo-filled" size="35"></uni-icons></button>
						<span class="btn-text">邀请好友</span>
					</view>
					<view class="btn-content">
						<button class="btn1" style="background-color: #ffdc11;" @click="goTo('/pages/index/my-subscription')"><uni-icons type="notification-filled" color="#fff"  size="35"></uni-icons></button>
						<span class="btn-text">我的订阅</span>
					</view>
				</view>
				<p class="my-integral-text">我的积分</p>
				<view class="my-integral">
					<view class="my-integral-font my-integral-left" @click="goTo('/pages/index/score-store')"><span>积分商城</span></view>
					<view class="my-integral-right">
						<view class="my-integral-font my-integral-rules" @click="goTo('/pages/index/score-rules')"><span>积分规则</span></view>
						<view class="my-integral-font my-integral-detail"><span>积分明细</span></view>
					</view>
				</view>
				<button class="logout">退出登录</button>
			</view>
			<uni-popup ref="popup" type="message">
				<uni-popup-message type="success" message="签到成功!" :duration="2000"></uni-popup-message>
			</uni-popup>
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share></uni-popup-share>
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
import tabbar from '/components/tabbar.vue';
import { ref, defineEmits } from 'vue';

const popup = ref(null);

const isSign = ref(false);
const share = ref(null);
const messageToggle = () => {
	popup.value.open();
	isSign.value = true;
};

const isShare = () => {
	share.value.open();
};
/* 跳转页面 */
const goTo = (url) => {
	uni.navigateTo({
	  url:url
	});
}
</script>

<style lang="scss" scoped>
	
.avatar{
	display: flex;
	flex-direction: row;
	position: fixed;
	top: 150rpx;
	gap:40rpx;
	left: 40rpx;
	align-items: center;
}
.avatar-img{
	border-radius: 50% 50%;
	height: 110rpx;
	width: 110rpx;
	background: url("../../static/icon/user-icon.png");
	background-color: #efefef;
	background-position: center;
	background-size: cover;
	border: 6rpx solid #ffffff;
	box-sizing: bord;
}
.avatar-text{
	line-height: 50rpx;
}
.avatar-text>p{
	color: #ffffff;
	font-weight: bold;
	text-shadow: 4rpx 4rpx 0px rgba(0,0,0,0.1)
}
.my-integral {
	display: flex;
	flex-direction: row;
	gap: 30rpx;
	height: 300rpx;
}
.my-integral-font>span{
	font-size: 35rpx;
	
	margin-left: 60rpx;
	font-family: "华文琥珀";
}
.score{
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12rpx;
}
.score>img{
	height: 40rpx;
}
.score>p{
	color: #fff;
	text-shadow: 4rpx 4rpx 0px rgba(0,0,0,0.1);
	font-weight: bold;
}
.my-integral-font{
	padding: 40rpx 0;
}
.logout{
	width: 100%;
	margin-top: 10%;
	height: 80rpx;
	border-radius: 50rpx 50rpx;
	background-color: #fff;
	line-height: 80rpx;
	font-size: 30rpx;
	color: #00c6d2;
	border: none;
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.2);
	font-weight: bold;
}
.my-integral-right>view{
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.1);
	background-color: #fff;
	flex: 1;
	border-radius: 30rpx 30rpx;
}
.my-integral-right {
	display: flex;
	flex-direction: column;
	gap: 30rpx;
	flex:1;
}
.my-integral-rules{
	background-image: url('/static/images/积分2.png');
	box-sizing: border-box;
		background-size: cover;
		background-position: center;
}
.my-integral-detail{
	background-image: url('/static/images/积分3.png');
	box-sizing: border-box;
		background-size: cover;
		background-position: center;
}
.my-integral-left{
	// background-color: #fff;
	background-image: url('/static/images/积分1.png');
	box-sizing: border-box;
		background-size: cover;
		background-position: center;
	width: 55%;
	height: 100%;
	box-sizing: border-box;
	border-radius: 50rpx 50rpx;
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.2);
}
.myself-content {
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	image {
		width: 100%;
		height: 24vh;
	}
}
.my-integral-text {
	background: linear-gradient(to right, #089bd0, #30cfd0);
	-webkit-background-clip: text;
	color: transparent;
	text-align: center;
	// font-size: 4em;
	font-weight: bold;
	margin: 20px;
	animation: rainbow 3s linear infinite;
	position: relative;
	// text-shadow: 2px 2px 4px #000000;
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
	z-index: 1;
}
.btn1 {
	height: 110rpx;
	width: 110rpx;
	border-radius: 40rpx 40rpx;
	line-height: 110rpx;
	display: flex;
	background-color: #00c6d2;
	align-items: center;
	justify-content: center;
	box-shadow: 8rpx 16rpx 25rpx -20rpx rgba(0, 0, 0, 0.4);
}

.btn-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10rpx;
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
.nosign-btn {
	background-color: rgba(246, 176, 13, 0.7);
	border: 3rpx solid #ffb70f;
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

.my-integral-text::after {
	// right: 0;
	right: 50rpx;
	bottom: 100rpx;
	width: 300rpx;
	height: 3rpx;
	background-color: #00c6d2;
	content: '';
	position: absolute;
	bottom: -5rpx; /* 控制横线位置 */
	left: 50%; /* 横线水平居中 */
	width: 120rpx; /* 横线宽度 */
	border-radius: 80%;
	height: 4rpx; /* 横线高度 */
	background: linear-gradient(to right, #089bd0, #30cfd0); /* 横线颜色 */
	transform: translateX(-50%); /* 水平居中 */
	// transform: translateY(-50%);/
}
</style>
