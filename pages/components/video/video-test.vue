<template>
  <view class="uni-padding-wrap uni-common-mt">
    <video
      class="video-show"
      objectFit="cover"
      id="myVideo"
      :src="props.src"
	  :poster="props.poster"
      @error="videoErrorCallback"
      :danmu-list="data.danmuList"
      enable-danmu
      danmu-btn
      controls
    ></video>
  </view>
</template>
<script setup>
import { reactive } from "vue";
const props = defineProps({
	src:{
		type: String
	},
	poster:{
		type: String
	}
})
const data = reactive({
  videoConext: null,
  // 弹幕
  danmuList: [
    {
      text: "第 1s 出现的弹幕",
      color: "#ff0000",
      time: 1,
    },
    {
      text: "第 3s 出现的弹幕",
      color: "#ff00ff",
      time: 3,
    },
  ],
});
const videoErrorCallback = (e) => {
  uni.showModal({
    content: e.target.errMsg,
    showCancel: false,
  });
};
const handleChangelookView = (e) => {
  data.current = e.currentIndex;
};
onReady: () => {
  data.videoConext = uni.createVideoContext("myVideo");
};
</script>
<style lang="less" scoped>
.uni-padding-wrap {
  height: 400rpx;
  margin:0;
  padding:0;
}
.video-show {
  width: 100%;
  height: 400rpx;
}
</style>
