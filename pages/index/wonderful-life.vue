<!-- 精彩生活页面 -->
<template>
	<view class="content">
		<tabbar :current="1"></tabbar>
		<wonderfulLifeItemVue class="activities-content" v-for="item in state.activities" :key="item.name" :item="item">
		</wonderfulLifeItemVue>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
import wonderfulLifeItemVue from '../components/wonderful-life-item/wonderful-life-item.vue';
import tabbar from '/components/tabbar.vue';
const state = reactive({
	activities: [
		{
			name: '格致论道@西湖论剑',
			msg: '“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
			img: '../../static/images/activities-img1.png',
			isSubscription: true,
			type: 1
		},
		{
			name: '西湖论剑安全特训营·网络攻防蓝队实战技法进阶班',
			msg: '本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。 培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌',
			img: '../../static/images/activities-img2.jpg',
			isSubscription: false,
			type: 0
		},
		{
			name: '西湖论剑安全特训营·数字安全官高级研修班',
			msg: '作为整个企业安全治理结构的设计者和践行人，数字安全官即需要了解国家、行业合规需求与发展趋势，还要洞悉数字经济背景下企业所需的安全能力，协助企业提升安全能力建设的成熟度。本次培训以塑',
			img: '../../static/images/activities-img3.jpg',
			isSubscription: false,
			type: 0
		},
		{
			name: '新·见未来 实·现梦想',
			msg: '今年是习近平总书记提出“八八战略”实施的20周年，是杭州亚运会举办之年，是数字浙江建设20周年,同时也是西湖论剑网络安全大会迈向第二个十年的起始之年。作为西湖论剑系列预热活动之一，此次新品发布会将突出西湖论剑新十年的目标——“聚焦科技，强化成果输出”，',
			img: '../../static/images/activities-img4.png',
			isSubscription: false,
			type: 0
		}
	]
});


</script>

<style lang="scss" scoped>
.content {
	height: 100vh;
	width: 100vw;
	background-color: #f0f1f8;
}

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
	height: 400rpx;
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
