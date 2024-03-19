<template>
	<!-- 会议议程 -->
	<view class="agenda">
		<view class="title"></view>
		<video-news-title :title="data.title"></video-news-title>
	</view>
</template>

<script setup>
	import { reactive } from 'vue';
import videoNewsTitle from '/pages/components/common/video-news-title.vue'
	const data = reactive({
		title:"会议议程"
	})
</script>

<style scoped lang="less">
.agenda{
	margin: 20rpx;
	padding: 10rpx;
	display: block;
	background-color: RGB(233,233,233);
	border-radius: 4px;
}
</style>
