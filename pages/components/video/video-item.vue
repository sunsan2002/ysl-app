<template>
  <view class="video-item" @click="handleTurnToVideoDetail">
    <view class="top">
      <video-news-title :title="data.title"></video-news-title>
    </view>
    <view class="middle">
      <view class="video-item-group">
        <video-item-show :videoItem="data.videoItem"></video-item-show>
        <video-item-show :videoItem="data.videoItem"></video-item-show>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import videoNewsTitle from "/pages/components/common/video-news-title.vue";
import videoItemShow from "/pages/components/common/video.vue";
const data = reactive({
  title: " 5月5日 下午 ",
  videoItem: {
    imgUrl:
      "https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg",
    titile: "格致论道@西湖论剑",
    time: "18:00 - 21:00",
    address: "杭州市滨江区文化中心剧院一层",
  },
});
// 跳转详情界面
const handleTurnToVideoDetail = () => {
  uni.navigateTo({
    url: "/pages/components/video/video-detail",
    success: (res) => {},
    fail: () => {},
    complete: () => {},
  });
};
</script>

<style scoped lang="less"></style>
