<!-- 积分商城页面 -->
<template>
	<view class="content">
		<!-- <view class="nav">
			<img src="/static/icon/score-icon.png" style="height: 60rpx;" mode="aspectFill"/>
			<uni-easyinput
			  suffixIcon="search"
			  placeholder="请输入商品名称进行搜索"
			></uni-easyinput>
		</view> -->
		<view class="top">
			<view class="avatar">
				<view class="avatar-img"></view>
				<view class="avatar-text">
					<p>sunsan</p>
					<view class="score">
						<img src="/static/icon/score-icon.png" />
						<p>400</p>
						<uni-icons type="right" size="10" color="#fff"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="msg">
			<!-- <img src="/static/icon/msg-icon.png" /> -->
			<p>{{ msgText }}</p>
		</view>
		<view class="middle">
			<view class="btn-box">
				
				<button class="btn1"  @click="goTo('/pages/index/score-detail')"><img src="/static/icon/积分-实色.png" /></button>积分明细
			</view>
			<view class="btn-box">
				
				<button class="btn1"><img src="/static/icon/订单.png" /></button>积分抽奖
			</view>
			<view class="btn-box">
				
				<button class="btn1"><img src="/static/icon/抽奖活动管理.png" /></button>订单列表
			</view>
		</view>
		<view class="bottom">
			<h3>精选TOP>>></h3>
			<view class="store-list">
				<storeItemVue v-for="item in state.goodsList" :key="item.name" :goods="item"/>
			</view>

		</view>
	</view>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import storeItemVue from '../components/store/store-item.vue';



const announcements = ['****2345用户抽中了600元大奖。', '****2323用户兑换了定制徽章一枚。', '****2959用户兑换了桌面摆件一枚。'];
const msgText = ref('****3547用户抽中大礼包一盒。');

// 获取公告栏文本元素的引用
// let msgText = document.getElementById('msgText');

const goTo = (url) => {
	uni.navigateTo({
	  url:url
	});
}

const state = reactive({
	goodsList:[
		{
			imgUrl:'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg',
			name:'2021年成都大运会赛事门票',
			msg:'2021年成都大运会赛事门票',
			score:'2500',
			money:'12'
		},
		{
			imgUrl:'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/7396fbe9f74f404e8764e76e7430b3fa.png',
			name:'2023数据安全能力洞察报告',
			msg:'安恒信息围绕国家数字化建设“2522”顶层布局规划',
			score:'2500',
			money:'12'
		},{
			imgUrl:'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/2780d2232d2f40c08915fad0a6cc03a7.png',
			name:'《数据安全与隐私计算》众多专家学者力荐！',
			msg:'众多专家学者力荐！',
			score:'2500',
			money:'12'
		},{
			imgUrl:'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/3518223caed3401f8e0c72bc91593b2c.jpg',
			name:'梦百合舒适睡眠记忆枕头',
			msg:'【安，好梦】联名款枕头',
			score:'2500',
			money:'12'
		},
	]
})

let currentIndex = 0;

const updateIndex = () => {
	msgText.value = announcements[currentIndex];
	currentIndex = (currentIndex + 1) % announcements.length;
};

onMounted(() => {
	console.log(msgText);
	setInterval(updateIndex, 10000);
});
</script>
<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	background-color: #faf1f2;
}
.top {
	background-image: url('/static/images/score-store-top.png');
	background-size: cover;
	background-position: center;
	border-radius: 30rpx 30rpx;
	height: 300rpx;
	margin: 10rpx;
}
.nav {
	display: flex;
	flex-direction: row;
	gap: 6rpx;
	margin: 0 10rpx;
	align-items: center;
}

.avatar {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20rpx;
	margin-top: 80rpx;
	margin-left: 40rpx;
}
.avatar-img {
	border-radius: 50% 50%;
	height: 110rpx;
	width: 110rpx;
	background: url('../../static/icon/user-icon.png');
	background-color: #efefef;
	background-position: center;
	background-size: cover;
	border: 6rpx solid #ffffff;
	box-sizing: bord;
}
.avatar-text {
	line-height: 50rpx;
}

.avatar-text > p {
	color: #ffffff;
	font-weight: bold;
	text-shadow: 4rpx 4rpx 0px rgba(0, 0, 0, 0.1);
}

.msg {
	display: flex;
	flex-direction: row;
	background-color: #f1523d;
	align-items: center;
	justify-content: center;
	height: 63rpx;
	margin-top: 10rpx;
	padding: 5rpx 40rpx;
	box-sizing: border-box;
	gap: 15rpx;
	img {
		width: 54rpx;
	}
	p {
		color: #f9f9f9;
		white-space: nowrap;
		animation: marquee 10s linear infinite;
	}
}

@keyframes marquee {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(-150%);
	}
}
.score {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12rpx;
}
.score > img {
	height: 40rpx;
}
.score > p {
	color: #fff;
	text-shadow: 4rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	font-weight: bold;
}
.middle {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	height:200rpx;
	padding: 30rpx 20rpx 0rpx 20rpx;
}
.btn-box{
	display:flex;
	flex-direction: column;
	align-items: center;
}
.btn1 {
	border: 0;
	height:100rpx;
	width: 100rpx;
	background-color: #fff;
	border-radius: 50rpx 50rpx;
	line-height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	img{
		height:70rpx;
		width: 70rpx;
	}
}
.bottom{
	padding:20rpx;
	background-color: #fff;
	margin: 10rpx;
	border-radius: 20rpx 20rpx;
	h3{
		margin-bottom: 20rpx;
	}
}
.store-list{
	display: flex;
	justify-content: row;
	flex-wrap: wrap;
	gap: 20rpx;
}
</style>
