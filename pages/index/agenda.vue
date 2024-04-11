<template>
	<view class="agenda top-content">
		<tabbar :current="2"></tabbar>
		<view class="top">
			<image mode="aspectFill" />
			<view class="show-search">
				<view class="title">{{ data.title }}</view>
				<view class="search">
					<view class="top-search">
						<uni-easyinput v-model="data.agendaName" suffixIcon="search" placeholder="请输入会议名称进行搜索" @iconClick="handleSearchForAgendaName"></uni-easyinput>
					</view>
					<view class="buttom-search">
						<view class="left">
							<uni-data-select placeholder="全部会议" v-model="data.agendaValue" :localdata="data.agendaRange" @change="change"></uni-data-select>
						</view>
						<view class="right">
							<uni-data-select placeholder="全部类型" v-model="data.typeValue" :localdata="data.typeRange" @change="change"></uni-data-select>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="middle">
			<view v-show="search" v-for="(item, index) in agendaData" :key="index">
				<video-item class="video-item" :data="item" />
			</view>
			<view v-show="!search" v-for="(item, index) in agendaData1" :key="index">
				<video-item class="video-item" :data="item" />
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import tabbar from '/components/tabbar.vue';
import videoItem from '/pages/components/video/video-item';
import { agendaData } from '/assets/js/agenda-data.js';
const search = ref(true);
const data = reactive({
	title: '大会议程',
	agendaName: '',
	agendaValue: null,
	agendaRange: [],
	typeValue: null,
	typeRange: []
});

const agendaData1 = ref([
	{
		title: ' 4月9日',
		videoItem: {
			imgUrl: 'https://prod-tx-mdn-1305533294.file.myqcloud.com/static/1775046527844352.jpg',
			titile: 'AI引领 智启新程',
			time: '2024.04.09 - 2024.04.11',
			address: '杭州洲际酒店·国际厅2厅',
			type: {
				type: 2,
				title: '马上报名',
				icon: 'paperplane'
			}
		}
	}
]);
// 手动搜索会议名称
const handleSearchForAgendaName = () => {
	console.log('搜索会议名称');
	uni.showLoading({
		// title: '认证中',
		mask: true,
		success: function () {
			setTimeout(function () {
				// 隐藏弹窗后执行的操作
				uni.hideLoading();
				search.value = false;
			}, 700); // 这里的 2000 是延迟时间，可以根据实际情况调整
		}
	});
};
// 修改下拉框的内容
const change = () => {
	console.log(data.typeValue, 'type');
	console.log(data.agendaValue, 'agenda');
};
</script>

<style lang="less" scoped>
.agenda {
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		image {
			width: 100%;
			height: 380rpx;
			background: url('https://t7.baidu.com/it/u=872658011,1497098654&fm=193&f=GIF');
			-webkit-mask-image: linear-gradient(rgb(0, 0, 0), 65%, transparent);
			background-size: 100% 100%;
		}
		.show-search {
			position: absolute;
			width: 75%;
			.title {
				display: flex;
				justify-content: center;
				color: white;
				font-size: 30px;
				font-weight: bold;
			}
			.search {
				::v-deep .uni-easyinput__content {
					line-height: 1.5;
					font-size: 28rpx;
					height: 60rpx;
					min-height: 60rpx;
					border-radius: 25px;
				}
				.buttom-search {
					display: flex;
					justify-content: space-between;
					::v-deep .uni-select {
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
		.show-search view:not(:last-child) {
			margin-bottom: 20rpx;
		}
	}
	.video-item {
		padding: 10rpx 30rpx;
		display: block;
	}
}
.top-content {
	padding-bottom: 130rpx;
}
</style>
