<template>
  <view class="video-detial">
    <view class="bottom">
      <view class="nav">
        <view class="topTabBar">
          <view
            class="grid"
            v-for="(item, tbIndex) in data.handlingType"
            :key="tbIndex"
            @tap="showType(tbIndex)"
          >
            <view
              class="text"
              :class="[tbIndex == data.tabbarIndex ? 'active' : '']"
              >{{ item.value }}</view
            >
          </view>
        </view>
        <view class="content">
          <block v-if="data.tabbarIndex == 0">
            <view class="content-show">
              <home-video></home-video>
            </view>
          </block>
          <block v-if="data.tabbarIndex == 1">
            <view class="content-show"><home-video></home-video> </view>
          </block>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { reactive, ref } from "vue";
import homeVideo from "/pages/components/common/home-video/home-video.vue";
const data = reactive({
  handlingType: [
    {
      value: "精彩视频",
    },
    {
      value: "精彩图片",
    },
  ],
  tabbarIndex: 0,
});
// 切换显示内容
const showType = (tbIndex) => {
  data.tabbarIndex = tbIndex;
};
</script>
<style scoped lang="less">
.nav {
  .topTabBar {
    width: 100%;
    height: 80upx;
    display: flex;
    justify-content: space-around;
    background-color: white;
    .grid {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
  .content {
    height: 100%;
  }
}
// 导航栏被选中
.active {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    RGB(55, 200, 210),
    RGB(32, 123, 196)
  );
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
