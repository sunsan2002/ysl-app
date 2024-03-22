<template>
  <view class="exhibition-item">
    <view class="top">
      <video-item></video-item>
    </view>
    <view class="middle">
      <view class="company-title">
        <company-title :companyNews="data.companyNews"></company-title>
      </view>
      <view
        class="contents"
        v-for="(item, index) in data.contents"
        :key="index"
      >
        <view class="content">{{ item }}</view>
      </view>
      <view class="pics" v-for="(item, index) in data.pics" :key="index">
        <view class="pic">
          <image :src="item" />
        </view>
      </view>
    </view>
    <view class="posters">
      <view class="btn" @click="handleUpdownPost">下载海报</view>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import videoItem from "/pages/components/video/video-test.vue";
import companyTitle from "/pages/components/common/company-title.vue";
import { reactive } from "vue";
const data = reactive({
  companyNews: {
    logo: "https://img.zcool.cn/community/0101c15ed9c569a801215aa03820d8.jpg@1280w_1l_2o_100sh.jpg",
    title: "",
    introduce:
      "宝德计算专注计算机整机产品超23年，是国家级高新技术企业和国家专精特新“小巨人”企业，是中国领先的计算产品方案提供商。",
  },
  contents: [
    "CSS允许文本内容换行显示的方法有： 1.使用white-space属性：white-space属性可以控制文本内容的换行显示，它有三个值，分别是normal、nowrap和pre，normal表示换行显示，nowrap表示不换行显示，pre表示按照原始格式显示，也就是按照原始文本中的换行符进行换行显示。",
  ],
  pics: [
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1kk4XB.img",
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1kkKXo.img",
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1kkutD.img",
  ],
});
//下载海报
const handleUpdownPost = () => {
  console.log(111);
};
onLoad((options) => {
  data.companyNews.title = options.name;
  uni.setNavigationBarTitle({
    title: options.name,
  });
});
</script>
<style scoped lang="less">
.exhibition-item {
  .top {
    width: 100vw;
  }
  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    .contents {
      width: 95%;
      .content {
        display: block;
        text-indent: 58rpx;
        word-break: break-all;
        word-wrap: break-word;
        font-size: 16px;
        line-height: 1.6;
      }
    }
    .pics {
      .pic {
        .image {
          width: 100%; /* 图片宽度自适应容器 */
          height: 100%; /* 图片高度自适应容器 */
          object-fit: cover; /* 图片将被缩放以保持其宽高比，同时完全包含在容器内 */
          object-position: center; /* 图片在容器内的位置居中 */
        }
      }
    }
  }
  .middle > view {
    margin-top: 20rpx;
  }
  .posters {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 600rpx;
	margin: 0 auto;
    .btn {
      width: 520rpx;
      text-align: center;
      color: #fff;
      padding: 20rpx;
      margin: 20rpx;
      border-radius: 20rpx;
      background-color: RGB(32, 123, 196);
    }
  }
}
</style>
