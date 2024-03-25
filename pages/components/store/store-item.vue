<!-- 商品列表组件 -->
<template>
	<view class="box">
		
		<img :src="goods.imgUrl"/>
		<view class="content">
		<p class="name">{{goods.name}}</p>
		<p class="msg">{{goods.msg}}</p>
		<view class="get">
			<span class="score">{{goods.score}}</span>积分
			<!-- +<span class="score">{{goods.money}}</span>元 -->
			<button>兑换</button>
		</view></view>
	</view>
</template>

<script setup>


const props = defineProps({
	goods:{
		type:Object,
		default:()=>({
			imgUrl:'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg',
			name:'2021年成都大运会赛事门票',
			msg:'2021年成都大运会赛事门票',
			score:'2500',
			money:'12'
		})
	}
})

</script>

<style lang="scss" scoped>
.box{
	display: flex;
	flex-direction: column;
	height:550rpx;
	width:48%;
	background-color: #fff;
	border-radius: 20rpx 20rpx;
	box-shadow: 0rpx 10rpx 48rpx -3rpx rgba(0,0,0,0.1);
	img{
		object-fit: contain;
		height: 57%;
	}
}
.name{
	font-weight: bold;
	font-family: '微软雅黑';
	font-size: 27rpx;
}
.msg{
	font-size: 22rpx;
	color: #7f7f7f;
}
.get{
	display: flex;
	flex-direction: row;
	// justify-content:space-around;
	color:#7f7f7f ;
	font-size: 20rpx;
	margin-top: 20rpx;
	position: relative;
	button{
		height: 40rpx;
		width: 130rpx;
		color:#00c6d2;
		display: flex;
		font-size: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border:1rpx solid #00c6d2;
		border-radius: 30rpx 30rpx;
		position: absolute;
		right: 0;
	}
}
.score{
	color: #00c6d2;
	font-size: 26rpx;
	font-weight: bold;
}
.content{
	padding: 20rpx;
}
</style>
