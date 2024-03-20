<template>
  <view class="video-content">
    <view class="top">
      <view class="time">
        <uni-icons type="calendar" size="20" color="white"></uni-icons>
        <view class="time-text">
          {{ props.videoContent.time }}
        </view>
      </view>
      <view class="title">{{ props.videoContent.title }}</view>
      <view class="content text-content-superfluous">{{ props.videoContent.content }}</view>
    </view>
    <view class="splicer"></view>
  </view>
</template>

<script setup>
const props = defineProps({
  videoContent: {
    type: Object,
  },
});
</script>
<style lang="less" scoped>
.video-content {
  .top {
    border: E5E5E5;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    .time {
      display: flex;
      align-items: center;
      color: white;
      background-color: RGB(7, 24, 57);
      border-radius: 25px;
      padding: 0 10rpx;
      width: 40%;
      .text-content-superfluous {
        margin-left: 20rpx;
      }
    }
    .title {
      font-weight: bolder;
      font-size: 17px;
    }
    .content {
      font-size: 14px;
      width: 90%;
      margin-bottom: 20rpx;
    }
  }
  .top > view {
    margin-top: 20rpx;
    margin-left: 20rpx;
  }
  .splicer {
    border-bottom: 0.5px solid RGB(161, 159, 175);
    margin: 0.45rem;
  }
}
</style>
