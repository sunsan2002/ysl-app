/** * 图文列表组件 */
<template>
	<view class="article-item">
		<view class="middle">
			<image :src="articleItem.imgUrl" style="width: 100%"></image>
			<view class="left-top">{{ articleItem.title }}</view>
			<view class="left-bottom">{{ articleItem.time }}</view>
			<view class="right-bottom">
				<button size="mini" class="watch" style="background-color: RGB(29, 220, 227);" @click="goTo()">了解详情</button>
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	articleItem: {
		type: Object,
		default: () => ({
			imgUrl: '../../static/images/activities-img2.jpg',
			title: '西湖论剑安全特训营·网络攻防蓝队实战技法进阶班',
			time: '2023-05-04 09:00 - 18:00'
		})
	}
});

const goTo = () => {
	uni.navigateTo({
		url: '/pages/index/article-msg',
	});
}
</script>

<style lang="scss" scoped>
.middle {
	position: relative;
	color: white;
	margin-bottom: 0.5rem;
	image {
		height: 350rpx;
	}
}
.watch {
	color: #fff;
	border: none;
	border-radius: 25px;
	background-color: RGB(29, 220, 227);
}
.left-top {
	position: absolute;
	top: 20rpx;
	left: 25rpx;
	max-width: 500rpx;
	font-size: 30rpx;
	font-weight: bolder;
}
.left-bottom {
	position: absolute;
	bottom: 30rpx;
	left: 25rpx;
	font-size: 14px;
}
.right-bottom {
	position: absolute;
	bottom: 23rpx;
	right: 20rpx;
}
.video-item {
	padding: 0.5em 0.5em;
}
.article-item {
	padding: 0.5em 0.5em;
}
</style>
