<template>
  <view class="comment">
    <view class="top">
      <view class="left">
        <image :src="props.commentContent.pic" />
      </view>
      <view class="right">
        <view class="name">{{ props.commentContent.userName }}</view>
        <view class="time">{{ props.commentContent.time }}</view>
      </view>
    </view>
    <view class="middle">
      <view class="title">{{ props.commentContent.title }}</view>
      <view class="content">{{ props.commentContent.content }}</view>
    </view>
    <view class="bottom">
      <view class="comment-num num-item">
        <uni-icons type="chat" size="20" color="RGB(142,142,142)"></uni-icons>
        <view class="num">{{ props.commentContent.commentsNum }}</view>
      </view>
      <view class="like-num num-item">
        <uni-icons
          type="hand-up"
          size="20"
          color="RGB(142,142,142)"
        ></uni-icons>
        <view class="num">{{ props.commentContent.likeNum }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  commentContent: {
    type: Object,
  },
});
</script>

<style scoped lang="less">
.comment {
  padding-left: 20rpx;
  padding-top: 20rpx;
  border-bottom: 2px solid RGB(240, 240, 240);
  .top {
    display: flex;
    align-items: center;
    height: 75rpx;
    .left {
      margin-right: 20rpx;
      image {
        width: 65rpx;
        height: 65rpx;
        border-radius: 50%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        color: RGB(116, 116, 116);
      }
      .time {
        color: RGB(156, 156, 156);
        font-size: 11px;
      }
    }
  }
  .middle {
    .title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 15rpx;
    }
    .content {
      color: RGB(117, 117, 117);
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    margin-right: 20rpx;
    color: RGB(142, 142, 142);
    font-size: 11px;
    .num-item {
      display: flex;
      justify-content: center;
      align-items: center;
      .num {
        margin-left: 5rpx;
      }
    }
    .like-num {
      margin-left: 60rpx;
    }
  }
}
.comment > view {
  margin-bottom: 10rpx;
}
</style>
