<template>
	<view class="video-detial">
		<view class="top">
			<view class="left">
				<view class="title">{{data.titile}}</view>
			</view>
			<view class="right">
				<view class="right-top">
					<button size="mini" class="subscribe" plain="true">订阅
						<uni-icons type="plusempty" size="11" color="RGB(36,121,176)"></uni-icons>
					</button>
				</view>
				<view class="right-bottom">
					<uni-icons type="eye" size="20" color="RGB(189,225,251)"></uni-icons>
					<view class="watchNum">{{data.watchNum}}</view>
				</view>
			</view>
		</view>
		<view class="middle">
			<video-test/>
		</view>
		<view class="bottom"></view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
import videoTest from '/pages/components/video/video-test'
const data = reactive({
	titile:"格致论道@西湖论剑",
	watchNum:1000
})
</script>

<style scoped lang="less">
.video-detial{
	.top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15rpx 30rpx;
		background-image: url('/static/title-background.jfif');
		background-size: 100% 100%;
		height: 120rpx;
		.left{
			.title{
				font-size: 40rpx;
				font-weight: bolder;
				color: white;
				max-width: 450rpx;
				overflow:hidden; //超出的文本隐藏
				text-overflow:ellipsis; //溢出用省略号显示
				white-space:nowrap; //溢出不换行
			}
		}
		.right{
			display: flex;
			flex-direction: column;
			align-items: center;
			.right-top{
				margin-bottom: 10rpx;
				.subscribe{
					color: RGB(36,121,176);
					font-weight: bolder;
					border-radius: 25px;
					border: 2px solid white;
					background-color: white;
				}
			}
			.right-bottom{
				min-width: 140rpx;
				display: flex;
				justify-content: space-around;
				color: RGB(189,225,251);
			}
		}
	}
}
::v-deep button{
	height: 50rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	padding: 0rem 1rem;
} 
</style>
