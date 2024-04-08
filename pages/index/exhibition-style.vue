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
                    style="width: 200rpx; height: 200rpx;object-fit: cover;"
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
                  <video-test :src="item.src" :poster="item.poster"></video-test>
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
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.D9gAnHnw0vtQKTziS8J3IwAAAA?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      companyName: "安恒信息",
      content:
        "自成立以来一直专注于网络信息安全领域，公司秉承“构建安全可信的数字世界”的企业使命，获取历年大会精彩信息. 安恒信息，数字安全领军企业，以DAS（数据安全、AI、安全运营服务）为核心战略，涵盖网络安全、数据安全、云安全、信创安全、密码安全",
		src:"https://www.dbappsecurity.com.cn/Upload/File/202301/20230110170214_0199.mp4",
		poster:"https://www.dbappsecurity.com.cn/images/ad/ad_img10.jpg"
    },
    {
      companyPic:
        "https://picd.zhimg.com/v2-883e8806a6e3386e507dce2e7204bef7_l.jpg?source=172ae18b",
      companyName: "袋鼠云",
      content: "原生数据中台、数字孪生和可观测运维等一站式大数据产品和服务，涵盖从数据采集、数据开发与治理、数据资产、数据安全、 …",
	  src:"https://assets.dtstack.com/2023/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/4%E5%88%86%E9%92%9F%E8%A2%8B%E9%BC%A0%E4%BA%91%E5%AE%A3%E4%BC%A0%E7%89%870726.mp4",
	  poster:"https://www.dtstack.com/_next/image?url=https%3A%2F%2Fdtstack-static.oss-cn-hangzhou.aliyuncs.com%2F2023%2F%25E5%2585%25B3%25E4%25BA%258E%25E6%2588%2591%25E4%25BB%25AC%2F%25E5%2585%25AC%25E5%258F%25B8%25E4%25BB%258B%25E7%25BB%258D%2F1%25E5%2585%25AC%25E5%258F%25B8%25E5%25A4%2596%25E6%2599%25AF.png&w=3840&q=100"
    },
    {
      companyPic:
        "https://qxb-logo-url-osscache.qixin.com/OriginalUrl/7cfc737b74243f062d5bfa48d00bdcd0.jpg",
      companyName: "娃哈哈",
      content: "娃哈哈数字营销平台是一款经销商管理自己辖区内下级批发、零售商，销售团队，进销存数据，产品价格管理，私域流量变现等的数字化营销工具。它将零售商纳入系统，打通整个快消品供应链配送体系，从而实现线上下单、线下就近配送。",
	  src:"https://staticfs.wahaha.com.cn/download/wahaha-website-admin/wahaha-website-admin/1668497629274/%E9%9D%9E%E5%B8%B8%E5%8F%AF%E4%B9%90_%E6%88%90%E7%89%87.mp4",
	  poster:"https://img.lanjinger.com/news/20211227/1640612140890_necvqpmysuppp.jpeg@!thumb800"
    },
  ],
  current: 0,
});
// 修改查看的展商
const change = (e) => {
  data.current = e.detail.current;
};
const handleTurnToExhibtionItem = () => {
  uni.navigateTo({
    url:
      "/pages/index/exhibition-item?name=" +
      data.info[data.current].companyName,
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
        height: 85vh;
        .swiper-item {
          height: 80%;
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
			  .company-pic{
				  background-color: white;
				  padding: 0rpx 20rpx;
				  image{
					  width: 100%; /* 图片宽度自适应容器 */
					  height: 100%; /* 图片高度自适应容器 */
					  object-fit: cover; /* 图片将被缩放以保持其宽高比，同时完全包含在容器内 */
					  object-position: center; /* 图片在容器内的位置居中 */
				  }
			  }
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
