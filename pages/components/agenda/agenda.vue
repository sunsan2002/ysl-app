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
			 <view v-for="(item,index) in agendaData" :key="index">
				<video-item-show :videoItem="item.videoItem"/>
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
import { agendaData } from '/assets/js/agenda-data.js'
const data = reactive({
  title: "会议议程",
  titleOne:"会议推荐",
  contetnList: [
    {
      time: "18:00 - 18:05",
      title: "主持人致辞",
      content:
        "古之欲明明德于天下者，先治其国。欲治其国者，先齐其家，欲齐其家者，先修其身。欲修其身者，先正其心。欲正其心者，先诚其意。欲诚其意者，先致其知。致知在格物",
    },
    {
      time: "18:05 - 18:25",
      title: "研究事物原理而获得知识",
      content: "梁文 中国科学院院士",
    },
  ],
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
