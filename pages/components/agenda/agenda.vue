<template>
  <!-- 会议议程 -->
  <view class="agenda">
	  <view class="top">
		  <view class="title">
		    <video-news-title :title="data.title"></video-news-title>
		  </view>
		  <view class="content">
		    <view v-for="(item, index) in data.contetnList" :key="index">
		      <video-content :videoContent="item"></video-content>
		    </view>
		  </view>
	  </view>
	  <view class="bottom">
		  <view class="title">
			   <vectically-title :title="data.titleOne"></vectically-title>
		  </view>
		 <view class="content">
			 <view v-for="(item,index) in data.recommendList" :key="index">
				<video-item-show :videoItem="item"/>
			 </view>
		 </view>
	  </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import videoNewsTitle from "/pages/components/common/video-news-title.vue";
import videoContent from "/pages/components/common/video-content.vue";
import vecticallyTitle from '/pages/components/common/vectically-title.vue';
import videoItemShow from "/pages/components/common/video-item-show.vue";
const data = reactive({
  title: "会议议程",
  titleOne:"会议推荐",
  contetnList: [
    {
      time: "18:00 - 18:05",
      title: "主持人致辞",
      content:
        "1111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    },
    {
      time: "18:05 - 18:25",
      title: "幻想一定不是科学的，但我们都爱他",
      content: "梁文 中国科学院院士",
    },
  ],
  recommendList:[{
	  imgUrl:
	    "https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg",
	  titile: "格致论道@西湖论剑",
	  time: "18:00 - 21:00",
	  address: "杭州市滨江区文化中心剧院一层",
  },{
	  imgUrl:
	    "https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg",
	  titile: "格致论道@西湖论剑",
	  time: "18:00 - 21:00",
	  address: "杭州市滨江区文化中心剧院一层",
  }]
});
</script>

<style scoped lang="less">
.agenda > view{
	margin: 20rpx;
	padding: 20rpx;
	display: block;
	background-color: RGB(240,240,240);
	border-radius: 4px;
}
</style>
