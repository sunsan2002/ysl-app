<!-- 签到页面 -->
<template>
	<view class="content">
		<!-- 弹出框内容区域 -->
		   <view v-show="showPopup" class="popup-container">
		     <view class="popup-content">
		       <text>{{ message }}</text>
		     </view>
		   </view>
		<view class="top">
			<image src="http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg" />
			<view class="text">
				<p class="name">sunsan</p>
				<p>AI引领 智启新程</p>
			</view>
		</view>
		<view class="sign-in">
			<view class="btn" @click="livenessDetection()">
				<p class="h1">人脸签到</p>
				<p>{{ currentTime }}</p>
			</view>
			<view class="select">
				<view class="active" @click="update()">
					<uni-icons color="#fff" type="checkmarkempty" size="13"></uni-icons>
				</view>
				<label for="option3">湖南省张家界市永定区大庸桥街道吉首大学(张家界校区)土木工程与建筑学院</label>
			</view>
		</view>
	</view>
</template>

<script>
import { getVerifyToken, h5VerifyIdentifyReturn } from '@/api/user.js';
import permision from '@/utils/js_sdk/permission.js';
export default {
	data() {
		return {
			// 终端id
			orgId: 0,
			// 姓名
			legalPerson: '李珊',
			// 身份证
			idCard: '431021200209210068',
			currentTime: '',
		};
	},
	

	onLoad(options) {
		// this.orgId = options.orgId || 0;
		// this.legalPerson = options.legalPerson || '';
		// this.idCard = options.idCard || '';
		// 初始调用一次更新时间
		this.updateTime();
		// 每秒钟更新一次时间
		setInterval(this.updateTime, 1000);
	},

	methods: {
		updateTime() {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			const seconds = now.getSeconds().toString().padStart(2, '0');
			this.currentTime = `${hours}:${minutes}:${seconds}`;
		},
		// 检查是否开启摄像头权限
		checkPermissionCamera() {
			return new Promise(async (resolve) => {
				switch (uni.getSystemInfoSync().platform) {
					case 'android':
						const val = await permision.requestAndroidPermission('android.permission.CAMERA');
						if (val == 1) {
							// 已获取授权
							resolve();
						} else if (val == -1) {
							// 被永久拒绝授权
							uni.showModal({
								title: '温馨提示',
								content: '摄像头权限已经被您永久拒绝，请前往设置页面打开',
								showCancel: false,
								confirmText: '前往设置',
								success() {
									// 打开当前App的权限设置界面
									permision.gotoAppPermissionSetting();
								}
							});
						}
						break;

					case 'ios':
						// 是不是第一次开启相机
						const iosFirstCamera = uni.getStorageSync('iosFirstCamera');
						if (iosFirstCamera) {
							// 判断iOS上是否给予摄像头权限，有权限返回true，否则返回false
							const val2 = await permision.judgeIosPermission('camera');
							if (val2) {
								resolve();
							} else {
								uni.showModal({
									title: '温馨提示',
									content: '摄像头权限已经被您拒绝，请前往设置页面打开',
									showCancel: false,
									confirmText: '前往设置',
									success() {
										// 打开当前App的权限设置界面
										permision.gotoAppPermissionSetting();
									}
								});
							}
						} else {
							uni.setStorageSync('iosFirstCamera', true);
							resolve();
						}
						break;
				}
			});
		},

		// 活体认证
		async livenessDetection() {
			// #ifdef MP-WEIXIN
			uni.$u.toast('请使用app进行刷脸验证');
			// #endif

			// #ifdef APP-PLUS
			this.appAuth();
			// #endif

			// #ifdef H5
			await this.checkPermissionCamera();
			this.h5Auth();
			// #endif
		},

		// #ifdef H5
		// h5端实名认证
		async h5Auth() {
			uni.showLoading({
				title: '认证中',
				mask: true
			});

			// 获取verify_token
			const res = await getVerifyToken();
			const verify_token = res.verify_token;
			const successUrl = encodeURIComponent(`${H5_URL}/pages/register/faceDetect?verify_result=1`);
			const failedUrl = encodeURIComponent(`${H5_URL}/pages/register/faceDetect?verify_result=2`);

			// 跳转到百度云实名认证H5页
			window.location.href = `https://brain.baidu.com/face/print/?token=${verify_token}&successUrl=${successUrl}&failedUrl=${failedUrl}`;
			uni.hideLoading();
		},

		// 活体检测成功后的处理
		async h5VerifyIdentifyReturn() {
			uni.showLoading({
				title: '获取认证结果',
				mask: true
			});

			await h5VerifyIdentifyReturn();
			this.successAfter();
		},
		// #endif

		// #ifdef APP-PLUS
		// app端实名认证
		appAuth() {
			// uni.showLoading({
			// 	title: '认证中',
			// 	mask: true
			// });

			// 1、获取实人认证设备信息
			const metaInfo = uni.getFacialRecognitionMetaInfo();
			console.log(this.legalPerson+this.idCard)
			// 2、提交姓名、身份证号、metaInfo到云函数获取certifyId
			uniCloud
				.callFunction({
					name: 'uni-sunsan',
					data: {
						step: 1,
						metaInfo,
						legalPerson: this.legalPerson,
						idCard: this.idCard
					}
				})
				.then((res) => {
					console.log(res)
					if (res.result.code == 500) return uni.$u.toast(res.result.msg);

					const certifyId = res.result.data;
					console.log(certifyId)
					// 3、云函数获取certifyId后，调起实人认证界面
					uni.startFacialRecognitionVerify({
						certifyId,
						// 刷脸圈的颜色 加上这个参数会在ios端会提示 errCode: 10013 刷脸失败
						// progressBarColor: '#4a9f8b;',
						// 认证界面UI朝向 竖屏
						screenOrientation: 'port',
						success: async (e) => {
							console.log(e)
							if (e.errCode != 0) return uni.$u.toast(e.errMsg);

							// 4、获取认证结果
							const certResult = await uniCloud.callFunction({
								name: 'uni-sunsan',
								data: {
									step: 2,
									orgId: this.orgId,
									certifyId,
									serversUrl: HTTP_REQUEST_URL
								}
							});
							uni.showToast({
								title: '认证成功！已完成签到！',
								icon: 'success',
								mask: true
							});
							
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/index/offline'
								});
							}, 1200);

							if (certResult.result.code == 200) {
								this.successAfter();
							} else {
								uni.hideLoading();
								uni.showModal({
									title: '认证失败',
									content: certResult.result.msg,
									showCancel: false
								});
							}
						},
						fail: (e) => {
							uni.$u.toast(e.errMsg);
						}
					});
				})
				.catch((err) => {
					uni.$u.toast('请求云函数失败：' + JSON.stringify(err));
				});
		},
		// #endif

		// 认证成功后的处理
		successAfter() {
			// 审核状态变更为:待审核
			uni.showToast({
				title: '认证成功',
				icon: 'success',
				mask: true
			});

			setTimeout(() => {
				uni.switchTab({
					url: '/pages/index/offline'
				});
			}, 1200);
		}
	}
};
</script>

