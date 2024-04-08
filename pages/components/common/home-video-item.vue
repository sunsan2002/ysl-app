<template>
	<view class="home-video-item">
		<view class="item" v-for="(item,index) in data.list" :key="index">
			<view class="top">
				<image :src="item.pic"></image>
			</view>
			<view class="bottom">
				<view class="title">{{item.title}}</view>
				<view class="time">{{ item.time }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
	list: [
    {
     pic:"/static/images/activities-img1.png",
     title:"你好，我是西湖论剑，这是我的最新简历!",
     time:"2024-03-19"
    },
	{
	 pic:"https://tse1-mm.cn.bing.net/th/id/OIP-C.WRrUxt1eqNtzpAKRPGvsEwHaEK?w=281&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
	 title:" 致力于推动全球互联网发展的相关企业。",
	 time:"2024-04-06"
	},
  ],
});
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
