<template>
  <view class="video-item">
    <view class="top">
      <video-news-title :title="data.title"></video-news-title>
    </view>
    <view class="middle">
      <view class="video-item-group">
        <video-item-show :videoItem="data.videoItem"></video-item-show>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import videoNewsTitle from "/pages/components/common/video-news-title.vue";
import videoItemShow from "/pages/components/common/video-item-show.vue";
	
const props = defineProps({
	data:{
		type:Object
	}
})
const data = props.data;
</script>

<style scoped lang="less"></style>
