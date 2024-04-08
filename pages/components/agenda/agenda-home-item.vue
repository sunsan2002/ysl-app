<template>
  <view class="agenda-home-item">
    <view class="item">
      <image class="data-img" :src="data.rightImg" />
	  <view class="left">
		  <image class="left-pic" :src="data.leftImg"></image>
		  <view class="left-show">
			  <view class="title">{{ data.title }}</view>
			  <view class="check">
				  <button size="mini" class="subscribe" plain="true">查看详情</button>
			  </view>
		  </view>
	  </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
const data = reactive({
  leftImg: "/static/home/left.jpg",
  rightImg: "/static/images/activities-img1.png",
  title:"议题更加前沿"
});
</script>

<style lang="less" scoped>
.agenda-home-item {
  .item {
	position: relative;
    .data-img {
      height: 300rpx;
      width: 100%;
      object-fit: cover;
    }
	.left{
		image{
			position: absolute;
			width: 55%;
			height: 300rpx;
			object-fit: cover;
			top:0;
			z-index: 2;
			-webkit-mask-image: linear-gradient(rgb(0, 0, 0), 80%, transparent);
			background-size: 100% 100%;
		}
		.left-show{
			color: white;
			position: absolute;
			top:0;
			z-index: 10;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: 100%;
			width: 55%;
			.title{
				margin-bottom: 30rpx;
				font-size: 17px;
				font-weight: bolder;
			}
		}
	}
  }
}
::v-deep button {
  color: white;
  height: 55rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0rem 0.5rem;
  border: 1px solid white;
  width: 180rpx;
  border-radius: 25px;
}
</style>
