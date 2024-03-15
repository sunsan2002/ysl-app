<template>
	<view class="agenda">
		<view class="top">
			<image src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jPdMP.img?w=768&h=494&m=6"/>
			<view class="show-search">
				<view class="title">{{data.title}}</view>
				<view class="search">
					<!-- <input placeholder="请输入会议名称进行搜索" /> -->
					 <u--input
					    placeholder="请输入内容"
					    border="bottom"
					    clearable
					  ></u--input>
					<uni-input value="data.agendaName" placeholder="请输入内容">
						<uni-button slot="right" size="mini">
						   <uni-icons name="search"></uni-icons>
						</uni-button>
					</uni-input>
				</view>
			</view>
		</view>
		<video-item class="video-item"/>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
import videoItem from '/pages/components/video/video-item'
const data = reactive({
	title:"大会议程",
	agendaName:""
})
</script>

<style lang="less" scoped>
.agenda{
	.top{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		image{
			width: 100%;
			opacity:0.8;
			height: 300rpx;
		}
		.show-search{
			position: absolute;
			.title{
				display: flex;
				justify-content: center;
				color: white;
				font-size: 30px;
				font-weight: bold;
			}	
			.search{
				// padding: 2px 25px;
				// background: white;
				// border-radius: 25px;
				// font-size: 12px;
			}
		}
	}
	.video-item{
		padding: 0 20rpx;
		display: block;
	}
}
</style>
