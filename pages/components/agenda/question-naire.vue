<template>
  <view class="question-naire">
    <view class="top">
      <view class="news-item">
        <view class="title">2024年国际互联网大会</view>
        <view class="time">2024.04.08-2024.04.09</view>
      </view>
    </view>
    <view class="middle">
      <view class="uni-form-item uni-column">
        <view class="title">对会议内容是否满意</view>
        <input class="uni-input" placeholder="请输入" />
      </view>
      <view class="uni-form-item uni-column">
        <view class="title">对主讲嘉宾的课题是否满意</view>
        <input class="uni-input" placeholder="请输入" />
      </view>
      <view class="uni-form-item uni-column">
        <view class="title">您更倾向哪方面的课题研究</view>
        <input class="uni-input" placeholder="请输入" />
      </view>
      <view class="uni-form-item uni-column">
        <view class="title">您对我们的会议有哪些建议</view>
        <input class="uni-input" placeholder="请输入" />
      </view>
    </view>
    <view class="bottom">
      <button
        size="default"
        type="default"
        style="
          color: #ffffff;
          background-color:  RGB(0,199,211);
          bordercolor:  RGB(0,199,211);
        "
      >
        提交
      </button>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
onLoad((options) => {
  uni.setNavigationBarTitle({
    title: options.name,
  });
});
</script>

<style scoped lang="less">
.question-naire {
  background-color: RGB(244,244,244);
}
.top {
  padding: 60rpx;
  .news-item {
    background-color: white;
    padding: 40rpx;
    border-radius: 0.1rem;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    .title {
      font-size: 40rpx;
      font-weight: bolder;
      margin-bottom: 60rpx;
    }
    .time {
      color: RGB(210, 210, 210);
    }
  }
}
.middle {
  background-color: white;
  padding-bottom: 30rpx;
  .uni-column {
    padding: 30rpx;
    padding-bottom: 0;
    .title {
      margin-bottom: 20rpx;
      font-size: 16px;
    }
    input {
      padding: 20rpx;
      border: 1px solid RGB(220, 220, 220);
      border-radius: 0.1rem;
    }
  }
}
.bottom {
  padding: 40rpx;
  button {
    backgroundcolor: RGB(89, 102, 249);
    color: white;
  }
}
</style>
