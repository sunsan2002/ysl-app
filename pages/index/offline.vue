<!-- 线下会议操作页面 -->
<template>
	<view class="content">
		 <!-- 弹出框内容区域 -->
		    <view v-show="showPopup" class="popup-container">
		      <view class="popup-content">
		        <text>{{ message }}</text>
		      </view>
		    </view>
		<view class="top">
			<p class="title">2024年国际互联网大会</p>
			<p>时间：2024.04.08-2024.04.09</p>
			<p>地点：杭州市滨江区文化中心剧院一楼</p>
			<view class="left">
				<view class="text">进行中</view>
				<uni-icons type="right" color="#fff" size="20"></uni-icons>
			</view>
		</view>
		<view class="btn-list">
			<view v-for="(item, index) in state.btnList" :key="item.id" class="btn" :class="{'in-progress':item.now===true}" @click="handleCheck(index,item.title)">
				<image :src="item.img" />
				<p>{{ item.title }}</p>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { onLoad } from "@dcloudio/uni-app";

// 弹出框显示状态
const showPopup = ref(false);

// 弹出框中的消息内容
const message = ref('签到成功！');

// 切换弹出框显示状态
const togglePopup = () => {
  showPopup.value = !showPopup.value;
  setTimeout(()=>{
	  showPopup.value = !showPopup.value
  },2000)
};

onLoad((options) => {
  uni.setNavigationBarTitle({
    title: options.name,
  });
});

const state = reactive({
	btnList: [
		{
			id: 1,
			title: '现场签到',
			img: '../../static/icon/现场签到.png',
			now: true
		},
		{
			id: 2,
			title: '拍照打卡',
			img: '../../static/icon/拍照.png',
			now: true
		},
		{
			id: 3,
			title: '留言上墙',
			img: '../../static/icon/留言.png',
			now: true,
		},
		{
			id: 4,
			title: '抽奖环节',
			img: '/static/icon/抽奖-线.png',
			now: false
		},
		{
			id: 5,
			title: '行程安排',
			img: '../../static/icon/投票.png',
			now: false
		},
		{
			id: 6,
			title: '问卷调查',
			img: '../../static/icon/问卷调查.png',
			now: false
		}
	]
});

// 点击查看具体详情界面
const handleCheck = (index,title) =>{
	console.log(title);
	switch(index){
		case 0:goTo("/pages/index/sign-in",title);break;
		case 1:goTo("/pages/index/photo-card",title);break;
		case 2:goTo("/pages/index/message-wall",title);break;
		case 3:goTo("/pages/components/lucky-draw/lucky-draw",title);break;
		case 4:goTo("/pages/components/agenda/agenda-progress",title);break;
		case 5:goTo("/pages/components/agenda/question-naire",title);break;
	}
}

const goTo = (url,title) => {
	uni.navigateTo({
		url: url+"?name=" + title,
		success: res => {},
		fail: () => {},
		complete: () => {}
	});
}
</script>

<style lang="scss" scoped>
.content {
	min-height: 100vh;
	width: 100vw;
	background-color: #f9f9f9;
}
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px; /* 调整弹出框高度 */
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-100%);
}

.popup-content {
  padding: 10px;
}

button {
  margin-top: 20px;
}
.top {
	background-color: #31c1d4;
	height: 8rem;
	padding: 30rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	font-size: 30rpx;
	gap: 12rpx;
	position: relative;
	.title {
		font-weight: bold;
		font-size: 35rpx;
		margin-top: 30rpx;
	}
	.left {
		position: absolute;
		right: 20rpx;
		bottom: 110rpx;
		display: flex;
		flex-direction: row;
		.text {
			background-color: rgba(255, 255, 255, 0.5);
			padding: 0 10rpx;
			border-radius: 10rpx;
		}
	}
}
.in-progress::before {
	content: '进行中';
	font-size: 22rpx;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #31C1D4;
	color: #fff;
	padding: 5rpx;
	border-radius: 0 0 10rpx 0;
}
.btn-list {
	margin: 20rpx;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 25rpx; /* 设置格子之间的间距 */
	border-radius: 30rpx;
	.btn {
		background-color: #fff;
		display: flex;
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
		flex-direction: column;
		padding: 60rpx;
		align-items: center;
		position: relative;
		gap: 20rpx;
		font-weight: bold;
		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
}
</style>
