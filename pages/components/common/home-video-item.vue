<template>
	<view class="home-video-item">
		<view class="item">
			<view class="top">
				<image :src="data.pic"></image>
			</view>
			<view class="bottom">
				<view class="title">{{data.title}}</view>
				<view class="time">{{ data.time }}</view>
			</view>
		</view>
		<view class="item">
			<view class="top">
				<image :src="data.pic"></image>
			</view>
			<view class="bottom">
				<view class="title">{{data.title}}</view>
				<view class="time">{{ data.time }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
	pic:"/static/images/activities-img1.png",
	title:"你好，我是西湖论剑，这是我的最新简历!",
	time:"2024-03-19"
})
</script>
<style scoped lang="less">
.home-video-item{
	display: flex;
	.item{
		padding: 0 15rpx;
		display: flex;
		flex-direction: column;
		.top{
			image{
				width: 100%;
				object-fit: cover;
				height: 180rpx;
			}
		}
		.bottom{
			width: 100%;
			.title{
				margin-bottom: 5rpx;
				word-break: break-word;
				white-space: pre-line;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.time{
				font-size: 13px;
				color: RGB(200,200,200);
			}
		}
	}
}
.home-video-item > view{
	width: 50%;
}
</style>
