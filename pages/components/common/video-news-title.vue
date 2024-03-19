<template>
	<!-- 视频展示标题界面 -->
	<view class="video-news-title">
		<view class="top">
			<text class="title">
				{{ props.title }}
			</text>
		</view>
		<view class="splicer"></view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
const props = defineProps({
	title:{
		tyepe:String
	}
})
</script>

<style scoped lang="less">
.video-news-title{
	.top{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 400rpx;
		height: 70rpx;
		background: linear-gradient(-45deg, transparent 12px, #5bdcfa 0)
				right,
			linear-gradient(135deg, transparent 12px, #5bdcfa 0) left;
		background-size: 50% 100%;
		background-repeat: no-repeat;
		filter: drop-shadow(0 5px 12px rgba(149, 224, 242, 0.45));
		.title{
			color: white;
			font-weight: bold;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: calc(100% - 4px);
			height: calc(100% - 4px);
			background: linear-gradient(-45deg, transparent 12px, #011032 0)
					right,
				linear-gradient(135deg, transparent 12px, #011032 0) left;
			background-repeat: no-repeat;
			box-shadow: inset 0 0 14px 3px rgba(146, 244, 243, 0.55);
			clip-path: polygon(
				0 17px,
				17px 0,
				100% 0,
				100% calc(100% - 17px),
				calc(100% - 17px) 100%,
				0 100%
			);
		}
	}
	.splicer{
		border-bottom: 1px solid RGB(161,159,175);
		margin-bottom: 0.45rem;
	}
}
</style>
