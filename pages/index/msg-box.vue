<template>
	<view class="container">
		<view v-for="(notification, index) in notifications" @click="goTo()" :key="index" class="notification">
			<view class="title">
				<image src="../../static/icon/通知.png"></image>
			{{ notification.title }}</view>
			<view class="content">{{ notification.content }}</view>
			<view class="content">{{ notification.time }}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const notifications = ref([
	{ title: '会议即将开始', content: '24小时内将举行AI引领 智启新程大会，请准时参加。',time:'2024-04-11 12:00' },
	{ title: '收到邀请函', content: '您收到了一个关于AI引领 智启新程的邀请函，请注意查收。',time:'2024-04-09 09:21' },
	{ title: '订阅内容更新', content: '您订阅的西湖论剑安全特训营·数据要素X高级研修班有更新，快来查看最新内容吧。' ,time:'2024-03-15 14:23'},
	{ title: '订阅内容更新', content: '您订阅的2024  构建安全可信的数字世界有更新，快来查看最新内容吧。',time:'2024-03-11 18:34' }
]);

const goTo = () => {
	uni.navigateTo({
		url: '/pages/index/invite-page',
		success: res => {},
		fail: () => {},
		complete: () => {}
	});
}
</script>

<style lang="scss" scoped>
.container {
	padding: 20rpx;
}

.notification {
	margin-bottom: 20rpx;
	padding: 30rpx;
	background-color: #f5f5f5;
	border-radius: 10rpx;
}

.title {
	font-size: 25rpx;
	font-weight: bold;
	margin-bottom: 10rpx;
	display:flex;
	flex-direction:row;
	align-items:center;
	image{
		height: 40rpx;
		width: 40rpx;
	}
}

.content {
	font-size: 25rpx;
	color: #666;
	margin-top: 10rpx;
}
</style>
