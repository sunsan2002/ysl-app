<template>
  <view>
    <view id="J_prismPlayer"></view>
  </view>
</template>
 
<script setup>
import Aliplayer from 'aliplayer';

const player = new Aliplayer({
  "id": "J_prismPlayer",
  "autoplay": false,
  "cover": "http://i.alicdn.com/video/pic/0/normal/1920693713/TB2DHh2j9XXXXb4XVXXXXXXXXXX-1920-1080.jpg_250x250.jpg",
  "vid": "1ef79cbf44e3460286ff26fdd935cd01",
  "playauth": "",
  "source": "video",
  "width": "100%",
  "height": "500px"
}, function(player){
  console.log('播放器创建好了。')
});
onunload(()=>{
	if(player){
		player.dispose();
	}
})
</script>
 
<style scoped>
#J_prismPlayer {
  width: 100%;
  height: 500px;
}
</style>