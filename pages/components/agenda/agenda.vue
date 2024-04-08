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
      time: "18:05 - 19:25",
	  title: "梁文 中国科学院院士",
      content: "研究事物原理而获得知识",
    },
	{
	  time: "19:25 - 20:00",
	  title: "扩展阅读演讲",
	  content: "“格物致知”，是儒家哲学中关于认识论的命题，语出《礼记·大学》。但是“格物致知”在《礼记·大学》中并未做具体阐释，而且其他先秦典籍中也未见此语，这使得“格物致知”的含义没有确解，引发了后来的争论。宋代朱熹将“物”解释为“天下之物”，“即凡天下之物，莫不因其已知之理而益穷之，以求至乎其极。至于用力之久，而一旦豁然贯通焉，则众物之表里精粗无不到，而吾心之全体大用无不明矣”。",
	},
	{
	  time: "20:00 - 21:00",
	  title: "结束语",
	  content: "后人由“致知在格物，物格而后知至”引申出成语“格物致知”",
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
