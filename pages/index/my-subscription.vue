<template>
  <view class="container">
    <view class="tab-header">
      <view class="tab-item" :class="{ 'active': currentTab === 1 }" @click="switchTab(1)">议程订阅</view>
      <view class="tab-item" :class="{ 'active': currentTab === 2 }" @click="switchTab(2)">精彩活动订阅</view>
    </view>
    <view class="tab-content">
      <view v-if="currentTab === 1">
		  <videoItem :data="state.videoData"></videoItem>
	  </view>
      <view v-if="currentTab === 2">
		  <wonderfulLifeItem :item="state.wonderfulData"></wonderfulLifeItem>
	  </view>
    </view>
  </view>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import videoItem from "/pages/components/video/video";
import wonderfulLifeItem from "/pages/components/wonderful-life-item/wonderful-life-item.vue";

const currentTab = ref(1)

const state = reactive({
	videoData:{
			imgUrl: 'https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg',
			titile: '格致论道@西湖论剑',
			time: '18:00 - 21:00',
			address: '杭州市滨江区文化中心剧院一层',
			isSubscription:true
	},
	wonderfulData:{
			name: '格致论道@西湖论剑',
			msg: '“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
			img: '/static/images/activities-img1.png',
			isSubscription: true,
			type: 1
		}
})

const switchTab = ( tab ) => {
	console.log(tab)
	currentTab.value = tab
	console.log(currentTab.value)
}
</script>

<style lang="scss" scoped>
.container {
}

.tab-header {
  display: flex;
  background-color:#fff;
  justify-content: space-around;
}

.tab-item {
  text-align: center;
  padding: 25rpx;
  border:none;
  cursor: pointer;
  font-weight:bold;
  letter-spacing:2rpx;
  font-size:30rpx;
}

.active {
  border-bottom: 6rpx solid #00c6d2;
  color: #00c6d2;
}

.tab-content {
  margin-top: 10rpx;
}

</style>
