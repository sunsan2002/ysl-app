<!-- 抽奖页面 -->
<template>
	<view class="content">
		<view class="title">
			<img src="https://c1.lezhi99.com/template/transfer/mobile/css/img/default/logo.png?r=6" />
			<!-- 幸运大抽奖 -->
		</view>
		<view class="grid-box">
			<view class="grid-box__inner">
				<view class="grid-box__item prize" v-for="(prize, i) in state.list" :class="{ active: state.curIndex === i }" :style="getGridItemStyle(i)" :key="'prize' + i">
					<image style="height: 100rpx;width: 100rpx;" mode="aspectFit" v-if="prize.isImg" class="prizeImg" :src="prize.imgUrl" />
					<span :class="{ isText: prize.isImg === false }">{{ prize.label }}</span>
				</view>
				<view class="grid-box__item start-btn" style="background-color: #ff5500; color: #fff" @click="handleClickStartBtn()">
					<!-- <view class="start-btn"></view> -->
					开始抽奖
					<span style="font-weight: 300; font-size: 24rpx">400积分/次</span>
				</view>
			</view>
		</view>
		<view class="msg">
			<view class="top">
				<span>以下是中奖人员>>></span>
			</view>
			<view>
				<view class="table" v-for="item in state.people">
					<view class="avatar">
						<img :src="item.avatar" />
						{{ item.name }}获得了{{ item.award }}
					</view>
					<span>{{item.date}}</span>
				</view>
			</view>
		</view>
		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff">
				<view class="popup-content">
					<span>恭喜！获得{{ state.list[state.curIndex].label }}</span>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';

const popup = ref(null);

const state = reactive({
	list: [
		{ label: '定制u盘', imgUrl: 'https://s1.lezhi99.com/storage/prize/system/digital/30-10.png', isImg: true },
		{ label: '手机一台', imgUrl: 'https://s1.lezhi99.com/storage/prize/system/digital/10-10.png', isImg: true },
		{ label: 'ps5一台', imgUrl: 'https://s1.lezhi99.com/storage/prize/system/digital/10-60.png', isImg: true },
		{ label: '现金600元', imgUrl: '../../static/icon/红包.png', isImg: true },
		{ label: '再来一次', imgUrl: '', isImg: false },
		{ label: '腾讯VIP', imgUrl: 'https://s1.lezhi99.com/storage/prize/system/general/00-80.png', isImg: true },
		{ label: '谢谢参与', imgUrl: '', isImg: false },
		{ label: '大礼包', imgUrl: '../../static/icon/礼盒 (2).png', isImg: true }
	],
	people: [
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
		{
			name: '用户****1234',
			award: 'u盘一枚',
			avatar: 'https://s1.lezhi99.com/static/image/no_avatar.png',
			date: '2023-12-13'
		},
	],
	curIndex: null,
	isTurning: false
});

function getGridItemStyle(index) {
	const gutter = 15; // 间距
	const width_height = 170; // 宽度 | 高度
	const margin = gutter + width_height;

	const map = {
		0: `translate(-${margin}rpx,-${margin}rpx)`,
		1: `translate( 0rpx,-${margin}rpx)`,
		2: `translate( ${margin}rpx,-${margin}rpx)`,
		3: `translate( ${margin}rpx,0rpx)`,
		4: `translate(${margin}rpx,${margin}rpx)`,
		5: `translate(0rpx,${margin}rpx)`,
		6: `translate(-${margin}rpx,${margin}rpx)`,
		7: `translate(-${margin}rpx,0rpx)`
	};

	return {
		transform: map[index] || ''
	};
}
function handleClickStartBtn() {
	if (state.isTurning) return;
	turn();
}
function turn() {
	const winningIndex = getWinningIndex();

	state.curIndex = 0;
	state.isTurning = true;

	const lastSpeed = 600; // 最终速度（ 速度 ==> setTimeout 的 延迟时间）
	const startSpeed = 80; // 初始速度
	const count = 4; // 转的圈数
	const speedDownNum = 15; // 倒数第 speedDownNum 次开始减速
	const speed = (lastSpeed - startSpeed) / speedDownNum; // 平均每次减速的量

	let index = 0; // 变换的次数
	let time = startSpeed; // setTimeout 的 延迟时间

	// 通过动态修改 setTimeout 的延迟时间 来达到变换速度的效果
	let setTime = () => {
		setTimeout(() => {
			// 判断是否开始减速
			if (index >= count * 8 + winningIndex - speedDownNum) {
				time += speed;
			}
			index++;
			state.curIndex = index % 8;

			// 当 index 小于 总数时 设置下一次 timeout
			if (index < count * 8 + winningIndex) {
				setTime();
			} else {
				state.isTurning = false;

				if (state.curIndex === 4 || state.curIndex === 6) {
				} else popup.value.open();
			}
		}, time);
	};

	setTime();
}
function getWinningIndex() {
	return parseInt(Math.random() * 8, 10);
}
</script>

