<template>
  <!-- 视频展示标题界面 -->
  <view class="vectically-title">
    <view class="top">
      <text class="title">
        {{ props.title }}
      </text>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
const props = defineProps({
  title: {
    tyepe: String,
  },
});
</script>

<style scoped lang="less">
.vectically-title {
  .top {
    display: flex;
    align-items: center;
    height: 25px;
    border-left: 3px solid;
    border-image: linear-gradient(RGB(55, 200, 210), RGB(32, 123, 196)) 1;
    margin-bottom: 0.8rem;
    .title {
      color: black;
      font-weight: bold;
      margin-left: 20rpx;
      font-size: 18px;
    }
  }
}
</style>
