<template>
 <!-- <view>
	<view class="uni-padding-wrap uni-common-mt">
		<view>
			<video class="video-show" objectFit="cover" id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
				@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
		</view>
	</view>
  </view> -->
</template>
<script setup>
import { reactive } from 'vue';
const data = reactive({
	// videoConext:null,
	// // 弹幕
	// danmuList: [{
	// 		text: '第 1s 出现的弹幕',
	// 		color: '#ff0000',
	// 		time: 1
	// 	},
	// 	{
	// 		text: '第 3s 出现的弹幕',
	// 		color: '#ff00ff',
	// 		time: 3
	// 	}
	// ],
})
// const videoErrorCallback = (e) =>{
// 	uni.showModal({
// 		content: e.target.errMsg,
// 		showCancel: false
// 	})
// }
// const handleChangelookView = (e) =>{
// 	data.current = e.currentIndex;
// }
// onReady: (()=>{
// 	data.videoConext = uni.createVideoContext('myVideo');
// })
</script>

<style lang="less">
.video-show {
	width: 100%;
}
</style>