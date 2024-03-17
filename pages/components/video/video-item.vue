<template>
	<view class="video-item">
		<view class="top">
			<text class="title">
				{{ data.topText }}
			</text>
		</view>
		<view class="splicer"></view>
		<view class="middle">
			<image :src="data.videoItem.imgUrl" style="width:100%"/>
			<view class="left-top left">{{ data.videoItem.titile }}</view>
			<view class="left-bottom left">
				<view class="address">{{data.videoItem.address}}</view>
				<view class="time">{{data.videoItem.time}}</view>
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
		<view class="middle">
			<image :src="data.videoItem.imgUrl" style="width:100%"/>
			<view class="left-top left">{{ data.videoItem.titile }}</view>
			<view class="left-bottom left">
				<view class="address">{{data.videoItem.address}}</view>
				<view class="time">{{data.videoItem.time}}</view>
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
	</view>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
	topText:" 5月5日 下午 ",
	videoItem:{
		imgUrl:"https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg",
		titile:"格致论道@西湖论剑",
		time:"18:00 - 21:00",
		address:"杭州市滨江区文化中心剧院一层"
	}
})
</script>

<style scoped lang="less">
.top{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 450rpx;
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
.middle{
	position: relative;
	color: white;
	margin-bottom: 0.5rem;
	image{
		height: 350rpx;
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
		bottom: 15rpx;
		right: 15rpx;
	}
}
::v-deep button{
	font-size: 14px;
	padding: 0rem 1rem;
}
</style>
