<template>
  <view class="circle_process">
    <view class="wrapper right">
      <view class="circle rightcircle"></view>
    </view>
    <view class="end-time"
      ><view class="time" v-if="data>0">{{ data }}</view>
	  <view class="time" v-if="data==0">Go！</view></view
    >
    <view class="wrapper left">
      <view class="circle leftcircle" id="leftcircle"></view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";
const data = ref(5);
const countDown = () => {
  setTimeout(() => {
    data.value -= 1;
    countDown();
  }, 1000);
};
onMounted(() => {
  countDown();
});
</script>

<style lang="less" scoped>
.circle_process {
  position: relative;
  width: 200px;
  height: 200px;
}
.circle_process .wrapper {
  width: 100px;
  height: 200px;
  position: absolute;
  top: 0;
  overflow: hidden;
}
.end-time {
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 35px;
  z-index: 10;
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.circle_process .right {
  right: 0;
}
.circle_process .left {
  left: 0;
}
.circle_process .circle {
  width: 160px;
  height: 160px;
  border: 20px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: rotate(-135deg);
  z-index: 9;
}
.circle_process .rightcircle {
  border-top: 20px solid white;
  border-right: 20px solid white;
  right: 0;
  animation: circle_right 6s linear infinite;
}
.circle_process .leftcircle {
  border-bottom: 20px solid white;
  border-left: 20px solid white;
  left: 0;
  animation: circle_left 6s linear infinite;
}
@keyframes circle_right {
  0% {
    transform: rotate(-135deg);
  }
  50%,
  100% {
    transform: rotate(45deg);
  }
}
@keyframes circle_left {
  0%,
  50% {
    transform: rotate(-135deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
.end-time {
  animation-name: endTime; // 动画名称
  animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
  animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
  animation-delay: 0s; // 动画延迟时间
  animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
  animation-duration: 1s; // 动画完成时间
}
@keyframes endTime {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(2);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
