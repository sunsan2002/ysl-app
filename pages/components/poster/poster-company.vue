<template>
  <view class="poster-company">
    <l-painter
      ref="painter"
      @success="path = $event"
      class="test"
      css="postion: relative"
    >
      <!-- 背景照片 -->
      <l-painter-image
        :src="data.backgroundPic"
        css="width: 750rpx; height: 1245rpx;object-fit: cover;display: block;"
      />
      <l-painter-view
        css="position: absolute;display: flex;flex-direction: column;margin: 20rpx"
      >
        <!-- 公司logo -->
        <l-painter-image
          :src="data.companyLogo"
          css="width: 120px; height: 100px;object-fit: cover;display: block;"
        />
        <!-- 标语 -->
        <l-painter-view css="width:100%; display:flex;justify-content: center;">
          <l-painter-text
            :text="data.title"
            css="font-size:30px;color: white;font-weight: bold;"
          ></l-painter-text>
        </l-painter-view>
        <!-- 时间和地址 -->
        <l-painter-view
          css="display: flex;flex-direction: column;color: white;margin: 120rpx 0rpx;"
        >
          <l-painter-text
            text="邀请函"
            css="margin: 10rpx 20rpx;font-size:40px;font-weight: bold;"
          ></l-painter-text>
          <l-painter-text
            :text="data.time"
            css="margin: 10rpx 20rpx;padding:10rpx;background-color: #207bc4"
          >
          </l-painter-text>
          <l-painter-text
            :text="data.addressPlay"
            css="margin: 10rpx 20rpx;padding:10rpx;background-color: #207bc4"
          >
          </l-painter-text>
        </l-painter-view>
        <!-- 二维码 -->
        <l-painter-qrcode
          :text="data.address"
          css="width: 150rpx; height: 150rpx; background-color: white;padding: 15rpx;margin-left: 20rpx"
        />
        <l-painter-text
          text="扫描二维码"
          css="color: white;width: 150rpx;margin: 10rpx 30rpx"
        ></l-painter-text>
      </l-painter-view>
    </l-painter>
  </view>
</template>

<script setup>
import { reactive, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
const data = reactive({
  backgroundPic: "https://bpic.588ku.com/back_pic/05/90/42/905ca97cffbcdeb.jpg",
  companyLogo: "/static/poster/companylogo.png",
  title: "数字安全，数字中国",
  address: "limeui.qcoon.cn",
  time: "2023.05.05 - 08",
  addressPlay: "中国杭州",
});
const painter = ref(null);
// 下载图片到相机
const savePic = () => {
  console.log("下载海报");
  painter.value.canvasToTempFilePathSync({
    fileType: "png",
    // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
    pathType: "url",
    quality: 0.9,
    success: (res) => {
      console.log(res.tempFilePath);
      // 非H5 保存到相册
      uni.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success: function () {
          uni.showToast({
            title: "图片已保存",
          });
        },
        fail: function () {
          uni.showToast({
            icon: "error",
            title: "图片保存失败",
          });
        },
      });
    },
  });
};
defineExpose({
	savePic
})
</script>
<style scoped lang="less">
</style>
