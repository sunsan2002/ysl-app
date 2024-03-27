<template>
	<view class="content">
		<view class="top">需支付</view>
		<view class="text">
			￥<span>12</span>
		</view>
		<view class="line"></view>
		<span class="top">选择支付方式</span>
		<view class="radio">
			<view class="left">
				<img src="/static/icon/微信支付.png" />
				<span>微信支付</span>
			</view>
			<view class="input" :class="{ active: select }" @click="update()">
				<uni-icons v-show="select" color="#fff" type="checkmarkempty" size="15"></uni-icons>
			</view>
		</view>
		<button class="btn" @click="pay()">使用微信支付支付</button>
		<!-- <view class="modal">
		  <view class="modal-content">
		    <span class="close">&times;</span>
		    <p>这是弹窗的内容。</p>
		  </view>
		</view> -->

		<view>
			<uni-popup class="popup" background-color="#6c6c6c" ref="popup">
					<view class="popup-content">
					<img src="/static/icon/微信支付.png" />
					<view class="loader">
					  <view class="dot"></view>
					  <view class="dot"></view>
					  <view class="dot"></view>
					</view>
				</view>				
			</uni-popup>
		</view>
		<view>
			<uni-popup class="popup" ref="finish" background-color="#fff">
				<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close()" @confirm="close()">
					<view class="popup-content">
					支付成功！
				</view>	
				</uni-popup-dialog>
								
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const select = ref(true);
const popup = ref(null)
const finish = ref(null)

function update() {
	select.value = !select.value;
}

function pay(){
	popup.value.open()
	
	setTimeout(function() {
		popup.value.close();
		finish.value.open();
	}, 1000);
	
	
}

function close(){
	finish.value.close()
	uni.navigateTo({
		url: '/pages/index/score-store'
	});
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 110rpx 30rpx;
	gap: 26rpx;
}
.popup-content{
	display:flex;
	flex-direction: column;
	align-items: center;
	padding:30rpx;
	img{
		height:80rpx;
	}
}
.top {
	color: #909090;
	font-size: 22rpx;
}
.text {
	font-weight: bold;
	font-size: 35rpx;
	font-family: 'Arial Black';
	letter-spacing: -6rpx;
	span {
		font-size: 70rpx;
		font-weight: bolder;
	}
}
.line {
	height: 1rpx;
	width: 100vw;
	background-color: #f3f3f3;
	margin-top: 30rpx;
	margin-bottom: 34rpx;
}
.radio {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	gap:50vw;
	margin-top: 50rpx;
	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 30rpx;
	}
	img {
		height: 50rpx;
	}
}
.input {
	border-radius: 50%;
	border: 2rpx solid #a8a8a8;
	height: 27rpx;
	width:27rpx;
	line-height: 27rpx;
}
.active {
	background-color: #15ba11;
	border-radius: 50%;
	border: 0;
	padding: 5rpx;
}
.btn{
	position:fixed;
	bottom:60rpx;
	right:50rpx;
	left:50rpx;
	background-color:#15ba11;
	border-radius:55rpx;
	height:80rpx;
	line-height:80rpx;
	font-weight:600;
	font-size:33rpx;
	color:#343434;
	letter-spacing:1rpx;
	// font-family:'隶书';
}
// .uni-popup .uni-popup__wrapper{
	
// }
// ::deep .popup__content{
// 	border-radius:40rpx;
// 	height:100rpx;
// }
::v-deep .uni-popup .uni-popup__wrapper {
  border-radius: 20rpx;
  // background-color:#5b5b5b;
  &:second-child(){
	  padding:0;
  }
  // padding:50rpx;
}
.uni-popup-dialog{
	border-radius:40rpx;
}
/* 弹窗外部容器 */
.modal {
  display: none; /* 初始状态隐藏 */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4); /* 半透明背景 */
}

/* 弹窗内容 */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 调整垂直居中位置 */
  padding: 20rpx;
  border: 1rpx solid #888;
  width: 80%; /* 弹窗内容宽度 */
  max-width: 400rpx; /* 最大宽度 */
  border-radius: 10rpx;
}

/* 关闭按钮 */
.close {
  color: #aaa;
  float: right;
  font-size: 28rpx;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.loader {
  display: flex;
  justify-content: center;
  margin-top:50rpx;
  align-items: center;
  // height: 80rpx; /* 调整高度以适应你的需求 */
}

.dot {
  width: 15rpx;
  height: 15rpx;
  background-color: #ffffff; /* 原点颜色 */
  border-radius: 50%;
  margin: 0 10rpx; /* 调整原点之间的间距 */
  animation: bounce 0.5s infinite alternate; /* 添加动画效果 */
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20rpx); /* 调整原点上下跳动的距离 */
  }
}

.dot:nth-child(2) {
  animation-delay: 0.1s; /* 调整第二个原点的动画延迟 */
}

.dot:nth-child(3) {
  animation-delay: 0.2s; /* 调整第三个原点的动画延迟 */
}

</style>
