<template>
	<view class="home-activity">
		<view class="left active">
			 <image class="data-img" :src="data.leftImg" />
			 <view class="title">{{ data.leftTitle }}</view>
		</view>
		<view class="right active">
			 <image class="data-img" :src="data.rightImg" />
			  <view class="title">{{ data.rightTitle }}</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from "vue";
const data = reactive({
  leftImg: "https://tse1-mm.cn.bing.net/th/id/OIP-C.l8NBl395qUTSM4EASlOk9gHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  rightImg: "/static/images/activities-img1.png",
  leftTitle:"格物致知",
  rightTitle:"西湖论剑安全特训营"
});
</script>

<style lang="less" scoped>
.home-activity{
	display: flex;
	.active .title{
		text-align: center;
		width: 90%;
		padding: 10rpx 0;
		background-color: rgb(241,246,249);
	}
	image{
		height: 200rpx;
		width: 90%;
	}
}
.home-activity > view{
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
