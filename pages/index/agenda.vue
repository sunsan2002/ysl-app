<template>
	<view class="agenda">
		<view class="top">
			<image mode="aspectFill"/>
			<view class="show-search">
				<view class="title">{{data.title}}</view>
				<view class="search">
					<view class="top-search">
						<uni-easyinput class="top-search" v-model="data.agendaName" suffixIcon="search"  placeholder="请输入会议名称进行搜索" @iconClick="handleSearchForAgendaName"></uni-easyinput>
					</view>
					<view class="buttom-search">
						<view class="left">
							 <uni-data-select
								placeholder="全部会议"
								v-model="data.agendaValue"
								:localdata="data.agendaRange"
								@change="change"
							    ></uni-data-select>
						</view>
						<view class="right">
							<uni-data-select
								placeholder="全部类型"
								v-model="data.typeValue"
								:localdata="data.typeRange"
								@change="change"
							   ></uni-data-select>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="middle">
			<video-item class="video-item"/>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
import videoItem from '/pages/components/video/video-item'
const data = reactive({
	title:"大会议程",
	agendaName:"",
	agendaValue:null,
	agendaRange: [
		{ value: 0, text: "篮球" },
		{ value: 1, text: "足球" },
		{ value: 2, text: "游泳" },
	],
	typeValue:null,
	typeRange:[
		{ value: 0, text: "篮球" },
		{ value: 1, text: "足球" },
		{ value: 2, text: "游泳" },
	]
})
// 手动搜索会议名称
const handleSearchForAgendaName = ()=>{
	console.log("搜索会议名称");
}
// 修改下拉框的内容
const change = () =>{
	console.log(data.typeValue,"type");
	console.log(data.agendaValue,"agenda")
}
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
			height: 380rpx;
			background:url("https://t7.baidu.com/it/u=872658011,1497098654&fm=193&f=GIF");
			-webkit-mask-image: linear-gradient(rgb(0,0,0),65%, transparent);
			background-size:100% 100%;
		}
		.show-search{
			position: absolute;
			width: 75%;
			.title{
				display: flex;
				justify-content: center;
				color: white;
				font-size: 30px;
				font-weight: bold;
			}	
			.search{
				::v-deep .uni-easyinput__content {
					line-height: 1.5;
					font-size: 28rpx;
					height: 60rpx; 
					min-height: 60rpx;
					border-radius: 25px;
				}
				.buttom-search{
					display: flex;
					justify-content: space-between;
					::v-deep .uni-select{
						background-color: white;
						line-height: 1.5;
						font-size: 28rpx;
						height: 60rpx; 
						min-height: 60rpx;
						border-radius: 25px;
						min-width: 220rpx;
					}
				}
			}
		}
		.show-search view:not(:last-child){
			margin-bottom: 20rpx;
		}
	}
	.video-item{
		padding: 0 20rpx;
		display: block;
	}
}
</style>
