<!-- 人脸认证页面 -->
<template>
  <view class="container">
	  <!-- <view class="video-bg"></view> -->
	  <span class="text1">正在识别...</span>
	  <view>
	   <image class="video-bg" src="/static/images/face.jpg"/>
	  </view>
	  <p class="text">未识别到人脸！</p>
   <!-- <video
      class="video-bg"
      objectFit="cover"
      id="myVideo"
    ></video> -->
    <view class="face-overlay">
      <view class="circle"></view>
    </view>
    <button disabled="true" class="button">验证中</button>
  </view>
</template>
<script setup>
	
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1F2427;
  // opacity: 0.9;
  align-items: center;
  justify-content: center;
  gap:60rpx;
}
.text{
	color: #E16261;
	font-size: 40rpx;
}
.video-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 500rpx;
  width: 500rpx;
  border-radius: 50%;
  border: 8rpx solid #e14d4d;
}

.face-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.text1{
	font-size: 40rpx;
	color: #fff;
	margin-top: -250rpx;
}

// .face-overlay.visible {
//   opacity: 1;
// }

.circle {
  width: 200px;
  height: 200px;
  border: 2px solid #4a9f8b; /* Green color for face recognition circle */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.button {
  position: fixed;
  left: 100rpx;
  right: 100rpx;
  bottom: 100rpx;
  background-color: #00c6d2;
  color: #fff;
  border: 0;
  
}
</style>
