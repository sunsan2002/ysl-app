<template>
  <view class="exhibition-style">
    <tabbar :current="3"></tabbar>
    <view class="exhibition">
      <view class="prompt">左右滑动可查看更多展商</view>
      <view class="exhibition-item">
       <swiper
          class="swiper-box"
          previous-margin="55rpx"
          next-margin="55rpx"
          @change="change"
        >
         <swiper-item
            class="swiper-item"
            v-for="(item, index) in data.info"
            :key="index"
          >
            <view class="swiper-item-show" @click="handleTurnToExhibtionItem">
              <view class="top">
                <view class="company-pic">
                  <image
                    :src="item.companyPic"
                    style="width: 200rpx; height: 200rpx"
                  />
                </view>
                <view class="company-name">
                  {{ item.companyName }}
                </view>
              </view>
              <view class="bottom">
                <view class="content text-content-superfluous">{{
                  item.content
                }}</view>
                <view class="video">
                  <video-test></video-test>
                </view>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import tabbar from "/components/tabbar.vue";
import videoTest from "/pages/components/video/video-test.vue";

const data = reactive({
  info: [
    {
      companyPic:
        "https://img.zcool.cn/community/0101c15ed9c569a801215aa03820d8.jpg@1280w_1l_2o_100sh.jpg",
      companyName: "安恒信息",
      content:
        "自成立以来一直专注于网络信息安全领域，公司秉承“构建安全可信的数字世界”的企业使命，以数11111121",
    },
    {
      companyPic:
        "https://img.zcool.cn/community/0101c15ed9c569a801215aa03820d8.jpg@1280w_1l_2o_100sh.jpg",
      companyName: "安恒信息1",
      content: "内容 B",
    },
    {
      companyPic:
        "https://img.zcool.cn/community/0101c15ed9c569a801215aa03820d8.jpg@1280w_1l_2o_100sh.jpg",
      companyName: "安恒信息2",
      content: "内容 C",
    },
  ],
  current:0
});
// 修改查看的展商
const change = (e) => {
  data.current = e.detail.current;
};
const handleTurnToExhibtionItem = () => {
  uni.navigateTo({
    url: "/pages/index/exhibition-item?name=" + data.info[data.current].companyName,
  });
};
</script>

<style lang="less" scoped>
.exhibition-style {
  .exhibition {
    background-image: url("/static/images/exhibition-style-background.jpg");
    display: flex;
    flex-direction: column;
	background-size: 100% 100%;
    .prompt {
      color: white;
      text-align: center;
      margin: 25rpx;
    }
    .exhibition-item {
      .swiper-box {
        width: 100%;
        height: 1050rpx;
        .swiper-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .swiper-item-show {
            width: 590rpx;
            .top {
              width: 100%;
              height: 350rpx;
              background: repeating-linear-gradient(
                to right,
                RGB(5, 52, 226),
                RGB(36, 198, 219)
              );
              .company-name {
                color: white;
                font-size: 18px;
                margin-top: 20rpx;
                font-weight: bolder;
              }
            }
            .bottom {
              width: 100%;
              height: 600rpx;
              background-color: white;
              .content {
                width: 80%;
                color: RGB(70, 73, 80);
                font-size: 15px;
                max-height: 116rpx;
              }
              .video {
                width: 500rpx;
                padding: 30rpx;
              }
            }
          }
        }
      }
    }
  }
}
.swiper-item-show,
.swiper-item-show > view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
