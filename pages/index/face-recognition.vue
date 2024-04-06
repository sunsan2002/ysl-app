<template>
  <div class="container">
	  <!-- <view class="video-bg"></view> -->
    <video
      class="video-bg"
      objectFit="cover"
      id="myVideo"
      src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
    ></video>
    <div class="face-overlay">
      <div class="circle"></div>
    </div>
    <button class="button">开始人脸识别</button>
  </div>
</template>
<script setup>
	
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  margin-left: 50rpx;
  margin-top: 200rpx;
  background-image: url('../../static/video/39dbdd5a193dae54d70666d430153867.mp4');
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
