<template>
	<view class="container">
		<image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3t_pT8Xm39dPS1FE89-yt9ab3SN1xpNRP9Jl-LlaETE5itBsG"></image>
		<view class="top">
			<p>2024年国际互联网大会</p>
			<view class="msg" v-for="item in state.detail" :key="item.icon">
				<uni-icons color="#8b8b8b" :type="item.icon" size="20"></uni-icons>
				<span>{{ item.text }}</span>
			</view>
			<view class="share">
				<uni-icons color="#848484" type="redo-filled" size="20"></uni-icons>
				分享
			</view>
			<view class="process">已开始</view>
		</view>
		<view class="content">
			<view class="tab-header">
				<view class="tab-item" :class="{ active: currentTab === 1 }" @click="switchTab(1)">会议介绍</view>
				<view class="tab-item" :class="{ active: currentTab === 2 }" @click="switchTab(2)">会议流程</view>
			</view>
			<view class="tab-content">
				<view class="page1" v-if="currentTab === 1">
					<span>
						世界互联网大会是由致力于推动全球互联网发展的相关企业、组织、机构和个人等自愿结成的国际性、行业性、非营利性社会组织。该组织在中国注册，总部位于北京。
					</span>
					<image src="https://tse1-mm.cn.bing.net/th/id/OIP-C.WRrUxt1eqNtzpAKRPGvsEwHaEK?w=281&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"></image>
				</view>
				<view v-if="currentTab === 2">
					<view class="page1">
						<view v-for="item in state.process" :key="item.id" class="ax-item">
							<view class="ax-mark">
								<view class="ax-node"></view>
							</view>
							<view class="ax-text">
								<view class="ax-title">
									<span>{{item.time}}</span>
									<h3>{{item.title}}</h3>
								</view>
								<view class="ax-des">&nbsp;&nbsp;&nbsp;</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { onLoad } from "@dcloudio/uni-app";
onLoad((options) => {
  uni.setNavigationBarTitle({
    title: options.name,
  });
});

const currentTab = ref(2);

function switchTab(item) {
	currentTab.value = item;
}

const state = reactive({
	detail: [
		{
			icon: 'calendar',
			text: '2024.04.08 - 2024.04.09'
		},
		{
			icon: 'map-pin-ellipse',
			text: '杭州洲际酒店·国际厅2厅'
		},
		{
			icon: 'person',
			text: '刘博'
		},
		{
			icon: 'staff',
			text: '参会人数200人'
		}
	],
	process:[
		{
			id:1,
			time:'09:00-09:30',
			title:'媒体签到，暖场视频'
		},
		{
			id:2,
			time:'09:30 - 09:35',
			title:'主持人开场'
		},
		{
			id:5,
			time:'09:40-10:00',
			title:'领导致辞'
		},
		{
			id:6,
			time:'09:45 - 09:50',
			title:'发布仪式：DAS三大核心能力图谱OR智能体全景图发布'
		},
		{
			id:10,
			time:'12:25 - 12:25',
			title:'发布会结束'
		},
	]
});
</script>

<style lang="scss" scoped>
.container {
	min-height: 100vh;
	background-color: #fafafa;
}
.container > image {
	width: 100vw;
	height: 11rem;
	object-fit: contain;
}
.top {
	padding: 20rpx;
	background-color: #fff;
	position: relative;
	margin-bottom: 20rpx;
	> p {
		font-weight: bold;
	}
	.share {
		position: absolute;
		right: 0;
		background-color: #e3e3e3;
		display: flex;
		justify-content: row;
		align-items: center;
		font-size: 22rpx;
		border-bottom-left-radius: 20rpx;
		border-top-left-radius: 20rpx;
		padding: 5rpx 10rpx;
		color: #848484;
		top: 30rpx;
	}
	.process {
		position: absolute;
		right: 60rpx;
		top: 120rpx;
		background-color: rgba(0, 198, 210, 0.2);
		color: #00c6d2;
		padding: 10rpx 20rpx;
		border-radius: 15rpx;
		font-size: 25rpx;
	}
}
.msg {
	color: #8b8b8b;
	font-size: 25rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10rpx;
	margin-top: 6rpx;
}
.tab-header {
	display: flex;
	background-color: #fff;
	justify-content: space-around;
}

.tab-item {
	text-align: center;
	padding: 25rpx;
	border: none;
	cursor: pointer;
	font-weight: bold;
	letter-spacing: 2rpx;
	font-size: 30rpx;
}

.active {
	border-bottom: 6rpx solid #00c6d2;
	color: #00c6d2;
}

.tab-content {
	margin-top: 10rpx;
}

.ax-item {
	width: 100%;
	flex: none;
	display: flex;
	margin-left: 2rem;
	
}
.ax-mark {
	height: 100%;rpxidth: 14rpx;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
}
.line {
	height: calc(100% - 1.4rem);
	top: 1.4rem;
	position: absolute;
}
.ax-text {
	text-align: left;
	margin-left: 1.4rem;
	flex: auto;
	margin-top: 0;
	width: 0;
}
.ax-title {
	padding: 6rpx;
	width: 90%;
}
.ax-node {
	width: 23rpx;
	height: 23rpx;
	border-radius: 50%;
	background-color: #00c6d2;
	display: inline-block;
	position: relative;
	&:after {
	content: '';
	height: 240rpx;
	width: 5rpx;
	background-color: #00c6d2;
	position: absolute;
	top: 0;
	left: 50%;
	right: 50%;
	transform: translateX(-50%);
}
}


.page1 {
	padding: 30rpx;
	color: #6a6a6a;
	line-height: 50rpx;
	font-size: 29rpx;
	background-color: #fff;
	> image {
		min-width: 100%;
		margin-top: 15rpx;
	}
}
</style>