<style lang="scss" scpoed>
.content {
	min-height: 100vh;
	background-image: url('https://c1.lezhi99.com/template/transfer/mobile/css/img/default/bg.jpg?r=8');
	padding: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-size: cover;
}
.isText {
	color: #ffaa00;
	font-family: '华文琥珀';
}
.title {
	color: #ffea02;
	font-weight: bold;
	font-family: '华文琥珀';
	font-size: 100rpx;
	margin: 100rpx;
	margin-bottom: 20rpx;
	white-space: 8rpx;
}
.prize:nth-child(4) > image {
	transform: scale(0.9);
}
.prize:nth-child(8) > image {
	transform: scale(0.8);
}
.title > img {
	height: 300rpx;
}
.grid-box {
	background-image: url('https://c1.lezhi99.com/template/transfer/mobile/css/img/default/transferBg.png?r=3');
	width: 600rpx;
	background-size: cover;
	height: 600rpx;
	border-radius: 30rpx;
	background-color: #ffe593;
	padding: 23rpx;
	box-shadow: -8rpx 16rpx 38rpx -20rpx rgba(0, 0, 0, 0.2);
}
.grid-box__inner {
	width: 100%;
	height: 100%;
	// border-radius: 30rpx;
	// background-color: #fe5c26;
	position: relative;
}
.prizeImg {
	height: 100rpx;
}
.grid-box__item {
	background-image: linear-gradient(-60deg, #fff 0%, #fef3d0 100%);
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -85rpx;
	margin-top: -85rpx;

	width: 170rpx;
	height: 170rpx;
	background-color: #fffdf3;
	border-radius: 15rpx;
	color: #000000;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.grid-box__item:last-child {
	background-image: linear-gradient(-60deg, #fe7a06 0%, #ff3336 100%);
	box-shadow: -10rpx 16rpx 16rpx -20rpx rgba(0, 0, 0, 11);
	font-weight: bold;
}
.active {
	background-image: linear-gradient(-60deg, #ffdf27 0%, #f6ff00 100%);
}
.start-btn {
	cursor: pointer;
	background-color: #ff5500;
	display: flex;
	justify-content: center;
	align-items: center;
}

.popup-content {
	height: 250rpx;
	width: 400rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
	}
}
uni-popup {
	border-radius: 30rpx;
}
.msg{
	background-color:#fff;
	// padding:30rpx;
	width:92%;
	margin-top:100rpx;
	border-radius: 15rpx;
	background-color: #FEEFCC;
}
.top{
	color:#FFE800;
	font-weight:bold;
	padding: 20rpx;
	background-color: #ff5500;
	  border-radius: 15rpx 15rpx 0 0; 
}
.table{
	display: flex;
	flex-direction: row;
	padding:30rpx 20rpx;
	align-items: center;
	justify-content: space-between;
	font-size: 22rpx;
	border-bottom:2rpx solid #cfa7a7;
}
.avatar>img{
	height:40rpx;
	border-radius:50% 50%;
}
.avatar{
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 22rpx;
	gap:14rpx;
}
</style>
