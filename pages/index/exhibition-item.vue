<template>
  <view class="exhibition-item">
    <view class="top">
      <video-item :src="data.src" :poster="data.poster"></video-item>
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
        <view class="content">
			{{item}}
		</view>
      </view>
      <view class="pics" v-for="(item, index) in data.pics" :key="index">
        <view class="pic">
          <image :src="item" />
        </view>
      </view>
    </view>
    <view class="posters">
      <view class="btn" @click="handleUpdownPost">下载海报</view>
	  <poster-company ref="posterUploadRef" v-show="data.showPoster"></poster-company>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import videoItem from "/pages/components/video/video-test.vue";
import companyTitle from "/pages/components/common/company-title.vue";
import posterCompany from '/pages/components/poster/poster-company.vue'
import { reactive,ref } from "vue";
const data = reactive({
	src:"https://www.dbappsecurity.com.cn/Upload/File/202301/20230110170214_0199.mp4",
	poster:"https://www.dbappsecurity.com.cn/images/ad/ad_img10.jpg",
  companyNews: {
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.1ba28ae9a3d466cd50fff3d9cb30a4b5?rik=oWgNKQlbpQ%2ba%2bQ&riu=http%3a%2f%2fwww.hollynis.com%2fPublic%2fheli%2fimages%2fhzjg_19.jpg&ehk=b60pGH6gr550NtHHTV%2fsqjRWnXoP5HKyMqTL8mgPVZc%3d&risl=&pid=ImgRaw&r=0",
    title: "",
    introduce:
      "宝德计算专注计算机整机产品超23年，是国家级高新技术企业和国家专精特新“小巨人”企业，是中国领先的计算产品方案提供商。",
  },
  contents: [
    "安恒信息依然把握住网络安全行业飞速发展的战略机遇，数据安全、MSS、信创安全、密码安全等战略新方向的相关订单保持高速增长。同时，公司的安全服务、云安全、态势感知等依然保持较好增速，使得公司营业收入规模继续提升。",
	"从收入结构来看，安恒信息数据安全大类产品收入增速远超整体营收增速。数据安全战略是安恒信息三大发展战略之一，公司数据安全相关产品现已覆盖复杂数据应用的全生命周期、全链路数据安全，形成了较强的核心竞争力，建立了完善的“数盾”品牌，并拿下多个省部级项目。",
  ],
  pics: [
    "https://tse3-mm.cn.bing.net/th/id/OIP-C.rSRmvUqtjpqy89JocHeEwgHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.YiiG8OPo2ilMS0_7zcH_8gHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ],
  showPoster:false
});
//下载海报
const posterUploadRef = ref(null);
const handleUpdownPost = () => {
	posterUploadRef.value.savePic();
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
		border-radius: 0.1rem;
		padding: 20rpx;
		border-top: 1rpx solid RGBA(136,136,136,0.5);
		box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
		margin-bottom: 10rpx;
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
