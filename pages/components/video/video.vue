<template>
	<view class="video-item">
		<view class="middle">
			<image :src="data.imgUrl" style="width: 100%" />
			<view class="left-top left">{{ data.titile }}</view>
			<view class="left-bottom left">
				<view class="address">{{ data.address }}</view>
				<view class="time">{{ data.time }}</view>
			</view>
			<view class="right-top right">
				<button size="mini" class="watch">
					<uni-icons type="refreshempty" size="16" color="white" />
					观看回放
				</button>
			</view>
			<view class="right-bottom right">
				<button v-show="!data.isSubscription" size="mini" class="subscribe" plain="true" @click="data.isSubscription = !data.isSubscription">
					订阅
					<uni-icons type="plusempty" size="11" color="white"></uni-icons>
				</button>
				<button v-show="data.isSubscription" size="mini" class="subscribe" plain="true" @click="data.isSubscription = !data.isSubscription">已订阅</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
	data: {
		type: Object,
		default: ()=>({
				imgUrl: 'https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg',
				titile: '格致论道@西湖论剑',
				time: '18:00 - 21:00',
				address: '杭州市滨江区文化中心剧院一层',
				isSubscription:true
		})
	}
})


</script>

<style scoped>
.middle {
	position: relative;
	color: white;
	margin-bottom: 0.5rem;
}
image {
	height: 350rpx;
}
.right {
	font-size: 13px;
	font-weight: bolder;
}
.subscribe {
	color: #fff;
	border: 1px solid white;
	border-radius: 25px;
}
.left-top {
	position: absolute;
	top: 15rpx;
	left: 15rpx;
	font-size: 18px;
	font-weight: bolder;
}
.left-bottom {
	position: absolute;
	bottom: 15rpx;
	left: 15rpx;
	font-size: 14px;
}
.right-top {
	position: absolute;
	top: 15rpx;
	right: 15rpx;
}
.right-bottom {
	position: absolute;
	bottom: 15rpx;
	right: 15rpx;
}
.watch {
	color: #fff;
	border: none;
	border-radius: 25px;
	background-color: RGB(29, 220, 227);
}
::v-deep button {
	font-size: 14px;
	padding: 0rem 1rem;
}
.video-item {
	padding: 0.5em 0.5em;
}
</style>
