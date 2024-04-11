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
		pic:"https://tse2-mm.cn.bing.net/th/id/OIP-C.I2wpbglZRTRJM6kIloYcvwHaE7?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		title:"十大院士祝福视频"
	},
	{
		pic:"../../static/images/activities-img3.jpg",
		title:"数字安全官高级研修班"
	},
	{
		pic:"https://tse2-mm.cn.bing.net/th/id/OIP-C.2DNEIJWxiL0Mwn66DSOuKwHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		title:"西湖论剑的十一个维度"
	},
	{
		pic:"https://tse2-mm.cn.bing.net/th/id/OIP-C.1q4cZXP4swvhjZKHzDiFOQHaEL?w=326&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		title:"西湖论剑"
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
