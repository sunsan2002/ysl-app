<template>
  <view class="home-top-item">
    <image :src="data.imgUrl" style="height: 630rpx; width: 100%" />
    <view class="item">
      <view class="logo">
        <image :src="data.logo"></image>
      </view>
      <view class="item-center">
        <view class="title">{{ data.title }}</view>
        <view class="detail-news">
          <view>{{ data.time }}</view>
          <view>|</view>
          <view>{{ data.address }}</view>
        </view>
        <view class="button">
          <button size="mini" class="subscribe" plain="true">立即报名</button>
        </view>
        <view class="timer">
			<uni-countdown color="white" splitorColor="white" background-color="RGBA(44,191,219,0.6)" :show-colon="false" :font-size="25" :day="data.date.day" :hour="data.date.hour" :minute="data.date.minute" :second="data.date.s" />
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { reactive } from "vue";
const data = reactive({
  imgUrl: "/static/home-pic.png",
  logo: "/static/poster/logo.png",
  title: "2024 西湖论剑数字安全大会",
  time: "2024年4月5日-8日",
  address: "中国·杭州",
  date: {
    day: 1,
    hour: 12,
    minute: 35,
    s: 60,
  },
});
</script>
<style scoped lang="less">
.home-top-item {
  position: relative;
  .item {
    position: absolute;
    top: 15rpx;
    left: 15rpx;
    color: white;
    .logo {
      image {
        height: 80rpx;
        width: 120rpx;
      }
    }
    .item-center {
      font-weight: bolder;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        width: 80%;
        text-align: center;
        font-size: 35px;
        word-break: break-word;
        white-space: pre-line;
        overflow: hidden;
      }
      .detail-news,
      .timer {
        display: flex;
		justify-content: center;
		align-items: center;
      }
      .detail-news > view,
      .timer > view {
        margin-left: 20rpx;
      }
    }
    .item-center > view {
      margin-bottom: 30rpx;
    }
  }
}
::v-deep button {
  color: white;
  height: 55rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0rem 1rem;
  border: 1px solid white;
  width: 300rpx;
  border-radius: 25px;
}
</style>
