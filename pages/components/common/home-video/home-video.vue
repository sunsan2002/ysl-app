<template>
	<view class="home-video">
		<view class="item" v-for="(item,index) in data.list" :key="index">
			<image :src="item.pic"></image>
			<view class="title">{{ item.title }}</view>
		</view>
		
	</view>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
	list:[{
		pic:"/static/images/activities-img1.png",
		title:"十大院士祝福视频"
	},
	{
		pic:"/static/images/activities-img1.png",
		title:"十大院士祝福视频"
	},
	{
		pic:"/static/images/activities-img1.png",
		title:"十大院士祝福视频"
	},
	{
		pic:"/static/images/activities-img1.png",
		title:"十大院士祝福视频"
	}]
})
</script>

<style scoped lang="less">
.home-video{
	display: flex;
	flex-wrap: wrap;
	.item{
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15rpx;
		image{
			width: 95%;
			height: 200rpx;
		}
		.title{
			position: absolute;
			bottom: 10rpx;
			color: white;
			margin-bottom: 5rpx;
			word-break: break-word;
			white-space: pre-line;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
}
.home-video > view{
	width: 50%;
}
</style>
