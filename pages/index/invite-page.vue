<template>
	<view class="content">
		<image src="../../static/images/code.jpg" mode="aspectFit"></image>
		<view class="btn" @click="share">
			<uni-icons type="redo-filled" color="#fff" size="30"></uni-icons>
			分享好友
		</view>
	</view>
</template>

<script setup>
	
	const share = () => {
		// #ifdef APP-PLUS
		uni.share({
		    provider: "weixin",
		    scene: "WXSceneSession",
		    type: 0,
		    href: "http://uniapp.dcloud.io/",
		    title: "西湖论剑",
		    summary: "我正在参与西湖论剑网络安全大会，快来跟我一起来体验！",
		    imageUrl: "https://prod-tx-mdn-1305533294.file.myqcloud.com/static/1775046527844352.jpg",
		    success: function (res) {
		        uni.showToast({
		        	title: '分享成功！',
		        	icon: 'success', // 弹出框图标，可选值："success"、"loading"、"none"，默认为"success"
		        	duration: 1500, // 弹出框持续时间，单位为毫秒，默认为1500ms
		        });
		    },
		    fail: function (err) {
		        console.log("fail:" + JSON.stringify(err));
		    }
		});
		// #endif
		
		// #ifdef MP-WEIXIN
		uni.share({
		    provider: 'weixin',
		    scene: "WXSceneSession",
		    type: 5,
		    imageUrl: 'https://prod-tx-mdn-1305533294.file.myqcloud.com/static/1775046527844352.jpg',
		    title: '西湖论剑网络安全大会',
		    miniProgram: {
		        id: 'gh_abcdefg',
		        path: 'pages/index/home',
		        type: 0,
		        webUrl: 'http://uniapp.dcloud.io'
		    },
		    success: ret => {
		        uni.showToast({
		        	title: '分享成功！',
		        	icon: 'success', // 弹出框图标，可选值："success"、"loading"、"none"，默认为"success"
		        	duration: 1500, // 弹出框持续时间，单位为毫秒，默认为1500ms
		        });
		    }
		});
		// #endif
	}
	
</script>

<style lang="scss" scoped>
.content{
	height: 100vh;
	padding: 10rpx;
	image{
		height: 85%;
		width: 100%;
	}
}
.btn{
	position: fixed;
	bottom: 20rpx;
	background-color: #00c6d2;
	padding: 20rpx;
	right: 30rpx;
	left: 30rpx;
	border-radius: 50rpx;
	color: #fff;
	display:flex;
	justify-content: center;
	font-size: 40rpx;
	align-items: center;
}
</style>
