<!-- 精彩生活组件封装 -->
<template>
	<view class="activities-content">
		<image :src="item.img"></image>
		<view class="text-content">
			<view class="btn-content">
				<span @click="getMsg(item)">{{ item.name }}</span>
				<button size="mini" v-show="!item.isSubscription" class="btn1" @click="item.isSubscription = !item.isSubscription">+订阅</button>
				<button size="mini" v-show="item.isSubscription" class="btn1" @click="item.isSubscription = !item.isSubscription">已订阅</button>
			</view>
			<p @click="getMsg(item)">{{ item.msg }}</p>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	item: {
		type: Object,
		default: () => ({
			name: '格致论道@西湖论剑',
			msg: '“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
			img: '/static/images/activities-img1.png',
			isSubscription: true,
			type: 1
		})
	}
});

const getMsg = (item) => {
	uni.navigateTo({
		url: '/pages/index/news-msg?item=' + encodeURIComponent(JSON.stringify(item))
	});
};
</script>

<style lang="scss" scoped>
.activities-content {
	border: E5E5E5;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1em;
	background-color: #fff;
}
.activities-content > image {
	width: 100%;
	height: 370rpx;
}
.text-content {
	padding: 0 1em;
	padding-bottom: 1em;
}
.btn-content > span {
	font-size: 1em;
	text-align: left;
	font-weight: bold;
}
.text-content > p {
	font-size: 0.5em;
	text-align: left;
}
.btn-content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 0;
	gap: 0.5em;
}

.btn1 {
	color: #00c6d2;
	box-sizing: border-box;
	height: 10%;
	width: 20%;
	border: 1px solid #00c6d2;
	margin: 0;
	border-radius: 8.4375px;
	padding: 0 1em;
	white-space: nowrap;
	flex-shrink: 0;
}
</style>
