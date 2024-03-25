<template>
	<view class="company-title">
		<view class="top">
			<view class="left" style="width: 200rpx;">
				<image :src="props.companyNews.logo"/>
			</view>
			<view class="right">
				<view class="title">
					{{ props.companyNews.title }}
				</view>
				<view class="company-news">
					{{ props.companyNews.introduce }}
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="detial">
				{{ props.companyNews.introduce }}
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	companyNews: Object
})
</script>

<style scoped lang="less">
.company-title{
	display: flex;
	align-items: center;
	flex-direction: column;
	.top{
		display: flex;
		height: 140rpx;
		width: 95%;
		border: E5E5E5;
		box-shadow: 3px 10px 15px 3px rgba(0, 0, 0, 0.1);
		margin-bottom: 20rpx;
		.left{
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			height: 140rpx;
			width: 160rpx;
			background-color: RGB(25,151,192);
			image{
				width: 120rpx;
				height: 60rpx;
			}
		}
		.left::after{
		 content: ' ';
		  position: absolute;
		  top: 0;
		  right: -20rpx;
		  border-width: 140rpx 20rpx;
		  border-style: solid;
		  border-color: RGB(25,151,192) transparent transparent transparent;
		}
		.right{
			position: absolute;
			margin-left: 230rpx;
			width: 450rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.title{
				font-weight: bold;
				margin-bottom: 10rpx;
			}
			.company-news{
				font-size: 13px;
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
	.bottom{
		color: RGB(96,181,184);
		width: 90%;
	}
}
</style>
