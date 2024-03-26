<template>
  <view class="home-guest">
    <view class="item">
      <view class="top">
        <image :src="data.pic"></image>
      </view>
      <view class="bottom">
        <view class="name">{{ data.name }}</view>
        <view class="describe">{{ data.describe }}</view>
      </view>
    </view>
    <view class="item">
      <view class="top">
        <image :src="data.pic"></image>
      </view>
      <view class="bottom">
        <view class="name">{{ data.name }}</view>
        <view class="describe">{{ data.describe }}</view>
      </view>
    </view>
    <view class="item">
      <view class="top">
        <image :src="data.pic"></image>
      </view>
      <view class="bottom">
        <view class="name">{{ data.name }}</view>
        <view class="describe">{{ data.describe }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
const data = reactive({
  pic: "/static/home/person.png",
  name: "刘世经",
  describe: "中国工程院院士",
});
</script>

<style scoped lang="less">
.home-guest {
	display: flex;
  .item {
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top {
      image {
        height: 150rpx;
        width: 150rpx;
        border-radius: 50%;
      }
    }
    .bottom {
      text-align: center;
      .name {
        font-size: 18px;
        font-weight: bold;
      }
      .describe {
        margin-top: 10rpx;
        color: RGB(200, 200, 200);
      }
    }
  }
}
.item > view {
  margin-top: 10rpx;
}
</style>
