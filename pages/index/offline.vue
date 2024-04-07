<template>
	<view class="content">
		<view class="top">
			<p class="title">2023年国际互联网大会</p>
			<p>时间：2023.06.21-2023.07.01</p>
			<p>地点：杭州市滨江区文化中心剧院一楼</p>
			<view class="left">
				<view class="text">进行中</view>
				<uni-icons type="right" color="#fff" size="20"></uni-icons>
			</view>
		</view>
		<view class="btn-list">
			<view v-for="(item, index) in state.btnList" :key="item.id" class="btn" :class="{'in-progress':item.now===true}">
				<image :src="item.img"></image>
				<p>{{ item.title }}</p>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
	btnList: [
		{
			id: 1,
			title: '现场签到',
			img: '/static/icon/现场签到.png',
			now: true
		},
		{
			id: 2,
			title: '拍照打卡',
			img: '/static/icon/拍照.png',
			now: true
		},
		{
			id: 3,
			title: '留言上墙',
			img: '/static/icon/留言.png',
			now: true
		},
		{
			id: 4,
			title: '抽奖环节',
			img: '/static/icon/抽奖-线.png',
			now: false
		},
		{
			id: 5,
			title: '投票评估',
			img: '/static/icon/投票.png',
			now: false
		},
		{
			id: 6,
			title: '问卷调查',
			img: '/static/icon/问卷调查.png',
			now: false
		}
	]
});
</script>

<style lang="scss">
.content {
	min-height: 100vh;
	width: 100vw;
	background-color: #f9f9f9;
}
.top {
	background-color: #31c1d4;
	height: 8rem;
	padding: 30rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	font-size: 30rpx;
	gap: 12rpx;
	position: relative;
	.title {
		font-weight: bold;
		font-size: 35rpx;
		margin-top: 30rpx;
	}
	.left {
		position: absolute;
		right: 20rpx;
		bottom: 110rpx;
		display: flex;
		flex-direction: row;
		.text {
			background-color: rgba(255, 255, 255, 0.5);
			padding: 0 10rpx;
			border-radius: 10rpx;
		}
	}
}
.in-progress::before {
	content: '进行中';
	font-size: 22rpx;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #31C1D4;
	color: #fff;
	padding: 5rpx;
	border-radius: 0 0 10rpx 0;
}
.btn-list {
	margin: 20rpx;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 25rpx; /* 设置格子之间的间距 */
	border-radius: 30rpx;
	.btn {
		background-color: #fff;
		display: flex;
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
		flex-direction: column;
		padding: 60rpx;
		align-items: center;
		position: relative;
		gap: 20rpx;
		font-weight: bold;
		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
}
</style>