<style lang="scss" scoped>
.active {
	background-color: #15ba11;
	border-radius: 50%;
	border: 0;
	padding: 0rpx;
	border-radius: 50%;
	border: 2rpx solid #a8a8a8;
	height: 23rpx;
	width: 23rpx;
	line-height: 27rpx;
}
.content {
	background-color: #f3f4f6;
	min-height: 100vh;
	padding: 30rpx;
}
.top {
	background-color: #fff;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	padding: 30rpx;
	display: flex;
	flex-direction: row;
	border-radius: 30rpx;
	gap: 30rpx;
	color: #999999;
	font-size: 25rpx;
	image {
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
	}
	.name {
		color: black;
		font-size: 40rpx;
		margin-bottom: 10rpx;
	}
}
.sign-in {
	margin-top: 30rpx;
	background-color: #fff;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	border-radius: 30rpx;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 50rpx;
}
.btn {
	background-image: linear-gradient(120deg, #7db5fe 0%, #4681ff 100%);
	box-shadow: 0px 10px 15px -3px #94e6fe;
	height: 350rpx;
	width: 350rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	border-radius: 50%;
	gap: 10rpx;
	font-size: 27rpx;
	font-weight: 200;
	color: #ececec;
	.h1 {
		font-weight: bold;
		font-size: 38rpx;
		color: #fff;
	}
}
.select {
	display: flex;
	flex-direction: row;
	margin-top: 30rpx;
	gap: 5rpx;
	color: #5a5a5a;
	font-size: 22rpx;
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px; /* 调整弹出框高度 */
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-100%);
}

.popup-content {
  padding: 10px;
}

button {
  margin-top: 20px;
}
</style>
