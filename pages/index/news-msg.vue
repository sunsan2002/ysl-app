<template>
  <view>
    <view class="title-box">
      <view class="box">
        <p>{{ item.name }}</p>
      </view>
    </view>
    <view class="middle" v-if="item.type">
      <video-item class="video-item" />
      <video-item class="video-item" />
    </view>
    <view class="middle" v-else>
      <article-item
        v-for="item in state.articles"
        :key="item.title"
        :articleItem="item"
      />
    </view>
  </view>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { useInit } from "@/hooks/useInit";
import videoItem from "/pages/components/video/video";
import articleItem from "/pages/components/article/article-item";

const state = reactive({
  /* 1为直播0为图文 */
  type: 0,
  articles: [
    {
      imgUrl: "/static/images/activities-img2.jpg",
      title: "西湖论剑安全特训营·网络攻防蓝队实战技法进阶班",
      time: "2023-05-04 09:00 - 18:00",
    },
    {
      imgUrl: "/static/images/activities-img3.jpg",
      title: "西湖论剑安全特训营·数字安全官高级研修班",
      time: "22023-05-04 09:00 - 18:00 ",
    },
  ],
});

const pages = getCurrentPages();
const currentPage = pages[pages.length - 1];
const item = JSON.parse(currentPage.$page.options.item);
</script>

<style scoped>
.box {
  background-image: url("https://www.gcsis.cn/img/activity_banner.jpg");
  min-height: 10rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
}

.box p {
  font-weight: 600;
  color: white;
  font-size: 1.2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 1em;
  background-position: center;
}
</style>
