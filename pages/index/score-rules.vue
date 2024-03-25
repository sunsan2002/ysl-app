<!-- 积分规则页面 -->
<template>
	<view class="content">
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
		<h3 class="title">积分规则</h3>
		<view v-for="item in state.rulesList" :key="item.name" class="list">
			<span class="name">{{ item.name }}</span>
			<span class="scoreText">+{{ item.score }}积分</span>
			<button class="btn" v-if="item.isGet">已{{ item.button }}</button>
			<button class="btn btn2" v-else>去{{ item.button }}</button>
		</view>
		<h3 class="title1">积分规则说明</h3>
		<view class="msg">1.您所得积分可参与平台不定期开展的物品兑换活动，具体参见每次兑换活动说明；<br>
2. 用户所得积分仅可在活动期间内参与物品兑换活动，活动结束后将无法进行兑换，每个账号用户在活动期间仅能参与3次兑换，您不得通过直接或间接方式利用多个账号获取多次兑换机会；<br>
3. 您获取积分后将有机会获取奖品。请以网站所展示的展品为准（奖品先到先得，全部兑换完为止）<br>
4. 请您勿必知晓，您须按要求填写相关信息，如因用户原因导致无法配送或收货等后果由用户自行承担相关责任；同时，本活动奖品价值为市场参考价值，且您所收到奖品请以所发送的实物为准；<br>
5.如您在积分领取及活动过程中存在违规行为（包括但不限于使用多个账号、使用辅助程序等非人为操作方式、利用平台技术漏洞和平台规则漏洞等作弊方式或他不合理方式参与本活动），平台有权取消、冻结您的积分并取消您参与活动的资格，没收相关奖励，情节严重的，平台有权封禁账号并追究用户违规责任；<br>
6. 如出现不可抗力或情势变更的情况（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的），则平台可依相关法律法规的规定主张免责；<br>
7.平台可以根据运营情况对积分规则进行变动或调整，相关变动或调整将公布在活动页面上，公布后依法生效；<br>
8. 平台在法律允许的最大范围内对活动拥有解释权。</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
	rulesList: [
		{
			name: '用户注册',
			score: '200',
			button: '注册',
			isGet: true
		},{
			name: '签到',
			score: '100',
			button: '签到',
			isGet: true
		},{
			name: '完善信息',
			score: '1500',
			button: '完善',
			isGet: true
		},{
			name: '观看直播',
			score: '2000',
			button: '观看',
			isGet: true
		},{
			name: '订阅',
			score: '200',
			button: '订阅',
			isGet: false
		},
		{
			name: '分享',
			score: '200',
			button: '分享',
			isGet: false
		},
		{
			name: '线下展商打卡',
			score: '200',
			button: '打卡',
			isGet: false
		},
		{
			name: '邀请好友参会',
			score: '500',
			button: '邀请',
			isGet: false
		},
	]
});
</script>

<style lang="scss" scoped>
.content {
	background-color: #fff;
}
.avatar {
	background-image: url('https://www.gcsis.cn/img/activity_banner.jpg');
	min-height: 10rem;
	padding: 2rem 1rem;
	box-sizing: border-box;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20rpx;
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
.title {
	margin: 30rpx;
}
.list {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 50rpx 30rpx;
	border-bottom:3rpx solid #e2e2e2;
	position:relative;
}
.scoreText{
	color:#8c8c8c;
	margin-left:100rpx;
	position:absolute;
	left:250rpx;
}
.btn{
	border-radius:30rpx 30rpx;
	background-color:#fff;
	color:#00c6d2;
	height:55rpx;
	line-height:55rpx;
	font-size:30rpx;
	border:1rpx solid #00c6d2;
	position:absolute;
	right:30rpx;
}
.btn2{
	color:#fff;
	background-color:#00c6d2;
	border:0;
}
.title1{
	margin:100rpx 30rpx;
	margin-bottom:30rpx;
}
.msg{
	padding:40rpx;
	font-size:22rpx;
	color:#6b6b6b;
}
</style>
