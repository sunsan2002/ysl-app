<!-- 个人中心页面 -->
<template>
	<view>
		<tabbar :current="4"></tabbar>
		<view class="myself-content">
			<view class="avatar-bg"></view>
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
						<image src="../../static/icon/score-icon.png" style="height: 40rpx; width: 40rpx"></image>
						<p>400</p>
						<uni-icons type="right" size="10" color="#fff"></uni-icons>
					</view>
				</view>
			</view>
			<view class="bottom-box">
				<view class="btn-box">
					<view class="btn-content">
						<button class="btn1" style="background-color: #50a9ff"><uni-icons type="staff-filled" color="#fff" size="35"></uni-icons></button>
						<span class="btn-text">个人资料</span>
					</view>
					<view class="btn-content">
						<button class="btn1" style="background-color: #19e187"><uni-icons type="cloud-download-filled" color="#fff" size="35"></uni-icons></button>
						<span class="btn-text">海报下载</span>
					</view>
					<view @click="shareFun" class="btn-content">
						<button class="btn1" style="background-color: #ff9247" @click="isShare()"><uni-icons color="#fff" type="redo-filled" size="35"></uni-icons></button>
						<span class="btn-text">邀请好友</span>
					</view>
					<view class="btn-content">
						<button class="btn1" style="background-color: #ffdc11" @click="goTo('/pages/index/my-subscription')">
							<uni-icons type="notification-filled" color="#fff" size="35"></uni-icons>
						</button>
						<span class="btn-text">我的订阅</span>
					</view>
				</view>
				<p class="my-integral-text">我的积分</p>
				<view class="my-integral">
					<view class="my-integral-font my-integral-left" @click="goTo('/pages/index/score-store')"><span>积分商城</span></view>
					<view class="my-integral-right">
						<view class="my-integral-font my-integral-rules" @click="goTo('/pages/index/score-rules')"><span>积分规则</span></view>
						<view class="my-integral-font my-integral-detail" @click="goTo('/pages/index/score-detail')"><span>积分明细</span></view>
					</view>
				</view>
			</view>
			<view class="list">
				<h4>更多</h4>
				<view class="list-item">
					<view>抽奖记录</view>
					<uni-icons type="right" size="20"></uni-icons>
				</view>
				<view class="list-item" @click="goTo('/pages/index/msg-box')">
					<view>消息通知</view>
					<uni-icons type="right" size="20"></uni-icons>
				</view>
				<view class="list-item">
					<view>关于我们</view>
					<uni-icons type="right" size="20"></uni-icons>
				</view>
			</view>
			<button class="logout" @click="goTo('/pages/index/register')">退出登录</button>
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
const shareFun = () => {
	// #ifdef APP-PLUS
	uni.share({
	    provider: "weixin",
	    scene: "WXSceneSession",
	    type: 0,
	    href: "http://uniapp.dcloud.io/",
	    title: "西湖论剑",
	    summary: "我正在参与西湖论剑网络安全大会，快来跟我一起来体验！",
	    imageUrl: "https://prod-tx-mdn-1305533294.file.myqcloud.com/static/1775046527844352.jpg",
	    success: function (res) {
	        uni.showToast({
	        	title: '分享成功！',
	        	icon: 'success', // 弹出框图标，可选值："success"、"loading"、"none"，默认为"success"
	        	duration: 1500, // 弹出框持续时间，单位为毫秒，默认为1500ms
	        });
	    },
	    fail: function (err) {
	        console.log("fail:" + JSON.stringify(err));
	    }
	});
	// #endif
	
	// #ifdef MP-WEIXIN
	uni.share({
	    provider: 'weixin',
	    scene: "WXSceneSession",
	    type: 5,
	    imageUrl: 'https://prod-tx-mdn-1305533294.file.myqcloud.com/static/1775046527844352.jpg',
	    title: '西湖论剑网络安全大会',
	    miniProgram: {
	        id: 'gh_abcdefg',
	        path: 'pages/index/home',
	        type: 0,
	        webUrl: 'http://uniapp.dcloud.io'
	    },
	    success: ret => {
	        uni.showToast({
	        	title: '分享成功！',
	        	icon: 'success', // 弹出框图标，可选值："success"、"loading"、"none"，默认为"success"
	        	duration: 1500, // 弹出框持续时间，单位为毫秒，默认为1500ms
	        });
	    }
	});
	// #endif
	
	
}
const isShare = () => {
	share.value.open();
};
/* 跳转页面 */
const goTo = (url) => {
	uni.navigateTo({
		url: url
	});
};
</script>

<style lang="scss" scoped>
.myself-content {
	min-height: 120vh;
}
.avatar-bg{
	background-image: linear-gradient(120deg, #86d4fe 0%, #3a75ff 100%);
	height: 18vh;
	width: 100vw;
	padding: 20rpx;
}
.avatar {
	display: flex;
	flex-direction: row;
	position: absolute;
	top: 80rpx;
	gap: 40rpx;
	left: 40rpx;
	align-items: center;
}
.avatar-img {
	border-radius: 50% 50%;
	height: 110rpx;
	width: 110rpx;
	background: url('http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg');
	background-color: #efefef;
	background-position: center;
	background-size: cover;
	border: 6rpx solid #ffffff;
	box-sizing: bord;
}
.avatar-text {
	line-height: 50rpx;
}
.avatar-text > p {
	color: #ffffff;
	font-weight: bold;
	text-shadow: 4rpx 4rpx 0px rgba(0, 0, 0, 0.1);
}
.my-integral {
	display: flex;
	flex-direction: row;
	gap: 30rpx;
	height: 300rpx;
}
.my-integral-font > span {
	font-size: 35rpx;
	font-weight: bold;
	margin-left: 60rpx;
	font-family: '华文琥珀';
}
.score {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12rpx;
}
.score > img {
	height: 40rpx;
}
.list-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 30rpx;
	justify-content: space-between;
	border-bottom: 2rpx solid #eeeeee;
}
.score > p {
	color: #fff;
	text-shadow: 4rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	font-weight: bold;
}
.my-integral-font {
	padding: 40rpx 0;
}
.list {
	margin: 30rpx;
	margin-top: 55rpx;
	box-sizing: border-box;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	box-shadow: 0px -3px 39px 13px rgba(0, 0, 0, 0.1);
	width: 90%;
	padding: 30rpx;
	border-radius: 20rpx;
}
.logout {
	width: 85%;
	margin: 30rpx;
	height: 80rpx;
	margin-bottom: 50rpx;
	border-radius: 50rpx 50rpx;
	background-color: #fff;
	line-height: 80rpx;
	font-size: 30rpx;
	color: #00c6d2;
	border: none;
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.2);
	font-weight: bold;
}
.my-integral-right > view {
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.1);
	background-color: #fff;
	flex: 1;
	border-radius: 30rpx 30rpx;
}
.my-integral-right {
	display: flex;
	flex-direction: column;
	gap: 30rpx;
	flex: 1;
}
.my-integral-rules {
	background-image: url('/static/images/积分2.png');
	box-sizing: border-box;
	background-size: cover;
	background-position: center;
}
.my-integral-detail {
	background-image: url('/static/images/积分3.png');
	box-sizing: border-box;
	background-size: cover;
	background-position: center;
}
.my-integral-left {
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
	box-shadow: 0px 3px 46px -3px rgba(0, 0, 0, 0.1);
}
.bottom-box {
	// padding: 0.5rem;
	margin-top: 20rpx;
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
