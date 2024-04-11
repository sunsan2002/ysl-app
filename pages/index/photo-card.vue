<!-- 拍照打卡页面 -->
<template>
	<view class="box">
		<!-- 显示所有人拍照的图片 -->
		<view v-for="(item, index) in photoList" :key="index" class="photo-item">
			<img :src="item.photo" class="photo" />
			<view class="user-info">
				<img :src="item.avatar" class="avatar" />
				<span class="username">{{ item.username }}</span>
			</view>
			<view class="comment">{{ item.comment }}</view>
		</view>

		<!-- 点击我也要打卡 -->
		<view class="check-in">
			<button v-show="showBtn" @click="takePhoto">我也要打卡</button>
		</view>

		<!-- 输入打卡宣言 -->
		<view class="card-text" v-if="showPrompt">
			<uni-easyinput style="width: 200rpx; flex: 0.8" v-model="commentValue" maxlength="200" placeholder="请输入打卡宣言" />
			<button @click="addData">确认</button>
		</view>
		<!-- 评论弹窗 -->
		<uni-popup ref="cPopupRef" type="bottom" @change="popChange">
			<view class="c_popup_box">
				<view class="reply_text">
					<template v-if="Object.keys(replyTemp).length">
						<span class="text_aid">回复给</span>
						<span class="text_main">{{ replyTemp.item2 ? replyTemp.item2.user_name : replyTemp.item1.user_name }}</span>
					</template>
					<span v-else class="text_main">发表新评论</span>
				</view>
				<view class="content">
					<view class="text_area">
						<uni-easyinput
							class="text_area"
							type="textarea"
							v-model="commentValue"
							placeholder="请输入打卡宣言"
							:focus="focus"
							trim
							autoHeight
							maxlength="300"
						></uni-easyinput>
					</view>
					<view class="send_btn" @tap="() => addData()">发送</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const showBtn = ref(true);
const commentValue = ref('');
const imgUrl = ref('');
const photoList = ref([
	{
		avatar: 'http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg',
		username: 'fleexxx',
		photo: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg',
		comment: '今天的大会很精彩'
	},
	{
		avatar: 'https://img.keaitupian.cn/uploads/2021/03/15/feb4f91cad8a40d5985e0fed763b3f6c.jpg',
		username: 'staticchit',
		photo: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/526899a3e3f7459da9c6a3120d1a9b84.jpg',
		comment: '很高兴来到这里~'
	}
]);

const declaration = ref('');

const showPrompt = ref(false);

function takePhoto() {
	// 调用uni-app的拍照功能
	uni.chooseImage({
		count: 1,
		sizeType: ['compressed'],
		sourceType: ['camera'],
		success: function (res) {
			// uni.saveImageToPhotosAlbum({
			// 	filePath: res.tempFilePaths[0],
			// 	success: function () {
			// 		console.log('save success');
			// 	}
			// });
			uni.getImageInfo({
				src: res.tempFilePaths[0],
				success: function (image) {
					imgUrl.value = image.path;
					showPrompt.value = true;
					showBtn.value = false;
				}
			});

		}
	});
}

// uni.uploadFile({
// 	url: 'https://xxxx/api/v1/qiniu/upload/img', //服务器地址
// 	fileType:"image",//ZFB必填,不然报错
// 	filePath: tempFilePaths[0],//这个就是我们上面拍照返回或者先中照片返回的数组
// 	name: 'imgFile',
// 	success: (uploadFileRes) => {
// 		let imgData = JSON.parse(uploadFileRes.data)
// 		console.log(imgData.data.imgUrl);
// 		console.log(this);
// 		this.imgDataUrl = imgData.data.imgUrl
// 	}
// });


function sendClick() {}

function addData() {
	photoList.value.push({
		avatar: 'http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg',
		username: 'flexxx',
		photo: imgUrl.value,
		comment: commentValue.value
	});
	confirmDeclaration();
}

function confirmDeclaration() {
	console.log(111);
	showPrompt.value = false;
	declaration.value = '';
	uni.showToast({
		title: '打卡成功',
		icon: 'success',
		duration: 2000
	});
}
</script>

<style lang="scss" scoped>
.box {
	padding: 10rpx;
}
.card-text {
	position: fixed;
	bottom: 20rpx;
	justify-content: space-between;
	width: 100%;
	margin: 20rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	uni-easyinput {
		border: 2rpx solide #666;
		padding: 16rpx;
		flex: 0;
	}
	button {
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		border: 0;
		background-color: #2db1ba;
		height: 50rpx;
	}
}
.photo-item {
	margin-bottom: 50rpx;
}

.photo {
	width: 100%;
	border-radius: 30rpx;
}

.user-info {
	display: flex;
	align-items: center;
}

.avatar {
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	margin-right: 10rpx;
}

.username {
	color: #2db1ba;
}

.comment {
	margin-top: 10rpx;
	color: #666;
}

.check-in {
	margin-top: 20rpx;
}

.check-in button {
	position: fixed;
	bottom: 30rpx;
	background-color: #2db1ba;
	color: #fff;
	left: 20rpx;
	right: 20rpx;
	border: none;
	border-radius: 25rpx;
	padding: 8rpx 16rpx;
	cursor: pointer;
}

.declaration {
	margin-top: 20rpx;
}

.declaration p {
	margin-bottom: 10rpx;
}

.center {
	display: flex;
	align-items: center;
}
.c_total {
	padding: 20rpx 30rpx 0 30rpx;
	font-size: 28rpx;
}
.empty_box {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 150rpx 10rpx;
	font-size: 28rpx;
	.txt {
		color: RGB(32, 123, 196);
	}
	.click {
		color: $uni-color-primary;
	}
}
.c_comment {
	padding: 20rpx 30rpx;
	font-size: 28rpx;

	.children_item {
		padding: 20rpx 30rpx;
		margin-top: 10rpx;
		margin-left: 80rpx;
		background-color: $uni-bg-color-grey;
		.expand_reply {
			margin-top: 10rpx;
			margin-left: 80rpx;
			.txt {
				font-weight: 600;
				color: RGB(32, 123, 196);
			}
		}
	}
}
.c_popup_box {
	background-color: #fff;
	.reply_text {
		@extend .center;
		padding: 20rpx 20rpx 0 20rpx;
		font-size: 26rpx;
		.text_aid {
			color: $uni-text-color-grey;
			margin-right: 5rpx;
		}
		.text_main {
		}
	}
	.content {
		@extend .center;
		.text_area {
			flex: 1;
			padding: 30rpx;
		}
		.send_btn {
			@extend .center;
			justify-content: center;
			width: 120rpx;
			height: 60rpx;
			border-radius: 20rpx;
			font-size: 28rpx;
			color: #fff;
			background-color: $uni-color-primary;
			margin-right: 20rpx;
		}
	}
}
</style>
