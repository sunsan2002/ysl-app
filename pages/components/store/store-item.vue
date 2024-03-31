<!-- 商品列表组件 -->
<template>
	<view class="box">
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	flex-direction: column;
	height:600rpx;
	width:48%;
	background-color: #fff;
	border-radius: 20rpx 20rpx;
	box-shadow: 0rpx 10rpx 48rpx -3rpx rgba(0,0,0,0.1);
	img{
		object-fit: contain;
		height: 57%;
	}
	position: relative;
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
	position: relative;
	margin-top: 20rpx;	
}.score-btn{
		height: 40rpx;
		width: 80rpx;
		color:#00c6d2;
		display: flex;
		font-size: 16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border:1rpx solid #00c6d2;
		border-radius: 30rpx 30rpx;
		position: absolute;
		right: 0rpx;
		bottom:0rpx;
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
