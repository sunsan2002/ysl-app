<template>
	<!-- 视频信息展示界面  -->
	<view class="video-item-show">
		<image :src="props.videoItem.imgUrl" style="width:100%"/>
		<view class="left-top left">{{ props.videoItem.titile }}</view>
		<view class="left-bottom left">
			<view class="address">{{props.videoItem.address}}</view>
			<view class="time">{{props.videoItem.time}}</view>
		</view>
		<view class="right-top right">
			<button size="mini" class="watch">
				<uni-icons type="refreshempty" size="16" color="white"/>
				观看回放
			</button>
		</view>
		<view class="right-bottom right">
			<button size="mini" class="subscribe" plain="true">订阅
			 <uni-icons type="plusempty" size="11" color="white"></uni-icons>
			</button>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		videoItem:{
			type: Object
		}
	})
	// 跳转详情界面
	const handleTurnToVideoDetail = () =>{
		uni.navigateTo({
			url: '/pages/components/video/video-detail',
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
</script>

<style lang="less" scoped>
.video-item-show{
		position: relative;
		color: white;
		margin-bottom: 0.5rem;
		image{
			height: 320rpx;
		}
		.right{
			font-size: 13px;
			font-weight: bolder;
			.watch{
				color: #fff;
				border: none;
				border-radius: 25px;
				background-color: RGB(29,220,227);
			}
			.subscribe{
				color: #fff;
				border: 1px solid white;
				border-radius: 25px;
			}
		}
		.left-top{
			position: absolute;
			top: 15rpx;
			left: 15rpx;
			font-size: 18px;
			font-weight: bolder;
		}
		.left-bottom{
			position: absolute;
			bottom: 15rpx;
			left: 15rpx;
			font-size: 14px;
		}
		.right-top{
			position: absolute;
			top: 15rpx;
			right: 15rpx;
		}
		.right-bottom{
			position: absolute;
			bottom: 35rpx;
			right: 15rpx;
		}
	}
	::v-deep button{
		height: 55rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		padding: 0rem 1rem;
	} 
</style>
