<template>
	<view class="container">
		<H3 class="title">留言墙</H3>
		<!-- 留言列表 -->
		<view class="message-list">
			<view
				v-for="(message, index) in messages"
				:key="index"
				class="message-item"
				:style="{ top: message.top + 'px', animationDuration: message.duration + 's', animationDelay: message.delay + 's', color: message.color }"
			>
				<view class="right">
					<image class="avatar" :src="message.img"></image>
					<text>{{ message.name }}</text>
				</view>
				<view class="chat-bubble">{{ message.content }}</view>
			</view>
		</view>

		<!-- 留言输入框 -->
		<view class="input-box">
			<input v-model="inputMessage" placeholder="请输入留言" />
			<view class="btn" @click="sendMessage">发送</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
	{
		name: 'sunsan',
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/k13wromzf4o.jpg',
		content: '今天大会很精彩~',
		duration: 10,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		name: '用户2',
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/v1bo4wkb0tn.jpg',
		content: '今天大会很精彩~',
		duration: 14,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		name: '用户3',
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/prcnlqfomlf.jpg',
		content: '今天大会很精彩~',
		duration: 12,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/ivhiashhpu1.jpg',
		name: 'fref',
		content: '感谢主办方的辛苦付出！',
		duration: 10,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/4iiyukjqu43.jpg',
		name: 'vrftb',
		content: '感谢嘉宾的指导！',
		duration: 6,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/2kekoxb3arc.jpg',
		name: 'rgrt4b',
		content: '加油，小程序团队！',
		duration: 8,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/fr5n4mf150k.jpg',
		name: 'ewvcd',
		content: '期待下一次活动！',
		duration: 9,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/ta5vzinpqzk.jpg',
		name: 'vwdvcsx',
		content: '祝大会取得圆满成功！',
		duration: 12,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/0jexeqzaccz.jpg',
		name: 'wcw',
		content: '今天大会很精彩~',
		duration: 8,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	},
	{
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/h3ceztjuuub.jpg',
		name: 'edwv',
		content: '这个小程序做的不错！',
		duration: 10,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	}
]);

const inputMessage = ref('');

const sendMessage = () => {
	if (inputMessage.value.trim() === '') return;
	const message = {
		name: 'sunsan',
		img: 'https://img.touxiangwu.com/uploads/allimg/2022053117/k13wromzf4o.jpg',
		content: inputMessage.value,
		duration: 8,
		delay: 0,
		top: Math.random() * (window.innerHeight-40)
	};
	messages.value.push(message);
	inputMessage.value = '';
};
</script>

<style scoped>
.container {
	width: 100vw;
	height: 95vh;
	position: relative;
	overflow: hidden;
	background-image: url('https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-geometric-creative-banner-background-general-background-image_46060.jpg');
	background-position-x: center;
	background-size: cover;
}

.message-list {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 60rpx;
	right: 0;
	overflow: hidden;
}

.message-item {
	position: absolute;
	white-space: nowrap;
	font-size: 16rpx;
	display: flex;
	flex-direction: row;
	color: #e3e3e3;
	gap: 15rpx;
	margin: 30rpx;
	animation-name: move;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

.avatar {
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	border-radius: 2rpx solid #fff;
	margin-right: 5rpx;
}

.chat-bubble {
	position: relative;
	max-width: 70%;
	background-color: rgba(45, 50, 114, 0.7);
	border-radius: 20rpx;
	padding: 15rpx;
	margin-bottom: 10rpx;
	display: flex;
	align-items: center;
	color: #e3e3e3;
}
.title {
	color: #fff;
	margin-left: 43%;
	margin-top: 20rpx;
}
.chat-bubble::before {
	content: '';
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: -20rpx;
	border-width: 10rpx;
	border-style: solid;
	border-color: transparent rgba(45, 50, 114, 0.7) transparent transparent;
}

@keyframes move {
	from {
		transform: translateX(400%);
	}
	to {
		transform: translateX(-100%);
	}
}

.input-box {
	position: fixed;
	left: 20rpx;
	background-color: rgba(45, 50, 114, 0.7);
	padding: 15rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 25rpx;
	bottom: 20rpx;
}

input {
	flex: 1;
	height: 40rpx;
	margin-right: 10rpx;
}

.btn {
	color: #bfbfbf;
}

button {
	height: 40rpx;
	padding: 0 15rpx;
	background-color: #409eff;
	color: #fff;
	border: none;
	border-radius: 4rpx;
	cursor: pointer;
}
.right {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
